Steps to build and run:

```
# Navigate to project root.
cd /path/to/siempre-hay-primavera

# Builds the image and names it "api-server-image".
docker build -t api-server-image api-server

# Creates a new api-server container on the internal network.
docker run --rm --name api-server --network internal --volume $PWD/api-server/content:/data/api-server/content:ro api-server-image
```
