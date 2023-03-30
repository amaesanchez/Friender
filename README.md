# Friender (backend)  
Backend to social app for finding new friends.

Deployed on: https://friender-be-ams.onrender.com
**Username: guest  
Password: password**

To access Friender frontend codebase: https://github.com/amaesanchez/Friender-frontend.git  

## Features
- Use of AWS S3 Bucket for image storage
- Swiping feature in React, using an algorithm leveraging user zipcode and locaiton preference to find the next potential match. 

## Local Setup

1. Seed `friender` and `friender_test` databases in PostgreSQL.

    ```
    psql -f friender.sql
    ```
    
2. Install dependencies and start app.

    ```
    npm install
    node server.js
    ```

Will be running on localhost:3001.

## Env variables
Note: You will need to create an AWS account to populate the following fields in the .env

AWS_BUCKET_NAME=""  
AWS_BUCKET_REGION=""  
AWS_ACCESS_KEY=""  
AWS_SECRET_KEY=""  

## TODO

- [ ] Implement instant messaging with matches
- [ ] Add OAuth login feature
- [ ] Add tests
