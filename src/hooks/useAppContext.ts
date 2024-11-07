import { useContext } from "react";
import { AppContext } from "../context";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("not context");
  }
  return context;
};
