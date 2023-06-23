from flask import Flask, flash, request, redirect, url_for
import face_recognition as fr
from flask_cors import CORS
from PIL import Image
import uuid
import shutil
import os
import yagmail


app = Flask(__name__)
CORS(app)

yag = yagmail.SMTP("harishankar.rajeev@gmail.com", oauth2_file="credentials.json")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/sort", methods = ['POST'])
def hi():

    images = request.files.values()

    known_faces = []
    subfolders = []

    for image in images:

        fimage = fr.load_image_file(image)
        flocations = fr.face_locations(fimage)

        THRESHOLD = 0.002
        
        tArea = fimage.shape[0] * fimage.shape[1]
        counter = 0

        while counter < len(flocations):
            face = flocations[counter]
            area = (face[3]-face[1])*(face[0]-face[2])
            if((area / tArea) < THRESHOLD):
                del flocations[counter]
            else:
                counter+=1
        
        faces = fr.face_encodings(fimage, flocations)
        
        for i in range(len(faces)):

            face = faces[i]
          
            success = False
            results = fr.compare_faces(known_faces, face)

            obj = {"filename": image.filename, "coords": flocations[i]}

            for j in range(len(results)):
                if(results[j]):
                    subfolders[j].append(obj)
                    success = True
                    break
          
            if(not success):
               known_faces.append(face)
               subfolders.append([obj])
    
    print(subfolders)
    return subfolders

@app.route('/email', methods = ['POST'])
def woah():
    images = request.files.values()
    email = request.form["email"]

    files = []

    folder = str(uuid.uuid4())
    os.mkdir(folder)

    for image in images:
        fileName = folder + "/" + image.filename
        image.save(fileName)
        files.append(fileName)

    print(files)

    contents = ['Hey there!',
                'Here \'s your pictures! Delivered by FotoFiler.'
                ]
    

    yag.send(email, 'Incoming Pictures!', contents, files)

    shutil.rmtree(folder)

    return("hello")
    