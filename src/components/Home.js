function Home() {
    return (
        <>
            <main className="homepage">
                {/* <p>Welcome to the NSCC Fullstack Program's Authenticated Starter Template. You can use this template as a kicking off point to buid something amazing and fun!</p> */}
                <p>Help us reduce the number of animals in shelters and rescues one adoption at a time.
                    We connect vulnerable animals with their forever families.
                </p>

                {/* <div class="container" > */}
                <div className="home-photo-flex-container">
                    <img className='homePetPhoto' alt='puppy' src="/puppy.jpg" />
                    <img className='homePetPhoto' alt='kitten' src="/kitten.jpg" />
                    <img className='homePetPhoto' alt='bunny' src="./bunny.jpg" />
                </div>
                {/* </div> */}

            </main>

            {/* <div class="card blue-grey darken-1"> */}

        </>
    )
}


export default Home;