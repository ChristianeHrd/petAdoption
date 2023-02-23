import { useLocation } from 'react-router-dom'
import ImageSlider from './ImageSlider';

function PetDetails() {
    const location = useLocation()
    const { details } = location.state

    const container = {
        width: '800px',
        height: '500px',
        // height: '580px',
        // width: '500px',
        // height: '280px',
        margin: '0 auto'
    }
    console.log('description',details.description)
    return (
        <>
          <h4>Name: {details.name} </h4>
          <p>{details.description} </p>
          <a href={details.url}>link</a>
            {/* <h4> {details.name}</h4> */}
            

            {/* <Link to="/petdetails" state={{ details: p }}>Get Details</Link> */}

            {details.photos.map(i => (console.log('kkkkk', i)))}


            <div style={container}>
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