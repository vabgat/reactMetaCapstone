import './Card.css';

const Card = ({ src, title, description, price }) => {
    return (
        <div className="card">
            <img className="card-image" src={require(`../assets/images/${src}`)} alt={title} />
            <div className="card-content">
                <h3 className='title'>{title}</h3>
                <h3 className='price'>{price}</h3>
            </div>
            <p className='description'>{description}</p>
            <div className='order-delivery'>
                <p>Order for Delivery</p>
                <img src={require("../assets/logos/delivery-icon.png")} alt="Delivery Icon" />
            </div>
        </div>
    );
}

export default Card;