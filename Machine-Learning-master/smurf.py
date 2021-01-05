import csv

class DataPoint:
    def __init__(self, time, heelVoltage, ballVoltage, ankleVelocity):
        self.time = time
        self.heelVoltage = heelVoltage
        self.ballVoltage = ballVoltage
        self.ankleVelocity = ankleVelocity

class DataFile:
    def __init__(self, filename):
        self.inputFile = filename
        self.midheelVoltage = 0
        self.midballVoltage = 0
        self.dataPoints = []
        self.sortedData = {}
    
    def collectData(self):
        i = 0
        startTime = 0
        with open(self.inputFile, encoding='utf-8-sig') as inputData:
            reader = csv.reader(inputData)
            for line in reader:
                time = float(line[0][-6:])
                if i == 0:
                    startTime += time
                heelVoltage = float(line[1])
                ballVoltage = float(line[2])
                ankleVelocity = float(line[3])
                self.dataPoints.append(
                    DataPoint(time - startTime, heelVoltage, ballVoltage, ankleVelocity)
                    )
                self.midheelVoltage += heelVoltage
                self.midballVoltage += ballVoltage
                i += 1
            self.midheelVoltage /= i
            self.midballVoltage /= i
    
    def sortData(self):
        initialContact = []
        loadingResponse = []
        midStance = []
        terminalStance = []
        preSwing = []
        swingPhase = []
        for data in range(len(self.dataPoints)):
            if self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage and abs(self.dataPoints[data].ankleVelocity) > 1:
                initialContact.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage and abs(self.dataPoints[data].ankleVelocity) < 1:
                loadingResponse.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and abs(self.dataPoints[data].ankleVelocity) < 1:
                midStance.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and abs(self.dataPoints[data].ankleVelocity) < 1:
                terminalStance.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and abs(self.dataPoints[data].ankleVelocity) > 1:
                preSwing.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage:
                swingPhase.append(self.dataPoints[data])
            
            else:
                errors += 1
        self.sortedData['initialContact'] = initialContact
        self.sortedData['loadingResponse'] = loadingResponse
        self.sortedData['midStance'] = midStance
        self.sortedData['terminalStance'] = terminalStance
        self.sortedData['preSwing'] = preSwing
        self.sortedData['swingPhase'] = swingPhase
    
    def exportData(self):
        return self.sortedData

smurf = DataFile("heelballdata.csv")
smurf.collectData()
smurf.sortData()
smurf.exportData()