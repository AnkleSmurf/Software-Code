import csv

class DataPoint:
    def __init__(self, heelVoltage, ballVoltage, bigtoeVoltage, littletoeVoltage):
        self.heelVoltage = heelVoltage
        self.ballVoltage = ballVoltage
        self.bigtoeVoltage = bigtoeVoltage
        self.littletoeVoltage = littletoeVoltage

class DataFile:
    def __init__(self, filename):
        self.inputFile = filename
        self.midheelVoltage = 0 # average voltage for all data points (heel)
        self.midballVoltage = 0 # '' (ball)
        self.midbigVoltage = 0 # '' (big toe)
        self.midlittleVoltage = 0 # '' (little toe)
        self.dataPoints = [] # list of all data points
        self.sortedData = {} # dictionary to hold 6 lists of data points corresponding to each stage of the gait cycle
    
    def collectData(self):
        i = 0
        with open(self.inputFile, encoding='utf-8-sig') as inputData:
            reader = csv.reader(inputData)
            for line in reader:
                heelVoltage = float(line[0])
                ballVoltage = float(line[1])
                bigtoeVoltage = float(line[2])
                littletoeVoltage = float(line[3])
                self.dataPoints.append(
                    DataPoint(heelVoltage, ballVoltage, bigtoeVoltage, littletoeVoltage)
                    )
                self.midheelVoltage += heelVoltage
                self.midballVoltage += ballVoltage
                self.midbigVoltage += bigtoeVoltage
                self.midlittleVoltage += littletoeVoltage
                i += 1
            self.midheelVoltage /= i # dividing by number of data points to get average value for each parameter
            self.midballVoltage /= i
            self.midbigVoltage /= i
            self.midlittleVoltage /= i
    
    def sortData(self):
        initialContact = [] # lists of data points corresponding to each phase of the gait cycle
        loadingResponse = []
        midStance = []
        terminalStance = []
        preSwing = []
        swingPhase = []
        errors = 0
        for data in range(len(self.dataPoints)):
            if self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage and self.dataPoints[data].bigtoeVoltage < self.midbigVoltage:
                initialContact.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and self.dataPoints[data].bigtoeVoltage < self.midbigVoltage:
                loadingResponse.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage >= self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and self.dataPoints[data].bigtoeVoltage >= self.midbigVoltage:
                midStance.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage >= self.midballVoltage and self.dataPoints[data].bigtoeVoltage >= self.midbigVoltage:
                terminalStance.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage and self.dataPoints[data].bigtoeVoltage >= self.midbigVoltage:
                preSwing.append(self.dataPoints[data])
            
            elif self.dataPoints[data].heelVoltage < self.midheelVoltage and self.dataPoints[data].ballVoltage < self.midballVoltage and self.dataPoints[data].bigtoeVoltage < self.midbigVoltage:
                swingPhase.append(self.dataPoints[data])
            
            else:
                errors += 1

        iCAverage = [0, 0, 0, 0] # average voltage for each of the sensors (heel, ball, big toe, little toe) for
        lRAverage = [0, 0, 0, 0] # all data points in each stage of the gait cycle
        mSAverage = [0, 0, 0, 0]
        tSAverage = [0, 0, 0, 0]
        pSAverage = [0, 0, 0, 0]
        sPAverage = [0, 0, 0, 0]
        for i in range(len(initialContact)):
            iCAverage[0] += initialContact[i].heelVoltage
            iCAverage[1] += initialContact[i].ballVoltage
            iCAverage[2] += initialContact[i].bigtoeVoltage
            iCAverage[3] += initialContact[i].littletoeVoltage
        for i in range(len(loadingResponse)):
            lRAverage[0] += loadingResponse[i].heelVoltage
            lRAverage[1] += loadingResponse[i].ballVoltage
            lRAverage[2] += loadingResponse[i].bigtoeVoltage
            lRAverage[3] += loadingResponse[i].littletoeVoltage
        for i in range(len(midStance)):
            mSAverage[0] += midStance[i].heelVoltage
            mSAverage[1] += midStance[i].ballVoltage
            mSAverage[2] += midStance[i].bigtoeVoltage
            mSAverage[3] += midStance[i].littletoeVoltage
        for i in range(len(terminalStance)):
            tSAverage[0] += terminalStance[i].heelVoltage
            tSAverage[1] += terminalStance[i].ballVoltage
            tSAverage[2] += terminalStance[i].bigtoeVoltage
            tSAverage[3] += terminalStance[i].littletoeVoltage
        for i in range(len(preSwing)):
            pSAverage[0] += preSwing[i].heelVoltage
            pSAverage[1] += preSwing[i].ballVoltage
            pSAverage[2] += preSwing[i].bigtoeVoltage
            pSAverage[3] += preSwing[i].littletoeVoltage
        for i in range(len(swingPhase)):
            sPAverage[0] += swingPhase[i].heelVoltage
            sPAverage[1] += swingPhase[i].ballVoltage
            sPAverage[2] += swingPhase[i].bigtoeVoltage
            sPAverage[3] += swingPhase[i].littletoeVoltage
        iCAverage = [num / len(initialContact) for num in iCAverage] # dividing by number of data points in each stage of gait cycle
        lRAverage = [num / len(loadingResponse) for num in lRAverage] # to get average value for each parameter
        mSAverage = [num / len(midStance) for num in mSAverage]
        tSAverage = [num / len(terminalStance) for num in tSAverage]
        pSAverage = [num / len(preSwing) for num in pSAverage]
        sPAverage = [num / len(swingPhase) for num in sPAverage]
        self.sortedData['initialContact'] = iCAverage
        self.sortedData['loadingResponse'] = lRAverage
        self.sortedData['midStance'] = mSAverage
        self.sortedData['terminalStance'] = tSAverage
        self.sortedData['preSwing'] = pSAverage
        self.sortedData['swingPhase'] = sPAverage

    
    def exportData(self):
        return self.sortedData

smurf = DataFile("alldata.csv")
smurf.collectData()
smurf.sortData()
smurf.exportData()
