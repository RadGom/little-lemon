import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log('availableTimes:', availableTimes); // Esto te ayudará a verificar que availableTimes está definido
  }, [availableTimes]);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservación enviada:', formData);
  };

  const validateForm = () => {
    const errors = {};

    // Validación de fecha
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!formData.date) {
      errors.date = '';
    } else if (selectedDate < today) {
      errors.date = 'La fecha no puede ser en el pasado';
    }

    // Validación de hora
    if (!formData.time) {
        errors.time = 'La hora es requerida';
      }

    // Validación de cantidad de comensales
    if (!formData.guests || formData.guests < 1) {
      errors.guests = '';
    }

    // Validación de ocasión
    if (!formData.occasion) {
        errors.occasion = 'La ocasión es requerida';
      }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <>
      <h1>Formulario de reservación</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una hora</option>
            {availableTimes && availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Cantidad de comensales:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min="1"
          />
          {errors.guests && <p className="error">{errors.guests}</p>}
        </div>
        <div>
          <label htmlFor="occasion">Ocasión:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una ocasión</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="aniversario">Aniversario</option>
          </select>
        </div>
        <button type="submit" disabled={!isFormValid}>Enviar reserva</button>
      </form>
    </>
  );
}

export default BookingForm;
