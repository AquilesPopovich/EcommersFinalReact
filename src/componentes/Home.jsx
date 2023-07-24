import { useAuth } from "../context/AuthContext"


export const Home = () => {
   const {user} = useAuth();
   return <>Welcome {user.email}</>
}

