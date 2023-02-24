import ContactForm from "./ContactForm";

function Home() {
    return (
        <>
            <main className="homepage">
                <div className="homeParagrap">
                    <p>Help us reduce the number of animals in shelters and rescues one adoption at a time.
                        We connect vulnerable animals with their forever families.
                    </p>
                </div>
                <div className="home-photo-flex-container">
                    <img className='homePetPhoto' alt='puppy' src="/puppy.jpg" />
                    <img className='homePetPhoto' alt='kitten' src="/kitten.jpg" />
                    <img className='homePetPhoto' alt='bunny' src="./bunny.jpg" />
                </div>
                <ContactForm />
            </main>
        </>
    )
}

export default Home;
