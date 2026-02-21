import "./TestimonialsCard.css"
import star_img from '../assets/images/star.jpeg';

const TestimonialsCard = ({ rating, src, name, review }) => {
    return (
        <div className="testimonial-card">
            <div className="rating">
                {[...Array(rating)].map((_, index) => (
                    <img key={index} className="rating-img" src={star_img} alt={`${name} rating`} />
                ))}
            </div>
            <div className="customer-details">
                <img className="customer-img" src={require(`../assets/images/${src}`)} alt={name} />
                <h3 className="customer-name">{name}</h3>
            </div>
            <p className="customer-review">{review}</p>
        </div>
    );
}

export default TestimonialsCard;