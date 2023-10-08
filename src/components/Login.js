import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const email = useRef(null);

    const password = useRef(null);

    const userName = useRef(null);

    //validation

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        //sign in-sign up

        if(!isSignInForm){
                //sign up logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: userName.current.value,
                photoURL: USER_AVATAR,
              })
                .then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                      dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                      );
                })
                .catch((error) => {
                  setErrorMessage(error.message);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }

        else{
            //sign in logic
                      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
    };

    //authentication

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };


  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" className="h-screen object-cover w-screen" />
    
      </div>
      <form onSubmit={(e) => e.preventDefault(e)} className="w-full md:w-1/3 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input 
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input 
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="font-bold text-lg text-red-500 py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now"}
        </p>

      </form>
    </div>
  )
}

export default Login