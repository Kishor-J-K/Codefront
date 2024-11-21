document.addEventListener('DOMContentLoaded', function () {
  const otpForm = document.getElementById('otp-form');
  const sendOtpButton = document.getElementById('send-otp');
  
  // Handle "Send OTP" button click
  sendOtpButton.addEventListener('click', function () {
    const phoneInput = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phone-error');

    // Validate phone number (simple 10-digit validation)
    if (!/^\d{10}$/.test(phoneInput)) {
      phoneError.textContent = 'Please enter a valid 10-digit phone number.';
      return;
    } else {
      phoneError.textContent = '';
      alert('OTP sent to your phone number'); // Simulating OTP sent
      sendOtpButton.disabled = true; // Disable the button after sending OTP
    }
  });
  
  otpForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const phoneInput = document.getElementById('phone').value.trim();
    const otpInput = document.getElementById('otp').value.trim();
    const phoneError = document.getElementById('phone-error');
    const otpError = document.getElementById('otp-error');

    // Validate phone number (simple 10-digit validation)
    if (!/^\d{10}$/.test(phoneInput)) {
      phoneError.textContent = 'Please enter a valid 10-digit phone number.';
      return;
    } else {
      phoneError.textContent = '';
    }

    // Validate OTP
    if (otpInput === '123456') { // Hardcoded OTP for testing
      otpError.textContent = '';
      window.location.href = 'loanapplication.html'; // Redirect to loan form
    } else {
      otpError.textContent = 'Invalid OTP. Please try again.';
    }

    
  const loanForm = document.getElementById('loan-form');

  loanForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const guaranterPan = document.getElementById('guaranter-pan').value.trim();
    const guaranterPanError = document.getElementById('guaranter-pan-error');
  
    // Reset error
    guaranterPanError.textContent = '';
  
    // Validate PAN Card format (10 alphanumeric characters)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(guaranterPan)) {
      e.preventDefault(); // Prevent form submission
      guaranterPanError.textContent = 'Invalid PAN Card number. Format: ABCDE1234F';
      return;
    }  
    const formError = document.getElementById('form-error');
    formError.textContent = ''; // Clear previous errors

    const shopPhotos = document.getElementById('shop-photos').files;
    const utilityReceipts = document.getElementById('utility-receipts').files;
    const shopPhotosError = document.getElementById('shop-photos-error');
    const utilityReceiptsError = document.getElementById('utility-receipts-error');
    
    // Validate photos
    if (shopPhotos.length === 0) {
      shopPhotosError.textContent = 'Please upload photos of your shop.';
      return;
    } else {
      shopPhotosError.textContent = ''; // Clear error if files are selected
    }

    // Validate utility receipts
    if (utilityReceipts.length === 0) {
      utilityReceiptsError.textContent = 'Please upload expenditure receipts of utilities.';
      return;
    } else {
      utilityReceiptsError.textContent = ''; // Clear error if files are selected
    }

    // If everything is valid, simulate form submission
    const formData = new FormData(loanForm);

    // Simulating form submission (replace with actual API call in real project)
    alert('Loan application submitted successfully!');
    loanForm.reset(); // Reset the form after submission
  });
  });
});
