from flask import Flask, Blueprint, render_template, request, redirect, url_for, session, jsonify, send_file, flash
import os
from dotenv import load_dotenv
load_dotenv()

main_blueprint = Blueprint('main', __name__)


@main_blueprint.route('/')
def home():
    return render_template('index.html')