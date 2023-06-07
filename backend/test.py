from flask import Flask, flash, request, redirect, url_for
import face_recognition as fr
from flask_cors import CORS
import matplotlib.pyplot as plt

fimage = fr.load_image_file("backend\IMG_3010.jpg")

flocs = fr.face_locations(fimage, number_of_times_to_upsample=2)
fig, ax = plt.subplots()
for fl in flocs:
    x=[fl[1], fl[1], fl[3], fl[3], fl[1]]
    y=[fl[0], fl[2], fl[2], fl[0], fl[0]]
    ax.plot(x, y, color="red")
ax.imshow(fimage)
plt.show()