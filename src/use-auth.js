import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();
const loginUrl = "http://localhost:8080/api/login";
const signupUrl = "http://localhost:8080/api/signup";
// source: https://usehooks.com/useAuth/
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    const loginBody = {
      email,
      password
    };
    fetch(loginUrl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(loginBody) // body data type must match "Content-Type" header
    }).then(response => {
      // setup store variables
      console.log(response);
      // if (response.status === 200) {
      //   context.history.push("/dashboard");
      // }
      // console.log(response);
      // return firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then((response) => {
      //     setUser(response.user);
      //     return response.user;
      //   });
    });
  };
  const signup = (email, password) => {
    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };
  const signout = () => {
    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
  };
  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(false);
  //       }
  //     });
  // Cleanup subscription on unmount
  // return () => unsubscribe();
  //   }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
