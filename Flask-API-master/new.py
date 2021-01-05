""" Intelligent Injury Detection - Dynamic graphing from an array of numbers."""
from bokeh.models import BoxAnnotation
from bokeh.plotting import figure, output_file, show
from bokeh.plotting import curdoc
from bokeh.models import ColumnDataSource, Range1d
from bokeh.io import export_png

x_range = (0, 10)  # could be anything - e.g.(0,1)
y_range = (0, 30)
p = figure(x_range=x_range, y_range=y_range)
img_path = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f' \
           '/67da6728-07e3-4116-a04d-25806d3fe270/d78i5r6-676b6e85-b0cf-4414' \
           '-becc-24bc39ca2eb4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9' \
           '.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0a'\
    'CI6IlwvZlwvNjdkYTY3MjgtMDdlMy00MTE2LWEwNGQtMjU4MDZkM2ZlMjcwXC9kNzhpNXI2L' \
           'TY3NmI2ZTg1LWIwY2YtNDQxNC1iZWNjLTI0YmMzOWNhMmViNC5wbmcifV1dLCJhdW' \
           'QiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xPTdxEK5QGzidLPW2' \
           'B97dR_I9R-7zXWgD6Rt9hKgnWs '
p.image_url(url=[img_path], x=x_range[0], y=y_range[1],
            w=x_range[1] - x_range[0], h=y_range[1] - y_range[0])
doc = curdoc()
doc.add_root(p)

# VARIABLE FOR ALPHA to fill_alpha
# if statement to change gradient every time- white to red
# for loop on the p.circle? to show for every instance. very inefficient

p.circle(x=[4, 5.5], y=[5.5, 22], fill_alpha=0.4, fill_color="red",
         line_color="red", size=80)
p.circle(x=[2.6], y=[24], fill_alpha=0.2, fill_color="red", line_color="red",
         size=30)
p.circle(x=[5.8], y=[28], fill_alpha=1, fill_color="red", line_color="red",
         size=45)

show(p)
