import os
import json
from flask import Flask
from flask import request
from werkzeug.exceptions import BadRequest, ServiceUnavailable

app = Flask(__name__)

@app.route('/send', methods=['POST'])
def send():
    if request.method == 'POST':
        form = request.form.to_dict()
        for i in ['name', 'email', 'message']:
            if i not in form:
                raise BadRequest(f'"{i}" is missing in form')
        if not os.path.exists('forms'):
            os.mkdir('forms')
        n = len(os.listdir('forms'))
        if n >= 100:
            raise ServiceUnavailable(f'Inbox full, please try again later')
        with open(f'forms/{n}', 'w') as f:
            json.dump(form, f)
        return {'result': 'success'}

@app.errorhandler(BadRequest)
def handle_bad_request(e):
    return {'result': str(e)}, 400

@app.errorhandler(ServiceUnavailable)
def handle_service_unavailable(e):
    return {'result': str(e)}, 503
