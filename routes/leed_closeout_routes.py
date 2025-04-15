from flask import Flask, Blueprint, render_template, request, redirect, url_for, session, jsonify, send_file, flash
import os
from dotenv import load_dotenv
load_dotenv()

leed_close_blueprint = Blueprint('leed_close', __name__)


@leed_close_blueprint.route('/leed-closeout')
def leed_closeout():
    return render_template('leed-closeout.html')