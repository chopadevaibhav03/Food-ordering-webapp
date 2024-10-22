import { createContext } from "react";

const UserContext = createContext({
  email: "defaul@gmail.com",
  setEmail: () => {},
});

export default UserContext;
