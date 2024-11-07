import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const AppContext = createContext<{
  language: boolean;
  setLanguage: Dispatch<SetStateAction<boolean>>;
} | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [language, setLanguage] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
