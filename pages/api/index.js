import axios from 'axios';

export async function fetchLoginFromBackend(phoneNumber, password) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/login/?phoneNumber=${encodeURIComponent(phoneNumber)}&password=${encodeURIComponent(password)}`
    );
    console.log('API Response:', response.data); // Add this line
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be caught in the LoginPage.js
  }
}











