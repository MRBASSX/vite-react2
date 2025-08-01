import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { useNavigate } from "react-router-dom";
import LoginForm from "../component/LoginForm"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";


function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        // console.log(tokenExpiration);
        // console.log(decoded);
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {

            const RememberMe1 = localStorage.getItem("first");
            const RememberMe2 = localStorage.getItem("second");

            if (RememberMe1 == "tywyrtyoiroe7644ft" && RememberMe2 == "tyueriyusbgfyf76r67rr"  &&  RememberMe1 != null && RememberMe2 !=null) {

                await refreshToken();
            }

        } else {
            setIsAuthorized(true);
        }
    };

    if (isAuthorized === null) {
          
      return navigate('/login');
   

    }

  

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
