import cherrypy
import os
import functools
import json

from .response import Response
from .generator import generator

class Server:
    def __init__(self):
        self._response = Response()

    @cherrypy.expose
    def index(self):
        return "<!DOCTYPE html><h1>Hello World!</h1><p>Access the gui by clicking <a href=\"gui\">here</a>.</p>"

    @cherrypy.expose
    @cherrypy.tools.json_out()
    def api(self, urlParam1=None):
        data = json.loads(cherrypy.request.body.read())
        operation = data['operation']
        identifier = data['id']
        type_val = data['type']
        hourly_or_daily = data['hourly_or_daily']
        start_time = data['start_time']
        end_time = data['end_time']

        return json.dumps({"c": 0, "b": 0, "a": 0}, sort_keys=True)

def CORS():
    cherrypy.response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
    cherrypy.response.headers["Access-Control-Allow-Headers"] = "Content-Type"

def main():
    #g = generator()
    #g.initialize_generator('./powerdash/data/HackathonConfig.csv', './powerdash/data/HackathonDataHourly1of2.csv','./powerdash/data/HackathonDataHourly2of2.csv','./powerdash/data/HackathonDataDaily.csv')

    cherrypy.server.socket_host = '0.0.0.0'
    cherrypy.tree.mount(Server(), "/", config={
        '/':
        {
            'tools.staticdir.root': os.path.abspath(os.path.dirname(__file__)),
            'tools.CORS.on': True
        }
    })
    cherrypy.tools.accept(media='application/json')
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.engine.start()
    cherrypy.engine.block()

if __name__ == '__main__':
    main()
