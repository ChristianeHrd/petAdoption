import { useState } from "react";

function ImageSlider({ photos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = 3;

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function goToNext() {
        const isLastSlide = currentIndex === photos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    console.log('yaaa', photos)

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundImage: `url(${photos[currentIndex].full}`
    }

    // const sliderStyle = {
    //     height: '100%',
    //     position: 'relative'
    // }

    // const leftArrayStyle = {
    //     position: 'absolute',
    //     top: '50%',
    //     transform: 'translate(0, -50%)',
    //     left: '32px',
    //     fontSize: '45px',
    //     color: '#fff',
    //     zIndex: 1,
    //     cursor: 'pointer'
    // }
    // const rightArrayStyle = {
    //     position: 'absolute',
    //     top: '50%',
    //     transform: 'translate(0, -50%)',
    //     right: '32px',
    //     fontSize: '45px',
    //     color: '#fff',
    //     zIndex: 1,
    //     cursor: 'pointer'
    // }
    // const dotsStyleContainer = {
    //     display: 'flex',
    //     justifyContent: 'center'
    // }
    // const dotsStyle = {
    //     margin: '10px 8px',
    //     cursor: 'pointer',
    //     fontSize: '10px'
    // }

    return (
        <div className='sliderStyle'>
            <div className= 'leftArrayStyle' onClick={goToPrevious}>❰</div>
            <div className='rightArrayStyle' onClick={goToNext}>❱</div>
            <div style={slideStyle}></div>
            <div className='dotsStyleContainer'>
                {photos.map((photo, slideIndex) => (
                    <div key={slideIndex} className='dotsStyle' onClick={()=>goToSlide(slideIndex)}>⚫</div>))}
            </div>
        </div>
    )
}

export default ImageSlider