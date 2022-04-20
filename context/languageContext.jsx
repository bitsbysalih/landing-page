import { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [arabic, setArabic] = useState(false);
  return (
    <LanguageContext.Provider value={{ arabic, setArabic }}>
      {children}
    </LanguageContext.Provider>
  );
};
