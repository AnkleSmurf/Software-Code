""" Intelligent Injury Detection - Dynamic graphing from an array of numbers."""
from bokeh.models import BoxAnnotation, ColumnDataSource
from bokeh.plotting import figure, output_file, show
from bokeh.io import export_png

class Graph:

    def __init__(self, file_name):
        self.file_name = file_name
        self.graph_name = "sample.png"

    def makeGraph(self):
        TOOLS = "pan,wheel_zoom,box_zoom,reset,save"

        x = []
        y = []
        # bit messy - need to fix indexing on x
        f = open("graphingtest.csv")
        for line in f:
            print((line.strip('\n').split(',')[0][-6:]))
            x.append(float(line.strip('\n').split(',')[0][-6:]))
            y.append(line.strip('\n').split(',')[1])

        r = x[0]

        x = [n - r for n in x]

        print(x)
        print(y)


        p = figure(x_axis_type="linear", tools=TOOLS, title="Threshold")
        p.background_fill_color = "#efefef"
        p.xgrid.grid_line_color = None
        p.xaxis.axis_label = 'Time'
        p.yaxis.axis_label = 'Value'

        p.line(x, y, line_color='grey')

        # for fix after figuring out math
        # fix the subtraction factor to be relative
        green_number = float(max(y)) - 1.5
        red_number = float(max(y)) - 0.5

        p.add_layout(BoxAnnotation(bottom=red_number, fill_alpha=0.2, fill_color='red'))
        p.add_layout(BoxAnnotation(top=green_number, fill_alpha=0.2,
                                fill_color='green'))
        p.add_layout(BoxAnnotation(bottom=green_number, top=red_number, fill_alpha=0.2,
                                fill_color='yellow'))

        output_file("threshold.html", title=self.file_name)

        export_png(p, filename="graph.png")

i = Graph("graphingtest.csv")
i.makeGraph()
