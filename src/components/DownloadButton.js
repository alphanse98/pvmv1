import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const bucketName = 'planmyspace2dplans';
const fileName = 'Alphanse-developer-resume.pdf';

function DownloadButton() {
  const [downloadURL, setDownloadURL] = useState('');

  useEffect(() => {
    const fetchDownloadURL = async () => {
      // Set your AWS access credentials
      AWS.config.update({
        accessKeyId: 'AKIA5DRSJQDF6IDAUF3M',
        secretAccessKey: 'NTngnYakpTKwYfNgnDQyZ5dAcSDStObMN7wX/QIn',
        region: 'ap-south-1' // Replace with your region
      });

      const s3 = new AWS.S3();

      const params = {
        Bucket: bucketName,
        Key: fileName,
        Expires: 60 // Expiration time in seconds (adjust as needed)
      };

      const url = await s3.getSignedUrlPromise('getObject', params);
      setDownloadURL(url);
    };

    fetchDownloadURL();
  }, []);

  return (
    <div>
      {downloadURL ? (
        <a href={downloadURL} download>
          <button>Download File</button>
        </a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DownloadButton;
