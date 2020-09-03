FROM postgres

COPY schema.sql /docker-entrypoint-initdb.d/01_schema.sql
COPY data.sql /docker-entrypoint-initdb.d/02_data.sql
