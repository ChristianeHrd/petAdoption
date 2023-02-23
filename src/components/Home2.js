function Home() {
    return (
        <>
            <main className="homepage">
                {/* <p>Welcome to the NSCC Fullstack Program's Authenticated Starter Template. You can use this template as a kicking off point to buid something amazing and fun!</p> */}
                <p className='homeParagraph'>Help us reduce the number of animals in shelters and rescues one adoption at a time.
                    We connect vulnerable animals with their forever families.
                </p>

                {/* <div class="container" > */}
                <div class="row">
                    <div class="col s4">
                        <div class="card-image" >
                            <img className='homePetPhoto' alt='puppy' src="/puppy.jpg" />
                        </div>
                        {/* <div class="card-action">
                            <a href="#">This is a link</a>
                        </div> */}
                    </div>

                    <div class="col s4">
                        <div class="card-image">
                            <img className='homePetPhoto' alt='kitten' src="/kitten.jpg" />
                        </div>

                        {/* <div class="card-action">
                            <a href="#">This is a link</a>
                        </div> */}
                    </div>

                    <div class="col s4">
                        <div class="card-image">
                            <img className='homePetPhoto' src="./bunny.jpg" />
                        </div>

                        {/* <div class="card-action">
                            <a href="#">This is a link</a>
                        </div> */}
                    </div>
                </div>
                {/* </div> */}


            </main>


            {/* <div class="card blue-grey darken-1"> */}

        </>
    )
}


export default Home;