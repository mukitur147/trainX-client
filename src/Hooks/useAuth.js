import { useContext } from "react";
import { AuthContext } from "../Components/Contex/AuthProvider";

const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth;