// // Load the AWS SDK for Node.js
// const AWS = require("aws-sdk");
// // Set the region
// // AWS.config.update({region: 'REGION'});
// //upload image file to bucket on React/frontend --  needs some singed url

// // Create S3 service object
// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// // s3.getSignedUrl()
// // call S3 to retrieve upload file to specified bucket
// const uploadParams = { Bucket: process.argv[2], Key: "", Body: "" };
// const file = process.argv[3];

// // Configure the file stream and obtain the upload parameters
// const fs = require("fs");
// const fileStream = fs.createReadStream(file);
// fileStream.on("error", function (err) {
//   console.log("File Error", err);
// });
// uploadParams.Body = fileStream;
// const path = require("path");
// uploadParams.Key = path.basename(file);

// // call S3 to retrieve upload file to specified bucket
// s3.upload(uploadParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   }
//   if (data) {
//     console.log("Upload Success", data.Location);
//   }
// });

