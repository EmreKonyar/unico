import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const login = (username, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        setIsLogIn(true);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      const token = userInfo.token;

      axios.get(`${BASE_URL}/health`, {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setIsLoading(false);
        setIsLogIn(true);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  
  useEffect(() => {
    isLoggedIn();
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        isLogIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
