import { createContext, useContext } from 'react';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

export const useLang = () => useContext(LangContext);
