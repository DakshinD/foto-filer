from flask import Flask, flash, request, redirect, url_for
import face_recognition as fr

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/sort", methods = ['POST'])
def hi():

    #assuming request is a multipaart form 

    images = request.files.values()

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
    
    return subfolders


    