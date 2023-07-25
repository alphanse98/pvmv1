import React , {useEffect, useState} from 'react';
import S3 from 'react-aws-s3';
import axios from "axios";


// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

// a React functional component, used to create a simple upload input and button

let dataStructure =[{ 
                        id:12345, 
                        Heating:"plan", 
                        content:"plan", 
                        Dimension:"25X45", 
                        area:"plan", 
                        facing:"North", 
                        vasthu:"No", 
                        details :[],
                        filterBy :'plan',
                        isActive :false,
                        premium :false,
                        imgLocatrions:[],
                        pdfLocation:"pace2dplans.s3-ap-south-1.amazonaws.com/Screensho",
                        // seo
                        imgAlt : "img content",
                        seoTitle : "lorump",
                        seoKeyWords : "lorump",
                        seoDiscription : "lorump",
                    }]

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

    // let testPOst = async ()=>{
    //     const id = "64ba45da58aa0e5b62c45fcf";

    //     try{
    //         const res = await axios.get(`http://localhost:5000/api/testTile/${id}`)
    //         console.log(res.data)
    //     }catch (error){
    //         console.log(error,"error")
    //     }
    // }

    let data = { 
                 heading:'10X30 elevation',
                 content:'20X30 plan kpoijkoifjo icvoi cew hciue huic hiue hcuh',
                 dimension:'20X30 ',
                 imgPdfLocation:'https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (125).png',
                 area:'500 sqft ',
                 facing:'south ',
                 vasthu:true,
                 details: ['plan', 45],
                 filter: 'elevation',
                 isActive: true,
                 premium: true,
                 imgLocatrions: ['https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (125).png', 'https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Screenshot (126).png'],
                 imgAlt: 'plan',
                 seoTitle: 'seoTitle',
                 seoKeyWords: 'seoKeyWords',
                 seoDiscription: 'seoDiscription',
                }

    let testPOst = async ()=>{
        try{
            const res = await axios.post("http://localhost:4000/api/gallery",data)
            // const res = await axios.get("http://localhost:4000/api/plan")
            console.log(res)
        }catch (error){
            console.log(error,"error")
        }
    }


    return <div>
        <div>React S3 File Upload</div>
        <input type="file" multiple onChange={handleFileInput} />
        <br></br>
        <button onClick={() => uploadFile()}> Upload to S3</button>
        <button onClick={() => testPOst()}> testPOst</button>
        {imgLocation.map((itme,index)=>(
            <div key={index}>
                {/* <img src={itme} className='re' ></img>  */}
                <p>{itme}</p>
            </div>
        ))}
    </div>
}

export default Upload;