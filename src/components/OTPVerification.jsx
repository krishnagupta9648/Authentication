import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyOTP, generateOTP, storeOTP } from '../utils/otpUtils';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp(otp.map((d, idx) => (idx === index ? element.value : d)));

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const otpString = otp.join('');
      if (verifyOTP(otpString)) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        alert('Invalid OTP! Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    // Generate and store new OTP
    const newOTP = generateOTP();
    storeOTP(newOTP);
    alert(`Your new OTP is: ${newOTP}`);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Verify OTP</h1>
          <p className="subtitle">
            Enter the 4-digit code sent to <strong>{userEmail}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="otp-input"
              />
            ))}
          </div>

          <div className="timer">Time remaining: {timeLeft}s</div>

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || otp.some(digit => !digit)}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <i className="fas fa-check-circle"></i>
                <span>Verify OTP</span>
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>Didn't receive the code?</p>
          <button 
            onClick={handleResend} 
            className="resend-button"
            disabled={timeLeft > 0}
          >
            Resend OTP {timeLeft > 0 && `(${timeLeft}s)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification; 