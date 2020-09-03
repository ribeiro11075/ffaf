# ffaf
ffaf

### Run Backend Server In Development Mode
1. Confirm a Dockerfile file exists in the server folder
1. Confirm a Dockerfile file exists in the database folder
1. Confirm a docker-compose.yml file exists in the root folder
1. Navigate to the root folder
1. Run docker-compose up --build

### Setup a .env file in the root folder
NODE_PORT=8080 (used by node.js)
NODE_HOST=0.0.0.0 (used by node.js)
POSTGRES_HOST=POSTGRES-DATABASE (used by node.js)
POSTGRES_PORT=5432 (used by node.js)
POSTGRES_USER=postgres (used by node.js and postgres)
POSTGRES_PASSWORD=postgres (used by node.js and postgres)
POSTGRES_DB=test (used by node.js and postgres)
POSTGRES_MAX_CONNECTIONS=1000 (used by node.js and postgres)
