import { set } from "express/lib/application";
import {createContext} from "ract"

export const AuthContext = createContext();

export const AuthContextProvider = ({childlren}) =>{
const [IsAuth , setIsAuth] = useState(false);

const handleAuth = (state) => {
    setIsAuth(state);
};
    return <AuthContext.Provider value={{IsAuth , handleAuth}}>{Children}</AuthContext.Provider>
}