import React from 'react'

const Gallery = () => {
  return (
    <section className='headerContainer'>
        <div className='gallerySection'>
            <div className='img-slide'>
                <img src={require('../assets/GalleryImgs/WhatsApp Image 2022-02-01 at 3.18.25 PM (1).jpeg')} alt='My '></img>
                <img src={require('../assets/GalleryImgs/elevation1.jpeg')} alt='My '></img>
                <img src={require('../assets/GalleryImgs/elevation3.jpeg')} alt='My'></img>
                <img src={require('../assets/GalleryImgs/1_1 - Photoyt.png')} alt=''></img>
            </div>
            <div className='img-slide'>
                <img src={require('../assets/GalleryImgs/WhatsApp Image 2022-02-01 at 3.18.25 PM (1).jpeg')} alt='My '></img>
                <img src={require('../assets/GalleryImgs/elevation1.jpeg')} alt='My '></img>
                <img src={require('../assets/GalleryImgs/elevation3.jpeg')} alt='My'></img>
                <img src={require('../assets/GalleryImgs/1_1 - Photoyt.png')} alt=''></img>
            </div>
        </div>
    </section>
  )
}

export default Gallery

