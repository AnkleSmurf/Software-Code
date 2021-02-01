This application has not been published yet, to run it locally:

1. Clone the repository to local device
2. Navigate to Software-Code folder
3. $cd biomed
4. $npm start
5. go to a new terminal and navigate to Software-Code folder again
6. $cd biomed
7. $cd backend
8. $node server.js

Now the webpage should be running on localhost:3000 and the server API will be running on localhost:5000

Some background: This is a MERN stack webapp composed of three main components, the front-end, back-end, and data-processor

Workflow: 
- The data is first received through MQTT request on AWS IoT, which is linked to a AWS EC2 Lambda function that processes the csv data file. (The code for the lambda function can be found in the Python folder.
- The python data processor takes in the raw data and categorizes them into different phases of the gait cycle and cleans it from noise. 
- Then it is processed and compiled into a heatmap plot through Bokeh which is exported as a PNG file.
- The PNG files are uploaded via POST request to MongoDB
- The client/user can access their processed heatmap images through our webapp, which is not made public yet. (This webapp can be ran in a localhost environment by following the steps marked above)
- The user can register with their device ID and view their heatmaps sorted by gait

Future steps:
- Integrate amazon congito secuity system
- Improve UI athetics 
