from flask import Flask, flash, request, redirect, url_for
import face_recognition as fr
from flask_cors import CORS
import matplotlib.pyplot as plt

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/sort", methods = ['POST'])
def hi():

    print("hello")

    print(request.files)

    #assuming request is a multipaart form 

    images = request.files.values()

    print("hiiii")

    known_faces = []
    subfolders = []

    
    

    for image in images:
        
        

        fimage = fr.load_image_file(image)
        faces = fr.face_encodings(fimage)
        
        for face in faces:
            
            success = False

            for i in range(len(known_faces)):
                if(fr.compare_faces([known_faces[i]], face)[0]):
                    subfolders[i].append(image.filename)
                    success = True
                    break
            
            if(not success):
               known_faces.append(face)
               subfolders.append([image.filename])
    
    print(subfolders)
    return subfolders


    