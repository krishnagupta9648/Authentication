import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateOTP, storeOTP } from '../utils/otpUtils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const otp = generateOTP();
      storeOTP(otp);
      localStorage.setItem('userEmail', email);
      
      // In a real application, you would send the OTP via email here
      // For demo purposes, showing in alert
      alert(`Your OTP has been sent to ${email}\nDemo OTP: ${otp}`);
      navigate('/verify-otp');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p className="subtitle">Please enter your email to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              <span>Email Address</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="fancy-input"
            />
          </div>

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                <span>Sending OTP...</span>
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i>
                <span>Send OTP</span>
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>Secured by advanced encryption</p>
          <i className="fas fa-lock"></i>
        </div>
      </div>
    </div>
  );
};

export default Login; 