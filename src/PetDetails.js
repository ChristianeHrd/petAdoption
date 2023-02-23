import { useLocation } from 'react-router-dom'
import ImageSlider from './ImageSlider';

function PetDetails() {
    const location = useLocation()
    const { details } = location.state

    console.log('description', details.description)
    return (
        <>
            <div className='petDetails'>
                <h1>Hi, my name is {details.name} </h1>
                <p>{details.description} </p>
            </div>

            <a href={details.url}>link</a>

            {details.photos.map(i => (console.log('photo', i)))}


            <div className='sliderContainer'>
                <ImageSlider photos={details.photos}></ImageSlider>
            </div>

            <h4>Age: {details.age} </h4>
            <img alt={details.name} src={details.photos[0].medium}></img>

        </>
    )
}

export default PetDetails;

// details.photos.map(i => (
//     <a key={i.url} className="carousel-item">
//         <img src={i.photo} />
//     </a>