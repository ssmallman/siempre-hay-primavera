Steps to build and run:

```
# Navigate to project root.
cd /path/to/siempre-hay-primavera

# Builds the image and names it "api-server-image".
docker build -t api-server-image api-server

# Creates a new api-server container and binds host port 3000 to port 80 within the container.
docker run --name api-server --rm --publish 3000:80 --volume $PWD/api-server/content:/data/api-server/content:ro api-server-image
```
