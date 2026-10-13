#!/usr/bin/env python3
"""Serve a checked static build on loopback for concurrent browser requests."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class ReviewServer(ThreadingHTTPServer):
    request_queue_size = 128
    daemon_threads = True

class Handler(SimpleHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'
    def log_message(self, format, *args):
        if args and str(args[1]) not in ('200', '304'):
            super().log_message(format, *args)

parser = argparse.ArgumentParser()
parser.add_argument('--directory', default='.cache/production-review')
parser.add_argument('--port', type=int, default=1328)
args = parser.parse_args()
server = ReviewServer(('127.0.0.1', args.port), partial(Handler, directory=args.directory))
print(f'Review: http://127.0.0.1:{args.port}/ -> {args.directory}', flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
