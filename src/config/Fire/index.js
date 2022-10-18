import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBpPEn27rmT0eChdHgEt0Hptztbgczs4A0',
  authDomain: 'my-doctor-01-9ea38.firebaseapp.com',
  projectId: 'my-doctor-01-9ea38',
  storageBucket: 'my-doctor-01-9ea38.appspot.com',
  messagingSenderId: '130252798212',
  databaseURL: 'https://my-doctor-01-9ea38-default-rtdb.firebaseio.com',
  appId: '1:130252798212:web:97eb1a589a114149283851',
  measurementId: 'G-6SEGXLQC0L',
};

const Fire = initializeApp(firebaseConfig);

export default Fire;
