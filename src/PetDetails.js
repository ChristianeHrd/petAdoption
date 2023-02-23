import { useLocation } from 'react-router-dom'
import ImageSlider from './ImageSlider';

function PetDetails() {
    const location = useLocation()
    const { details } = location.state

    console.log('description', details.description)
    return (
        <div className='petDetailsContainer'>
            <div className='petTopDetails'>
                <h1>Hi, my name is {details.name} </h1>
                <p>{details.description} </p>
            </div>

            <div className='sliderContainer'>
                <ImageSlider photos={details.photos}></ImageSlider>
            </div>

            <div className='petDetails'>
                <p>Age: {details.age} </p>
                <p>Breed: {details.breeds.primary}</p>
                <a href={details.url}>link</a> <br/>

                {/* <img alt={details.name} src={details.photos[0].medium}></img> */}
            </div>
        </div>
    )
}

export default PetDetails;

// details.photos.map(i => (
//     <a key={i.url} className="carousel-item">
//         <img src={i.photo} />
//     </a>