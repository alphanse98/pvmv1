import React , {useEffect, useState} from 'react';
import S3 from 'react-aws-s3';
import axios from "axios";


// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

// a React functional component, used to create a simple upload input and button

// let dataStructure =[{ 
     
//     heading:"Elevation", 
//     content:"Elevation drawings are orthographic elevations, which means they are flat 2d drawings. Orthographic projection according to Merriam Webster is the ‘projection of a single view of an object (such as a view of the front) onto a drawing surface in which the lines of projection are perpendicular to the drawing surface. This is not to be confused with the concept of 3d elevation. 3d elevation is real-time elevation generation based on cad drafting. As one changes elements in the floor plans, changes reflect in the elevation. Coming back to the elevation definition.", 
//     dimension:"25 x 45", 
//     area:"1500 Sqft", 
//     facing:"North", 
//     vasthu:"No", 
//     details :["2BHk", "2 Floor", "Morden","2BHk", "2 Floor", "Morden", ],
//     filter :'plan',
//     isActive :false,
//     premium :false,
//     imgLocations: [
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/22.jpeg",
//           alt:"elevation",
//           title:"elevation",
//         },
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/23.jpeg",
//           alt:"elevation",
//           title:"elevation",
//         },
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/12.jpeg",
//           alt:"elevation",
//           title:"elevation",
//         },
//     ],
//     pdfLocation:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/34.jpeg",
//     // seo
//     imgAlt : "img content",
//     seoTitle : "lorump",
//     seoKeyWords : "lorump",
//     seoDiscription : "lorump",
// }]

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imgLocation, SetimgLocation] = useState([]);


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
                    heading:"Elevation", 
                    content:"Elevation drawings are orthographic elevations, which means they are flat 2d drawings. Orthographic projection according to Merriam Webster is the ‘projection of a single view of an object (such as a view of the front) onto a drawing surface in which the lines of projection are perpendicular to the drawing surface. This is not to be confused with the concept of 3d elevation. 3d elevation is real-time elevation generation based on cad drafting. As one changes elements in the floor plans, changes reflect in the elevation. Coming back to the elevation definition.", 
                    dimension:"25 x 45", 
                    area:"1500 Sqft", 
                    facing:"North", 
                    vasthu:"No", 
                    details :["2BHk", "2 Floor", "Morden","2BHk", "2 Floor", "Morden", ],
                    filter :'plan',
                    isActive :false,
                    premium :false,
                    imgLocations: [
                        {
                            img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/12.jpeg",
                            alt:"elevation",
                        },
                        {
                            img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/23.jpeg",
                            alt:"elevation",
                            },
                        {
                            img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/22.jpeg",
                            alt:"elevation",
                            },
                        
                    ],
                    pdfLocation:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/34.jpeg",
                    // seo
                    imgAlt : "img content",
                    seoTitle : "lorump",
                    seoKeyWords : "lorump",
                    seoDiscription : "lorump",
                }
                    
                    // /user
    let testPOst = async ()=>{  
        try{
            // const res = await axios.post("https://plantest.onrender.com/api/gallery",data)
            const res = await axios.post("http://localhost:4000/api/gallery",data)
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
                <img src={itme} className='re' ></img> 
                <p>{itme}</p>
            </div>
        ))}
    </div>
}

export default Upload;


// 248
// 262
// 274


// {
//     "heading": "5BHK Elevation",
//     "content" : "",
//     "dimension": "40'X50'",
//     "area": "2000 Sqft",
//     "facing": "East",
//     "vasthu": "Yes",
//     "details": [
//         "simple  Elevation design",
//         "Car Parking",
//         "2 Floor"
//     ],
//     "filter": "elevation",
//     "isActive": false,
//     "premium": false,
//     "imgLocations": [
//         {
//             "img": "https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-02-01+at+3.18.25+PM+(3).jpeg",
//             "alt": "5BHK Elevation "
//         }
//     ],
//     "pdfLocation": "https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/34.jpeg",
//     "seoTitle": "5BHK Elevation| PlanMyDesign.com",
//     "seoKeyWords": "47'X40' plan",
//     "seoDescription": "47'X40'  plan free download"
// }
