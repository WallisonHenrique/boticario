import { useContext } from "react";
import { AlertContext } from "../contexts/Alerts";

const useAlert = () => {
    const context = useContext(AlertContext);
    
    return context;
}

export default useAlert;