# ffaf
ffaf

### Run Backend Server In Development Mode
1. Confirm a Dockerfile file exists in the server folder
1. Confirm a Dockerfile file exists in the database folder
1. Confirm a docker-compose.yml file exists in the root folder
1. Navigate to the root folder
1. Run docker-compose up --build

### Setup a .env file in the root folder
1. `NODE_PORT=8080`
  1. Used by node.js
1. `NODE_HOST=0.0.0.0`
  1. Used by node.js
1. `POSTGRES_HOST=POSTGRES-DATABASE`
  1. Used by node.js
1. `POSTGRES_PORT=5432`
  1. Used by node.js
1. `POSTGRES_USER=postgres`
  1. Used by node.js
  1. Used by postgres
1. `POSTGRES_PASSWORD=postgres`
  1. Used by node.js
  1. Used by postgres
1. `POSTGRES_DB=test`
  1. Used by node.js
  1. Used by postgres
1. `POSTGRES_MAX_CONNECTIONS=1000`
  1. Used by node.js
  1. Used by postgres
