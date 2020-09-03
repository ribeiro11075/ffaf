# ffaf
ffaf

### Run Backend Server In Development Mode
  [ ] Confirm a Dockerfile file exists in the server folder
  [ ] Confirm a Dockerfile file exists in the database folder
  [ ] Confirm a docker-compose.yml file exists in the root folder
  [ ] Navigate to the root folder
  [ ] Run docker-compose up --build

### Setup a .env file in the root folder
1. `NODE_PORT=8080`
1. `NODE_HOST=0.0.0.0`
1. `POSTGRES_HOST=POSTGRES-DATABASE`
1. `POSTGRES_PORT=5432`
1. `POSTGRES_USER=postgres`
1. `POSTGRES_PASSWORD=postgres`
1. `POSTGRES_DB=test`
1. `POSTGRES_MAX_CONNECTIONS=1000`

#### Variable mapping
1. node.js
  - NODE_PORT
  - NODE_HOST
  - POSTGRES_HOST
  - POSTGRES_PORT
  - POSTGRES_USER
  - POSTGRES_PASSWORD
  - POSTGRES_DB
  - POSTGRES_MAX_CONNECTIONS
2. postgres
  - POSTGRES_USER
  - POSTGRES_PASSWORD
  - POSTGRES_DB
  - POSTGRES_MAX_CONNECTIONS
