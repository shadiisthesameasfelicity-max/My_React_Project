export default function Contact() {
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
  
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
  
          <button className="btn">Send Message</button>
        </form>
      </section>
    );
  }
  