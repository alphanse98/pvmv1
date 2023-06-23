import React from 'react';
import S3 from 'react-aws-s3';
import { Buffer } from 'buffer';


class FileUploadComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      file: null
    };

    this.config = {
        bucketName: "planmyspace2dplans",
        region: "ap-south-1",
        accessKeyId: "AKIA5DRSJQDFSHKE5MVX",
        secretAccessKey: "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",
    };
    
    this.ReactS3Client = new S3(this.config);
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ file });
  }

  handleFileUpload = async () => {
    const { file } = this.state;
    if (file) {
      try {
        const result = await this.ReactS3Client.uploadFile(file);
        console.log("File upload success:", result.location);
      } catch (error) {
        console.error("File upload error:", error);
      }
    }
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleFileUpload}>Upload File</button>
      </div>
    );
  }
}

export default FileUploadComponent;
