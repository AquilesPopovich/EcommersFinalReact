import { useAuth } from "../context/AuthContext"


export const Home = () => {
   const {data} = useAuth();
   return <>Welcome {data.email}</>
}

