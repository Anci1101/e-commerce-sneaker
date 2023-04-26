import React, { useState } from 'react'
import iconNext from '../images/icon-next.svg'
import iconPrevious from '../images/icon-previous.svg'
import '../scss/scss-style'



const Slider = ({images}) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSLide = () => {
    if(slideIndex !== images.length){
      setSlideIndex(slideIndex + 1)
    } else if(slideIndex === images.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    } else if(slideIndex === 1){
      setSlideIndex(images.length)
    }
  }

  return (  
    <div className='sliderContainer'>
      <div className='sliderWrapper'>
        {images.map((slide, index)=>{
          return(
            <div key={slide.id} className={slideIndex === index + 1 ? 'slider active-anim' : 'slider'}>
              <img  src={slide[index + 1 ]} alt="imageProduct" />
            </div>
          )
        })}
          <button onClick={prevSlide} className='btnPrev'><img src={iconPrevious} alt="" /></button>
          <button onClick={nextSLide} className='btnNext'><img src={iconNext} alt="" /></button>

         
      </div>
      <div className='productSmallImagesWrapper'>
            {images.map((img)=>{
              return (
                <div className='smallImage'>
                  <img src={Object.values(img)} alt="" />
                </div>
              )
            })}
        
      </div>
      
    </div>
  )
}

export default Slider