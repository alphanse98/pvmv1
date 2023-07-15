import React , {useEffect, useState} from 'react';
import S3 from 'react-aws-s3';

// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

// a React functional component, used to create a simple upload input and button

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imgLocation, SetimgLocation] = useState([]);

    // let t =  ['https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (125).png', 'https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (126).png']
    // let a  = ['https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (37).png', 'https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (36).png']
    // console.log(selectedFile)
    // console.log(imgLocation,'imgLocation')
    //   l?

    // the configuration information is fetched from the .env file
    const config = {
        bucketName: "planmyspace2dplans",
        region: "ap-south-1",
        accessKeyId: "AKIA5DRSJQDF6IDAUF3M",
        secretAccessKey: "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",
    }

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files);
    }

    const uploadFile = async () => {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        let uplosdetFileList =[]

        for(let i=0; i<selectedFile.length; i++){
            
            let file = selectedFile[i],
                fileName = file.name;

            try {
                const data = await ReactS3Client.uploadFile(file, fileName);
                uplosdetFileList.push(data.location);
              } catch (err) {
                console.error(err);
              }

        }
        SetimgLocation(uplosdetFileList)
        console.log(imgLocation, 'updated imgLocation');


        
        // ReactS3Client
        // .uploadFile(file, file.name)
        // // .then(data => console.log(data,'res'))
        // .then(data => SetImgState(data))
        // .catch(err => console.error(err))
    }


    return <div>
        <div>React S3 File Upload</div>
        <input type="file" multiple onChange={handleFileInput} />
        <br></br>
        <button onClick={() => uploadFile()}> Upload to S3</button>
        {imgLocation.map((itme,index)=>(
            <div key={index}>
                {/* <img src={itme} className='re' ></img>  */}
                <p>{itme}</p>
            </div>
        ))}
    </div>
}

export default Upload;