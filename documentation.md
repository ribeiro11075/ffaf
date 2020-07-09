### Build Docker Image
1. Navigate into server/client folder
1. Confirm Dockerfile exists
1. Run "docker build -t ffaf-server ."
1. Check image exists by running "docker images"

### Run Node Server
1. Run "docker run -p 8080:8080 --name node -d ffaf-server"
1. Confirm container exists and active by running "docker ps"
1. Navigate to localhost with port defined "http://0.0.0.0:8080/"
