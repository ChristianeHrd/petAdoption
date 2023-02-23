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
           
            <div className='petDetails'>
                <p>
                    About <br />
                    Breed: {details.breeds.primary}<br />
                    Mixed Breed: {details.breeds.mixed === 'true' ? 'Yes' : 'No'}<br />
                    Age: {details.age} <br />

                    Status: {details.status}<br />
                    Size: {details.size}<br />

                    Good with Children: {details.environment.children === 'true' ? 'Yes' : 'No'}<br />
                    Good with Dogs: {details.environment.dogs === 'true' ? 'Yes' : 'No'}<br />
                    Good with Cats: {details.environment.cats === 'true' ? 'Yes' : 'No'}<br />

                    Spayed/Neutered: {details.attributes.spayed_neutered === 'true' ? 'Yes' : 'No'}<br />
                    House Trained: {details.attributes.house_trained === 'true' ? 'Yes' : 'No'}<br />
                    Special Needs: {details.attributes.special_needs === 'true' ? 'Yes' : 'No'}<br />

                    <a href={details.url}>link</a> <br />
                </p>
                {/* <img alt={details.name} src={details.photos[0].medium}></img> */}
                <div className='sliderContainer'>
                    <ImageSlider photos={details.photos}></ImageSlider>
                </div>
            </div>


        </div>
    )
}

export default PetDetails;
