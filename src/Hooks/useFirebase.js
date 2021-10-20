import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,  sendEmailVerification,sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase=()=>{

  const [name,setName]=useState('')
  const [user,setUser]=useState({})
  const[email,setEmail]=useState('')
  const [password,setPassword] = useState('')
  const [error,setError]=useState('')
  const [isLoading,setIsLoading]=useState(true)


  const auth =getAuth()
  const googleProvider = new GoogleAuthProvider();

  // google sign in  
  const handleGoogleSignIn=()=>{
      setIsLoading(true)
    return signInWithPopup(auth,googleProvider)
    
    .catch(error=>{
      setUser(error.message)
    })
    .finally(()=>setIsLoading(false)) 
    }
  
  // email change handler for email login   
  const handleEmailChange=e=>{
    setEmail(e.target.value)
  }

  // password change handler for password login 
  const handlePasswordChange = e =>{
    setPassword(e.target.value)
  }

  // name change handler for registration 
  const handleNameChange = e =>{
      setName(e.target.value)
  }

  // registration handler 
  const handleRegistration = e=>{
    e.preventDefault()
    
    if(password.length <6){
      setError('Password Must be at least 6 characters long')
      return;
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      setError('')
      verifyEmail()
      setUserName()
      window.location.reload()
    })
    .catch(error=>{
      setError(error.message)

    })
   
  }

  // login handler 
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

  // email verification 
  const verifyEmail = ()=>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
          console.log(result)
      })
  }

  // password reset 
  const handleResetPassword =()=>{
      sendPasswordResetEmail(auth,email)
      .then(result=>{})
  }

  // set user name 
  const setUserName = ()=>{
      updateProfile(auth.currentUser,{displayName:name})
      .then(result=>{})
  }
  
  // logout handler    
  const logOut=()=>{
      setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }


    // outh change 
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
              setUser({})
            }
            setIsLoading(false)
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
    handleResetPassword,
    handleNameChange,
    isLoading
    
}
};

export default useFirebase;