import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext);

  console.log('useAuthValue:', value)

  return value;
}
