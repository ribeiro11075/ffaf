# ffaf
ffaf

### Run Backend Server In Development Mode
1. Confirm Dockerfile exists in server folder
1. Confirm docker-compose.yml exists in server folder
1. Navigate into server folder
1. Run docker-compose up --build
1. Navigate to localhost with port defined "http://0.0.0.0:8080/"

### Setup .env file in Backend server
1. NODE_PORT=8080
1. NODE_HOST=0.0.0.0
1. POSTGRESQL_HOST=POSTGRESQL-DATABASE
1. POSTGRESQL_PORT=5432
1. POSTGRESQL_USER=postgres
1. POSTGRESQL_PASSWORD=postgres
1. POSTGRESQL_DATABASE=test
1. POSTGRESQL_MAX_CONNECTIONS=1000
