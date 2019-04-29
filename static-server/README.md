Steps to build and run:

```
# Navigate to project root.
cd /path/to/siempre-hay-primavera

# Builds the image and names it "static-server-image".
docker build -t static-server-image static-server

# Creates a new static-server container and binds host port 8080 to port 80 within the container.
docker run --name static-server --rm --publish 8080:80 --volume $PWD/static-server/content:/usr/share/nginx/html:ro static-server-image
```
