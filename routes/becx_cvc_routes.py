from flask import Flask, Blueprint, render_template, request, redirect, url_for, session, jsonify, send_file, flash
import os
from dotenv import load_dotenv
load_dotenv()

becx_cvc_blueprint = Blueprint('becx_cvc', __name__)


@becx_cvc_blueprint.route('/becx-cvcs')
def becx_cvcs():
    return render_template('becx-cvcs.html')