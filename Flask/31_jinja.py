#index()
from flask import *

app = Flask(__name__)


@app.route('/')

def index():

    a = ['Python','Cython']
    b = 'Hi there Elizabeth'
    c = ['java','py','cy','php']
    return render_template('abc.html',name = a, name2 = b, name3 = c)


if __name__ == '__main__':
    app.run()
