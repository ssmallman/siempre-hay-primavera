Steps to build and run the api-server:
(Note: We don't need to do this anymore! Try using docker-compose instead!)

```
# Navigate to project root.
cd /path/to/siempre-hay-primavera

# Make sure that the `internal` network exists.
docker network create internal

# Builds the image and names it "api-server-image".
docker build -t api-server-image api-server

# Creates a new api-server container on the internal network.
docker run --rm --name api-server --network internal --volume $PWD/api-server/content:/data/api-server/content:ro api-server-image
```
