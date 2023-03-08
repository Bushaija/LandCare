import React, { useState } from 'react';
import PhoneNumberInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../index.css';

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <PhoneNumberInput
      required
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={setPhoneNumber}
      className="rounded-lg PhoneNumberInput"
    />
  );
};

export default PhoneInput;
