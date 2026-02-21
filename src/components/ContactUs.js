import './ContactUs.css';
import contact_logo from '../assets/logos/lemon_only_logo.png';

const ContactUs = () => {
    return (
        <section className="contact-main" id="contact">
            <img className="contact-logo" src={contact_logo} alt="Contact Us" />
            <div className="doormat-nav">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <h4>Address</h4>
                <h4>Phone</h4>
                <h4>Email</h4>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                </ul>
            </div>
        </section>
    );
};

export default ContactUs;