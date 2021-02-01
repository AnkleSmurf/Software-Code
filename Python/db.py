import requests
import json


def upload(name, typeOfFile):
    print("herer")
    url = 'http://localhost:5000/files/upload'
    files = {'file': open(name, 'rb')}
    data = {'docID': "0", "type": typeOfFile}
    print("we here")
    requests.post(url, files=files, data=data)


# upload('./sample/initialContact.png', "initial contact")
# upload('./sample/loading_response.png', "loading response")
# upload('./sample/midstance.png', "midstance")
# upload('./sample/preswing.png', "pre-swing")
# upload('./sample/swingPhase.png', "swing phase")
# upload('./sample/terminalStance.png', "terminal stance")
