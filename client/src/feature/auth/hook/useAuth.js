import { useDispatch } from 'react-redux'
import { register, login, getMe } from '../service/auth.service'
import { setUser,setLoading,setError } from '../auth.slice'

export function useAuth(){

    const dispatch = useDispatch()

    async function handleRegister({email, password, username}){

        try {
            dispatch(setLoading(true))

            const data = await register({email, password, username})

        }catch(error){
            dispatch(setError(error.response?.data.message || "Registion Failed"))

        }finally{
            dispatch(setLoading(false))
        }
    }

    async function handleLogin({email, passwrod}){

        try{
            dispatch(setLoading(true))

            const data = await login({email, password})
            dispatch(setUser(data.user))
        }catch(error){
            dispatch(setError(error.response?.data.message || "Login Failed"))
        }finally{
            dispatch(setLoading(false))
        }
    }   

    async function handlegetMe(){

        try{
            dispatch(setLoading(true))
            const data = await getMe
            dispatch(setUser(data.user))

        }catch(error){
            dispatch(setError(error.response?.data.message || "failed to fetch data"))
        }finally{
            dispatch(setLoading(false))
        }
    }

    return {
        handleLogin,
        handleRegister,
        handlegetMe
    }
}