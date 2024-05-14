import { db } from "../firebase/config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'

import { useState, useEffect } from "react";


export const userAuthentication = ()=>{
    const [ error, setError ] =useState(null);
    const [ loading, setLoading ] =useState(null);
    const [ cancelled, setCanecelled ] = useState(false);

    const auth= getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return 
        }
    }
    async function createUser(data){
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
                
            await updateProfile(user, {
                displayName:data.displayName
            })

            setLoading(false)
            return user
        }
        catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage
            if(error.message.includes("Password")){
                systemErrorMessage="A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage="O email ja existe em nossa autenticação."
            }else{
                systemErrorMessage="Ocorreu um erro tem novamente mais tarde."
            }
        }

        setLoading(false)
        setError(systemErrorMessage)
    }

    const logout= () =>{
        checkIfIsCancelled();
        signOut(auth); //saber qual o projeto que será encerrado
    }

    const login = async (data)=>{
        checkIfIsCancelled();

        setLoading(true)
        setError(null)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password);
        }catch(error){
            console.error(error.message)
            console.table(typeof error)

            let systemErrorMessage

            if(error.message.includes("invalid-login-credential")){
                systemErrorMessage="Este emial ja esta cadastrado"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage="Há erro com duas credenciais"
            }else{
                systemErrorMessage="Ocorreu um erro, tem novamente mais tarde."
            }
        }

        setLoading(false)
        setError(systemErrorMessage)
    }

    useEffect(()=>{
        return ()=>setCanecelled(true)
    })

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
};