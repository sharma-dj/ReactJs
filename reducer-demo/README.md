# React App with multi stage docker build

docker build --no-cache -t reducer-demo-docker-image:1.0.3 .

docker run --rm -it -p 3000:80 reducer-demo-docker-image:1.0.3