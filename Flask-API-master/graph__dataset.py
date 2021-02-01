from bokeh.plotting import figure, show, save, output_file
from smurf import DataPoint, DataFile

""" Intelligent Injury Detection - Dynamic graphing from an array of numbers."""

x_range = (0, 10)  # could be anything - e.g.(0,1)
y_range = (0, 30)
p = figure(x_range=x_range, y_range=y_range)
img_path = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f' \
           '/67da6728-07e3-4116-a04d-25806d3fe270/d78i5r6-676b6e85-b0cf-4414' \
           '-becc-24bc39ca2eb4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9' \
           '.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0a' \
           'CI6IlwvZlwvNjdkYTY3MjgtMDdlMy00MTE2LWEwNGQtMjU4MDZkM2ZlMjcwXC9kNzhpNXI2L' \
           'TY3NmI2ZTg1LWIwY2YtNDQxNC1iZWNjLTI0YmMzOWNhMmViNC5wbmcifV1dLCJhdW' \
           'QiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xPTdxEK5QGzidLPW2' \
           'B97dR_I9R-7zXWgD6Rt9hKgnWs '
p.image_url(url=[img_path], x=x_range[0], y=y_range[1],
            w=x_range[1] - x_range[0], h=y_range[1] - y_range[0])

heel_value = 0
ball_value = 0
little_toe_value = 0
big_toe_value = 0

smurf = DataFile("data.csv")
smurf.collectData()
smurf.sortData()

for key in smurf.sortedData:
    heel_value = smurf.sortedData[key][0] / 5
    ball_value = smurf.sortedData[key][1] / 5
    big_toe_value = smurf.sortedData[key][2] / 5
    little_toe_value = smurf.sortedData[key][3] / 5

    if 0.0 < heel_value < 0.4:
        heel = "green"
        heel_legend = 'Low'

    if 0.4 < heel_value < 0.7:
        heel = "yellow"
        heel_legend = 'Medium'

    if 0.7 < heel_value < 1.0:
        heel = "red"
        heel_legend = 'High'

    if 0.0 < ball_value < 0.4:
        ball = "green"
        ball_legend = 'Low'

    if 0.4 < ball_value < 0.7:
        ball = "yellow"
        ball_legend = 'Medium'

    if 0.7 < ball_value < 1.0:
        ball = "red"
        ball_legend = 'High'

    if 0.0 < little_toe_value < 0.4:
        little_toe = "green"
        little_toe_legend = 'Low'

    if 0.4 < little_toe_value < 0.7:
        little_toe = "yellow"
        little_toe_legend = 'Medium'

    if 0.7 < little_toe_value < 1.0:
        little_toe = "red"
        little_toe_legend = 'High'

    if 0.0 < big_toe_value < 0.4:
        big_toe = "green"
        big_toe_legend = 'Low'

    if 0.4 < big_toe_value < 0.7:
        big_toe = "yellow"
        big_toe_legend = 'Medium'

    if 0.7 < big_toe_value < 1.0:
        big_toe = "red"
        big_toe_legend = 'High'

    p.circle(x=[4], y=[5.5], fill_color=heel,
             line_color=heel, size=80, legend_label=heel_legend)
    p.circle(x=[5.5], y=[22], fill_color=ball,
             line_color=ball, size=80, legend_label=ball_legend)
    p.circle(x=[2.6], y=[24], fill_color=little_toe, line_color=little_toe,
             size=30, legend_label=little_toe_legend)
    p.circle(x=[5.8], y=[28], fill_color=big_toe, line_color=big_toe,
             size=45, legend_label=big_toe_legend)

    if key == 'initialContact':
        output_file('initialContact.html')
        save(p)
        show(p)
    if key == 'loadingResponse':
        output_file('loadingResponse.html')
        save(p)
        show(p)
    if key == 'midStance':
        output_file('midStance.html')
        save(p)
        show(p)
    if key == 'terminalStance':
        output_file('terminalStance.html')
        save(p)
        show(p)
    if key == 'preSwing':
        output_file('preSwing.html')
        save(p)
        show(p)
    if key == 'swingPhase':
        output_file('swingPhase.html')
        save(p)
        show(p)
