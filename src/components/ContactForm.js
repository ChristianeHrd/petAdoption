function ContactForm() {
    return (
        <>
            <div className="contactForm">
                <h1>Let's Get In Touch</h1>
                <div className="contact-flex-container">
                    <div>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">account_circle</i>
                                        <input id="first_name" type="text" />
                                        <label for="first_name">First Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" />
                                        <label for="last_name">Last Name</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">email</i>
                                        <input id="email" type="email" class="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <form class="col s12">
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <i class="material-icons prefix">textsms</i>
                                                <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                                <label for="icon_prefix2">Your message</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <button class="btn waves-effect blue-grey darken-2" type="submit" name="action">Submit
                                    <i class="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <img className="formPhoto" alt='cat' src="/sleepingCat.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm