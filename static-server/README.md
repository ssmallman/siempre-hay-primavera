Steps to build and run the static-server:
(Note: We don't need to do this anymore! Try using docker-compose instead!)

```
# Navigate to project root.
cd /path/to/siempre-hay-primavera

# Make sure that the `internal` network exists.
docker network create internal

# Builds the image and names it "static-server-image".
docker build -t static-server-image static-server

# Creates a new static-server container on the internal network and binds host port 9999 to port 80 within the container.
docker run --rm --name static-server --network internal --publish 9999:80 --volume $PWD/static-server/content:/usr/share/nginx/html:ro static-server-image
```
