from flask import Flask, Blueprint, render_template, request, redirect, url_for, session, jsonify, send_file, flash
import os
from dotenv import load_dotenv
load_dotenv()

submittal_review_blueprint = Blueprint('sub_rev', __name__)


@submittal_review_blueprint.route('/submittal-reviews')
def submittal_review():
    return render_template('submittal-reviews.html')