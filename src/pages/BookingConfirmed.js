import './BookingConfirmed.css';
import Hero from '../components/Hero';
import { useLocation } from 'react-router';

const BookingConfirmed = () => {
    const location = useLocation();
    const { bookingData } = location.state || {};

    return (
        <>
            <Hero value={3} />
            <div className="booking-confirmed-page">
                <div className="booking-confirmed-image">
                    <img src={require('../assets/images/booking_confirmed.png')} alt="Booking Confirmed" />
                </div>
                <hr />
                <section className="booking-confirmed-info">
                    <h2>Congrats! Please find your booking details below</h2>
                    <p>Customer Details:</p>
                    {bookingData && (
                        <div className="booking-details">
                            <table border={1} cellPadding={10} cellSpacing={0} className='booking-table'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>{bookingData.name}</th>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <th>{bookingData.email}</th>
                                    </tr>
                                    <tr>
                                        <th>Contact Number</th>
                                        <th>{bookingData.contact}</th>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <th>{bookingData.date}</th>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <th>{bookingData.time}</th>
                                    </tr>
                                    <tr>
                                        <th>Number of Guests</th>
                                        <th>{bookingData.guests}</th>
                                    </tr>
                                    <tr>
                                        <th>Occasion</th>
                                        <th>{bookingData.occasion}</th>
                                    </tr>
                                    <tr>
                                        <th>Seating</th>
                                        <th>{bookingData.seating}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
                <div className="button-container">
                    <button >Share</button>
                    <button onClick={() => window.location.href = "/"}>Back to Home</button>
                </div>
            </div>
        </>
    );
}

export default BookingConfirmed;