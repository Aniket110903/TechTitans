function MailComponent() {
    return (
        <>
        <section id="contact">
        <h1 class="h-primary center" style={{fontsize:'2.5rem' ,fontWeight:500 }}>Mail Us</h1>
        <div id="contact-box">
            <form action="backend.php">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name..."></input>
                </div>
                <div class="form-group">
                    <label for="name">Email:</label>
                    <input type="email" name="name" id="email" placeholder="Enter Your Email..."></input>
                </div>
                <div class="form-group">
                    <label for="name">Phone Number:</label>
                    <input type="phone" name="name" id="phone-number" placeholder="Enter Your Phone Number..."></input>
                </div>
                <div class="form-group">
                    <label for="name">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <buton class="btn">Submit</buton>
            </form>
        </div>
    </section>
        </>
    );
}

export default MailComponent;