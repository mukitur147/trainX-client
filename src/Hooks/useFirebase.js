import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase=()=>{
  const [user,setUser]=useState({})
  const[email,setEmail]=useState('')
const [password,setPassword] = useState('')
const [error,setError]=useState('')





    const auth =getAuth()
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
    
    .catch(error=>{
      setUser(error.message)
    }) 
    }
    
const handleEmailChange=e=>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value)
  }

  const handleRegistration = e=>{
    e.preventDefault()
    console.log(email,password)
    if(password.length <6){
      setError('Password Must be at least 6 characters long')
      return;
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      setError('')
    })
    .catch(error=>{
      setError(error.message)
    })
    
   
  }
  const handleLogin = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user =result.user;
      console.log(user)
      setError('')
    })
    .catch(error=>{
      setError(error.message)
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
    error,
    handleGoogleSignIn,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleLogin,
    

}
};

export default useFirebase;