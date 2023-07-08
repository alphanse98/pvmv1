import React from 'react'

const Gallery = () => {
  return (
  <section className='headerContainer'>
      <div className='gallerySection'>
      <hi className="serviceHeading fontFamily"  id="Gallery" >Gallery</hi> 
        <div className='img-sliders'>
            <div className='img-slide'>
                <img src={require('../assets/floor plan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation1.jpeg')} alt='My' ></img>
                <img src={require('../assets/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation3.jpeg')} alt='My' ></img>
            </div>
            <div className='img-slide'>
                <img src={require('../assets/floor plan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation1.jpeg')} alt='My' ></img>
                <img src={require('../assets/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation3.jpeg')} alt='My' ></img>
            </div>
            <div className='img-slide'>
                <img src={require('../assets/floor plan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation1.jpeg')} alt='My' ></img>
                <img src={require('../assets/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/elevation3.jpeg')} alt='My' ></img>
            </div>
            
           
        </div>
        <div className='img-sliders rightBox'>
            <div className='img-slide right'>
                <img src={require('../assets/GalleryImgs/interior2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior3.jpeg')} alt='My' ></img>
                <img src={require('../assets/floorplan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior4.jpeg')} alt='My' ></img>
            </div>
            <div className='img-slide right'>
                <img src={require('../assets/GalleryImgs/interior2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior3.jpeg')} alt='My' ></img>
                <img src={require('../assets/floorplan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior4.jpeg')} alt='My' ></img>
            </div>
            <div className='img-slide right'>
                <img src={require('../assets/GalleryImgs/interior2.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior3.jpeg')} alt='My' ></img>
                <img src={require('../assets/floorplan1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior1.jpeg')} alt='My' ></img>
                <img src={require('../assets/GalleryImgs/interior4.jpeg')} alt='My' ></img>
            </div>
           
        </div>
        <button className='HeaderDownloadBtn btnCetnre'>Viwe More</button>
      </div>
  </section>
  )
}

export default Gallery

