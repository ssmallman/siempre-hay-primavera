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

# To create a bridge network:
docker network create <networkName>

# To run bash in a running container:
docker exec -it <containerName> bash
```