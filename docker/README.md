Steps to build and run:

```
# Builds the image and names it "test-image".
docker build -t test-image .

# Creates a new container using test-image and binds host port 8080 to port 80 within the container.
docker run --rm --publish 8080:80 test-image
```
