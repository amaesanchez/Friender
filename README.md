# Friender-backend

Backend deployed on: https://sanchez-friender.onrender.com

To access Friender frontend codebase: https://github.com/amaesanchez/Friender-frontend.git  

## Features
- Use of AWS S3 Bucket for image storage
- Swiping feature in React, using an algorithm leveraging user zipcode and locaiton preference to find the next potential match. 

## Environment Setup Backend

```
git clone [repo url]
psql -f jobly.sql jobly
npm install
npm start
```

Will be running on localhost 3001.

## Env variables
Note: You will need to create an AWS account to populate the following fields in the .env

AWS_BUCKET_NAME=""  
AWS_BUCKET_REGION=""  
AWS_ACCESS_KEY=""  
AWS_SECRET_KEY=""  
