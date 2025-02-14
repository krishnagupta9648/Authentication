import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateOTP, storeOTP } from '../utils/otpUtils';

const ResendOTP = () => {
  const navigate = useNavigate();
  
  const handleResend = () => {
    const email = localStorage.getItem('userEmail');
    const newOTP = generateOTP();
    storeOTP(newOTP);
    
    // In a real app, you would send the OTP via email
    alert(`New OTP is: ${newOTP}`);
    
    navigate('/verify-otp');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Resend OTP</h2>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>
        Click below to receive a new OTP
      </p>
      <button onClick={handleResend}>Send New OTP</button>
    </div>
  );
};

export default ResendOTP; 