import React, { useState } from 'react';
import AWS from 'aws-sdk';

// AWS S3 configurations
const bucketName = 'YOUR_BUCKET_NAME';
const region = 'YOUR_AWS_REGION';
const accessKeyId = 'YOUR_AWS_ACCESS_KEY_ID';
const secretAccessKey = 'YOUR_AWS_SECRET_ACCESS_KEY';

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey
});

const s3 = new AWS.S3();

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.log('No file selected.');
      return;
    }

    const params = {
      Bucket: bucketName,
      Key: selectedFile.name,
      Body: selectedFile,
      ACL: 'public-read'
    };

    const options = {
      partSize: 5 * 1024 * 1024, // 5MB per part for large files
      queueSize: 4 // number of concurrent uploads
    };

    const uploader = s3.upload(params, options);

    uploader.on('httpUploadProgress', (progress) => {
      const { loaded, total } = progress;
      const progressPercentage = Math.round((loaded / total) * 100);
      setUploadProgress(progressPercentage);
    });

    uploader.send((err, data) => {
      if (err) {
        console.log('Error uploading file:', err);
      } else {
        console.log('File uploaded successfully:', data.Location);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUploader;
