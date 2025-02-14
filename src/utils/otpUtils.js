// Generate a random 4-digit OTP
export const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// Store OTP in localStorage (in real app, this would be handled by backend)
export const storeOTP = (otp) => {
  localStorage.setItem('storedOTP', otp);
};

// Verify OTP
export const verifyOTP = (inputOTP) => {
  const storedOTP = localStorage.getItem('storedOTP');
  return inputOTP === storedOTP;
}; 