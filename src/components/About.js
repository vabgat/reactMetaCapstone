import "./About.css"
import chef1 from '../assets/images/restaurant_chef_B.jpg';
import chef2 from '../assets/images/adrian.png';

const About = () => {
    return (
        <section className="about-main">
            <div className="about-content">
                <div className="left-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming family-owned restaurant located in the heart of Chicago.
                        We pride ourselves on serving delicious, authentic cuisine made from the freshest ingredients.
                    </p>
                </div>
                <div className="right-content">
                    <img className="img1" src={chef1} alt="chef1" />
                    <img className="img2" src={chef2} alt="chef2" />
                </div>
            </div>
        </section>
    );
}

export default About;