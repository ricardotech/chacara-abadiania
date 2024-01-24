import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useMediaQuery } from "@chakra-ui/react";

type UtilsContextData = {
  dimensions: {
    isUltrawide: boolean;
    isDesktop: boolean;
    isMobile: boolean;
    isTablet: boolean;
  };
};

type UtilsProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as UtilsContextData);

export function UtilsProvider({ children }: UtilsProviderProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 601px) and (max-width: 1024px)"
  );
  const [isDesktop] = useMediaQuery("(min-width: 1025px)");
  const [isUltrawide] = useMediaQuery("(min-width: 1500px)");

  return (
    <Context.Provider
      value={{
        dimensions: {
          isUltrawide,
          isDesktop,
          isMobile,
          isTablet,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useUtils() {
  const context = useContext(Context);

  return context;
}
