Relevant docs:

* https://hub.docker.com/_/nginx/

Other useful commands:

```
# To see what containers are available:
docker ps -a

# To remove a container:
docker rm <containerId>

# To see what images are available:
docker images

# To remove an image:
docker rmi <imageId>

# To run bash in a running container:
docker exec -it <containerName> bash
```

Steps to build and run:

```
# Builds the image and names it "test-image".
docker build -t test-image docker

# Creates a new container using test-image and binds host port 8080 to port 80 within the container.
docker run --name test --rm --publish 8080:80 --volume $PWD/content:/usr/share/nginx/html:ro test-image
```
