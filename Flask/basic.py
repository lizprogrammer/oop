from flask import *

app = Flask(__name__)


@app.route('/names/<username>')
def index(username):
    return render_template('abc.html',name=username)


if __name__ == '__main__':
    app.run()
