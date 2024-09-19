import os
import json
from flask import Flask, request
from werkzeug.exceptions import BadRequest, ServiceUnavailable
import config

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/projects')
def projects():
    return app.send_static_file('index.html')

@app.route('/test')
def test():
    return 'test'

@app.route('/api/contact', methods=['POST'])
def send():
    if request.method == 'POST':
        form = request.form.to_dict()
        fields = {
            'name': 100,
            'email': 100,
            'message': 1000,
        }
        for field in fields:
            content = form.get(field)
            if not content:
                raise BadRequest(f'{field} is missing in form')
            elif len(content) > fields[field]:
                raise BadRequest(f'{field} cannot exceed {fields[field]} characters')

        if not os.path.exists(config.FORMS_PATH):
            os.mkdir(config.FORMS_PATH)
        n = len(os.listdir(config.FORMS_PATH))
        if n >= 100:
            raise ServiceUnavailable(f'Inbox full, please try again later')
        with open(f'{config.FORMS_PATH}{n}', 'w') as f:
            json.dump(form, f)
        return {'result': 'success'}

@app.errorhandler(BadRequest)
def handle_bad_request(e):
    return {'result': str(e)}, 400

@app.errorhandler(ServiceUnavailable)
def handle_service_unavailable(e):
    return {'result': str(e)}, 503
