import './Booking.css';
import Hero from '../components/Hero';
import { useState } from 'react';
import { TimesContext } from '../App';
import { useContext } from 'react';



const Booking = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [seating, setSeating] = useState('');

    const isFormValid = name && email && contact && date && time && guests && seating;

    const { availableTimes, dispatch, submitForm } = useContext(TimesContext);
    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingData = {
            name: name,
            email: email,
            contact: contact,
            date: date,
            time: time,
            guests: guests,
            occasion: occasion,
            seating: seating,
        };
        submitForm(bookingData);
    }
    return (
        <>
            <Hero value={2} />
            <div className="booking-page">
                <div className="booking-image">
                    <img src={require('../assets/images/booking_page.png')} alt="Booking" />
                </div>
                <hr />
                <section className="booking-info">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="contact">Contact Number:</label>
                            <input type="tel" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" value={date} onChange={handleDateChange} required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="time">Time:</label>
                            <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="" disabled>Select a time</option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time} >{time}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-row'>
                            <label htmlFor="guests">Number of Guests:</label>
                            <input type="number" id="guests" name="guests" value={guests} min={1} max={50} onChange={(e) => setGuests(e.target.value)} required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="occasion">Occasion:</label>
                            <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="" disabled>Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="engagement">Engagement</option>
                            </select>
                        </div>
                        <div className='radio-row'>
                            <label className='radio-label'>
                                <input aria-label='Indoor seating' type='radio' name="seating" value="indoor" checked={seating === 'indoor'} onChange={(e) => setSeating(e.target.value)} />
                                Indoor
                            </label>
                            <label className='radio-label'>
                                <input aria-label='Outdoor seating' type='radio' name="seating" value="outdoor" checked={seating === 'outdoor'} onChange={(e) => setSeating(e.target.value)} />
                                Outdoor
                            </label>
                        </div>
                        <div className='button-container'>
                            <button disabled={!isFormValid} aria-controls='submit reservation' type="submit">Confirm Reservation</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Booking;