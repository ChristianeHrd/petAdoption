function Home() {
    return (
        <>
            <main className="homepage">
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


{/* <p>Adopting a rescue animal can truly change their life - and yours! When you adopt a rescue,
you're giving a second chance to an animal who may have had a difficult start in life.
These animals often have so much love to give, and they're incredibly grateful for
the chance to be part of a loving family.
</p> */}