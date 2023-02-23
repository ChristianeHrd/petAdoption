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
                    <span className='stats'>Breed: </span> {details.breeds.primary}<br />
                    <span className='stats'>Mixed Breed:</span>  {details.breeds.mixed === 'true' ? 'Yes' : 'No'} <br />
                    <span className='stats'>Age:</span>  {details.age}  <br />

                    <span className='stats'>Status:</span>  {details.status} <br />
                    <span className='stats'>Size:</span>  {details.size} <br />

                    <span className='stats'>Good with Children: </span> {details.environment.children === 'true' ? 'Yes' : 'No'}<br />
                    <span className='stats'>Good with Dogs: </span> {details.environment.dogs === 'true' ? 'Yes' : 'No'}<br />
                    <span className='stats'>Good with Cats: </span> {details.environment.cats === 'true' ? 'Yes' : 'No'} <br />

                    <span className='stats'>Spayed/Neutered:</span>  {details.attributes.spayed_neutered === 'true' ? 'Yes' : 'No'} <br />
                    <span className='stats'>House Trained: </span> {details.attributes.house_trained === 'true' ? 'Yes' : 'No'} <br />
                    <span className='stats'>Special Needs: </span> {details.attributes.special_needs === 'true' ? 'Yes' : 'No'} <br />
                </p>
                {/* <img alt={details.name} src={details.photos[0].medium}></img> */}
                <div className='sliderContainer'>
                    <ImageSlider photos={details.photos}></ImageSlider>
                </div>
            </div>
            <br />
            < span className='emailInfo'>For more information please email: <a href={'mailto:' + details.contact.email}>{details.contact.email}</a></span><br />

        </div>
    )
}

export default PetDetails;
