from flask import Flask, render_template
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config['SECRET_KEY'] = 'your-secret-key'

@app.route('/')
def home():
    logger.info("Entering home route")
    return render_template('index.html')

@app.route('/category/plain_saree')
def plain_saree():
    logger.info("Entering plain_saree route")
    return render_template('plain_saree.html')

@app.route('/category/cotton_saree')
def cotton_saree():
    logger.info("Entering cotton_saree route")
    return render_template('cotton_saree.html')

@app.route('/category/fancy_saree')
def fancy_saree():
    logger.info("Entering fancy_saree route")
    return render_template('fancy_saree.html')

if __name__ == '__main__':
    app.run(debug=True)