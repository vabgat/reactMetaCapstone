import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Booking from './pages/Booking';
import BookingConfirmed from './pages/BookingConfirmed';
import { Routes, Route, useNavigate } from 'react-router';

import { useReducer } from 'react';
import { createContext } from 'react';
import { fetchAPI, submitAPI } from './utils/api';

export const TimesContext = createContext();


export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
}

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const date = new Date(action.payload);
    return fetchAPI(date);
  }
  else {
    return state;
  }
}



function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/booking/confirmation", { state: { bookingData: formData } });
    }
    else {
      alert("Failed to submit booking. Please try again.");
    }
  }

  return (
    <>
      <TimesContext.Provider value={{ availableTimes, dispatch, submitForm }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/confirmation" element={<BookingConfirmed />} />
        </Routes>
      </TimesContext.Provider>
    </>
  );
}

export default App;