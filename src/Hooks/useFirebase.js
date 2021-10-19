import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase=()=>{
  const [user,setUser]=useState({})

    const auth =getAuth()
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
    
    .catch(error=>{
      setUser(error.message)
    }) 
    }
    
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
    },[])

return{
    user,
    handleGoogleSignIn,
    logOut

}
};

export default useFirebase;