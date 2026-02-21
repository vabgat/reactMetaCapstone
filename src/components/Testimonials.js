import './Testimonials.css';
import TestimonialsCard from './TestimonialsCard';

const list = [
    {
        rating: 5,
        image: "customer1.jpeg",
        name: 'John Doe',
        feedback: 'The food was amazing and the service was excellent. Highly recommend this restaurant!'
    },
    {
        rating: 4,
        image: "customer2.jpeg",
        name: 'Jane Smith',
        feedback: 'I had a wonderful dining experience. The ambiance was cozy and the staff was very attentive.'
    },
    {
        rating: 4,
        image: "customer3.jpeg",
        name: 'Michael Johnson',
        feedback: 'The menu had a great variety of dishes, and everything I tried was delicious. Will definitely be coming back!'
    },
    {
        rating: 5,
        image: "customer4.jpeg",
        name: 'Emily Davis',
        feedback: 'I had a fantastic meal here. The flavors were incredible, and the presentation was beautiful. Highly recommend!'
    }
];

const Testimonials = () => {
    return (
        <section className='testimonials-main'>
            <div className='title'>
                <h2>Testimonials</h2>
                <p>What our customers say about us</p>
            </div>
            <div className="testimonials-list">
                {list.map((item, index) => (
                    <div key={index} className="testimonial-item">
                        <TestimonialsCard
                            rating={item.rating}
                            src={item.image}
                            name={item.name}
                            review={item.feedback}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;