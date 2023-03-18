# Friender (backend)  
Backend to social app for finding new friends.

Deployed on: https://sanchez-friender.onrender.com

To access Friender frontend codebase: https://github.com/amaesanchez/Friender-frontend.git  

## Features
- Use of AWS S3 Bucket for image storage
- Swiping feature in React, using an algorithm leveraging user zipcode and locaiton preference to find the next potential match. 

## Environment Setup Backend

1. Seed `jobly` database in PostgreSQL.

    ```
    psql -f jobly.sql jobly
    ```
    
2. Install dependencies and start app.

    ```
    npm install
    npm start
    ```

Will be running on localhost:3001.

## Env variables
Note: You will need to create an AWS account to populate the following fields in the .env

AWS_BUCKET_NAME=""  
AWS_BUCKET_REGION=""  
AWS_ACCESS_KEY=""  
AWS_SECRET_KEY=""  

## TODO

- [ ] Design more detailed application dashboard.
- [ ] More tests.
