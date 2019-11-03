import cherrypy
import os

from .response import Response
 
class Server:
    def __init__(self):
        self._response = Response()

    @cherrypy.expose
    def index(self):
        return "<!DOCTYPE html><h1>Hello World!</h1><p>Access the gui by clicking <a href=\"gui\">here</a>.</p>"

    @cherrypy.expose
    def api(self):
        request = cherrypy.request.body.read().decode()
        return self._response.generate_response(request)

def main():
    cherrypy.server.socket_host = '0.0.0.0'
    cherrypy.tree.mount(Server(), "/", config={
        '/':
        {
            'tools.staticdir.root': os.path.abspath(os.path.dirname(__file__))
        },
        '/gui':
        {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': "gui",
            'tools.staticdir.index': 'index.html'
        }
    })
    cherrypy.engine.start()
    cherrypy.engine.block()

if __name__ == '__main__':
    main()
