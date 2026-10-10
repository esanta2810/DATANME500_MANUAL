from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import webbrowser
from pathlib import Path

HOST = "127.0.0.1"
PORT = 8000

if __name__ == "__main__":
    root = Path(__file__).resolve().parent
    import os
    os.chdir(root)
    server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
    url = f"http://{HOST}:{PORT}"
    print(f"Manual CNC iniciado en {url}")
    print("Presiona Ctrl+C para detenerlo.")
    try:
        webbrowser.open(url)
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
    finally:
        server.server_close()
