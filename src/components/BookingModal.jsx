import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Details, 4: Success
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'video', // 'video' or 'phone'
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    if (!isOpen) return null;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    // Mock time slots
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM'
    ];

    const handleDateSelect = (day) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleInputChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send data to backend
        setStep(4);
    };

    const resetBooking = () => {
        // Reset to initial state
        setStep(1);
        setCurrentMonth(new Date());
        setSelectedDate(null);
        setSelectedTime(null);
        setBookingData({
            name: '',
            email: '',
            phone: '',
            type: 'video',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="booking-overlay" onClick={resetBooking}>
                <motion.div
                    className="booking-content"
                    onClick={e => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                >
                    <div className="booking-header">
                        <div className="booking-title">
                            <span className="icon">📡</span> Secure Drop Link
                        </div>
                        <button className="booking-close" onClick={resetBooking}>&times;</button>
                    </div>

                    <div className="booking-body">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <button
                                        onClick={prevMonth}
                                        disabled={currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()}
                                        style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '1.5rem', cursor: 'pointer', opacity: (currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()) ? 0.3 : 1 }}
                                    >
                                        &lt;
                                    </button>
                                    <h3 style={{ margin: 0 }}>{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
                                    <button
                                        onClick={nextMonth}
                                        style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '1.5rem', cursor: 'pointer' }}
                                    >
                                        &gt;
                                    </button>
                                </div>

                                <div className="calendar-grid">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                        <div key={d} className="calendar-day-header">{d}</div>
                                    ))}
                                    {/* Empty cells for start of month */}
                                    {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, i) => (
                                        <div key={`empty-${i}`} />
                                    ))}
                                    {/* Actual days */}
                                    {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, i) => {
                                        const day = i + 1;
                                        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                        const isToday = new Date().toDateString() === date.toDateString();
                                        const isPast = date < new Date() && !isToday;
                                        const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();

                                        return (
                                            <button
                                                key={day}
                                                className={`calendar-day ${isSelected ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
                                                disabled={isPast}
                                                onClick={() => handleDateSelect(day)}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="booking-actions">
                                    <button className="btn-secondary" onClick={resetBooking}>Abort</button>
                                    <button
                                        className="btn-primary"
                                        disabled={!selectedDate}
                                        onClick={() => setStep(2)}
                                    >
                                        Confirm Date
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }}>
                                <h3>Select Frequency Window</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    Timezone: {bookingData.timezone}
                                </p>
                                <div className="time-slots">
                                    {timeSlots.map(time => (
                                        <button
                                            key={time}
                                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                            onClick={() => handleTimeSelect(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                                <div className="booking-actions">
                                    <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                                    <button
                                        className="btn-primary"
                                        disabled={!selectedTime}
                                        onClick={() => setStep(3)}
                                    >
                                        Confirm Slot
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }}>
                                <h3>Operative Details</h3>
                                <form className="booking-form" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <label>Full Code Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={bookingData.name}
                                            onChange={handleInputChange}
                                            placeholder="Agent Smith"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Secure Email Frequency</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={bookingData.email}
                                            onChange={handleInputChange}
                                            placeholder="agent@squarebiz.ai"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Comms Preference</label>
                                        <select
                                            name="type"
                                            value={bookingData.type}
                                            onChange={handleInputChange}
                                        >
                                            <option value="video">Video Uplink (Zoom/Meet)</option>
                                            <option value="phone">Audio Only (Phone)</option>
                                        </select>
                                    </div>
                                    {bookingData.type === 'phone' && (
                                        <div className="input-group">
                                            <label>Secure Line Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required={bookingData.type === 'phone'}
                                                value={bookingData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    )}
                                    <div className="booking-actions">
                                        <button type="button" className="btn-secondary" onClick={() => setStep(2)}>Back</button>
                                        <button type="submit" className="btn-primary">Initialize Uplink</button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                className="booking-success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="success-icon">✅</div>
                                <h3>Uplink Established</h3>
                                <p>
                                    Mission briefing scheduled for <strong>{selectedDate ? selectedDate.toLocaleDateString() : ''}</strong> at <strong>{selectedTime}</strong>.
                                    <br /><br />
                                    Secure coordinates have been transmitted to <strong>{bookingData.email}</strong>.
                                </p>
                                <button className="btn-primary" onClick={resetBooking} style={{ marginTop: '2rem' }}>
                                    Return to Base
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
