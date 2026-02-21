import About from '../components/About';
import HighLights from '../components/HighLights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


function Main() {
    return (
        <main>
            <Hero value={1} />
            <HighLights />
            <Testimonials />
            <About />
            <Footer />
        </main>
    );
}

export default Main;