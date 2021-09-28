import { isValid } from 'date-fns/esm';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = emailAddress === '' || password === '';

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='Login page iphon photo'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>

          {error && <p className=' mb-4 text-xs text-red-primary '>{error}</p>}

          <form onSubmit={handleLogin} method='POST'>
            <input
              type='text'
              aria-label='Enter your email address'
              placeholder='Email address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 '
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              type='password'
              aria-label='Enter your password'
              placeholder='Password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 '
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              type='submit'
              disabled={isValid}
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && 'opacity-50'
              }`}
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-grap-primary rounded'>
          <p className='text-small'>
            Don't have an account?{``}
            <Link
              to={ROUTES.SIGN_UP}
              className='font-bold text-blue-medium ml-1'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
