import './Hero.css';
import { useNavigate } from 'react-router';

const Hero = (props) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/booking");
    };

    switch (props.value) {
        case 1:
            return (
                <section className="hero-grid-1">
                    <section className='left-content'>
                        <h1 className='display-typeface'>Little Lemon</h1>
                        <h2 className='subText-typeface'>Chicago</h2>
                        <p className='subText-typeface'>We are family owned Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist.</p>
                        <button aria-controls='booking' onClick={handleSubmit}>Reserve a Table</button>
                    </section>
                    <section className='right-content'>
                        <img src={require('../assets/images/food_tray.jpg')} alt="Hero" />
                    </section>
                </section>
            );
        case 2:
            return (
                <section className="hero-grid-2">
                    <h1 className='display-typeface'>Welcome to Little Lemon</h1>
                    <h2 className='subText-typeface'>Reserve the Table</h2>
                    <p className='subText-typeface'>Please fill out details <br />below for reservation</p>
                </section>
            );
        case 3:
            return (
                <section className="hero-grid-3">
                    <h1 className='display-typeface'>Congratulations!</h1>
                    <h2 className='subText-typeface'>Your booking is confirmed.</h2>
                </section>
            );
        default:
            break;
    }
}

export default Hero;