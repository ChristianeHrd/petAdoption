import { useState } from "react";

function ImageSlider({ photos }) 
{
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToPrevious() 
    {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function goToNext() 
    {
        const isLastSlide = currentIndex === photos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    function goToSlide(slideIndex) 
    {
        setCurrentIndex(slideIndex)
    }

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${photos[currentIndex].full}`
    }

    return (
        <div className='sliderStyle'>
            <div className='leftArrayStyle' onClick={goToPrevious}>❰</div>
            <div className='rightArrayStyle' onClick={goToNext}>❱</div>
            <div style={slideStyle}></div>
            <div className='dotsStyleContainer'>
                {photos.map((photo, slideIndex) => (
                    <div key={slideIndex} className='dotsStyle' onClick={() => goToSlide(slideIndex)}>⚫</div>))}
            </div>
        </div>
    )
}

export default ImageSlider