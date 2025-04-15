from flask import Flask, render_template
import os
from routes.main_routes import main_blueprint  
from routes.becx_field_report_route import becx_fr_blueprint  
from routes.leed_closeout_routes import leed_close_blueprint
from routes.becx_cvc_routes import becx_cvc_blueprint
from datetime import timedelta


app = Flask(__name__)


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    PERMANENT_SESSION_LIFETIME = timedelta(hours=2) 
    SESSION_COOKIE_NAME = 'session'
    SESSION_COOKIE_HTTPONLY = False
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_SAMESITE = 'Lax'
    CORS_HEADERS = 'Content-Type'  


app.config.from_object(Config)
app.register_blueprint(main_blueprint) 
app.register_blueprint(becx_fr_blueprint) 
app.register_blueprint(leed_close_blueprint)
app.register_blueprint(becx_cvc_blueprint)

if __name__ == "__main__":
    app.run(debug=True)