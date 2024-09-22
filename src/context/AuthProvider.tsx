import { createContext, useState } from "react";
type MyComponentProps = React.PropsWithChildren<{}>;
interface auth {
  auth?: object;
  setAuth?: React.Dispatch<React.SetStateAction<{}>>;
}
export const AuthContext = createContext<auth>({});
const AuthProvider = ({ children, ...other }: MyComponentProps) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
