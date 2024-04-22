
import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './login.module.css';
import { fetchLoginFromBackend } from './api'; // Import the function from pages/api/index.js






function LoginPage() {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  async function handleLogin(event) {
    event.preventDefault();
    setError(''); // Clear previous errors

   
      


    try {
      // Basic validation for empty fields
      if (!phoneNumber || !password) {
        setError('Please enter both phoneNumber and password');
        return;
      }


      const data = await fetchLoginFromBackend(phoneNumber, password);


      console.log('Response Data:', data);


      // Check if the login is successful
      if (data.message === 'Login successful') {
        // If login is successful, navigate to the dashboard page
        router.push('/dashboard');
      } else {
        // Show error message for unsuccessful login
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred during login');
    }
  }

 return (
    <>
      
      <div className={styles.container}>
        <div className={styles.imageAndFormContainer}>
          <div className={styles.imageContainer}>
            <img src="images/book.avif" alt="Your Image" />
          </div>
          <div className={styles.formContainer}>
            <h1>Login Page</h1>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleLogin} className={styles.formContainer}>
              <label>
                Phone Number:
                <input
                  type="int"
                  value={phoneNumber}
                  onChange={(event) => setphoneNumber(event.target.value)}
                  className={styles.input}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={styles.input}
                />
              </label>
              <br />
              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default LoginPage;