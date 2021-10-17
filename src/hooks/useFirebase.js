import { useEffect, useState } from "react";
import initializeAuthenticationApp from "../firebase/firebase.initialize";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

initializeAuthenticationApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [status, setStatus] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        }).finally(
            setStatus(false)
        )
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
        }).finally(
            setStatus(false)
        )
    }

    const registerUser = (Name, email, password) => {
        createUserWithEmailAndPassword(auth , email, password)
        .then(result => {
            console.log(result.user);
        }).finally(
            setStatus(false)
        )
    }

    const SignOutUser = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        }).finally(
            setStatus(true)
        )
    }

    const login = (Name, email, password) => {
        signInWithEmailAndPassword(auth , email, password)
        .then(result => {
            console.log(result.user);
        }).finally(
            setStatus(false)
        )
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setStatus(true)
        })
    }, [])

    return {
        user,
        status,
        error,
        signInWithGoogle,
        signInWithGithub, 
        login, 
        registerUser,
        SignOutUser
    }
}

export default useFirebase;