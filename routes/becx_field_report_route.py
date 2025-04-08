from flask import Flask, Blueprint, render_template, request, redirect, url_for, session, jsonify, send_file, flash
import os
from dotenv import load_dotenv
load_dotenv()

becx_fr_blueprint = Blueprint('becx_fr', __name__)


@becx_fr_blueprint.route('/becx-field-report')
def becx_fr():
    return render_template('becx-field-report.html')