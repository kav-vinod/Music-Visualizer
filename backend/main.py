import requests
from appfunctions import *
from flask import Flask

app = Flask(__name__)

#Output API route 
@app.route("/output")
def output():
    image_urls = []
    song = "Lavender Haze"
    artist = "Taylor Swift"
    style = "digital art"
    #obtain lyrics 
    song_lyrics = obtain_lyrics(song, artist)

    #separate lyrics into array of verses  
    lyric_array = create_array(song_lyrics)

    #create array of descriptions for each verse 
    descriptions = []
    image_desc = ""
    for i in range(0, len(lyric_array)):
        image_desc = obtain_image_desc(lyric_array[i])
        descriptions.append(image_desc)

    #create an image based on each description - image given in a url 
    for i in descriptions:
        image_urls.append( str(obtain_image_url(i, style) ) ) 
        print(obtain_image_url(i, style))
    #print(image_urls)
    return { "urls" : image_urls }

if __name__ == "__main__":
    app.run(debug=True)

