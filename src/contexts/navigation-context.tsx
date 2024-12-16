"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type NavigationContextType = {
  history: string[];
  getLastVisited: (urls: string[]) => string | null;
};
const NavigationContext = createContext<NavigationContextType>({
  history: [],
  getLastVisited: (urls: string[]) => null,
});

export type NavigationProps = {
  children: ReactNode;
};
const NavigationProvider = ({ children }: NavigationProps) => {
  const pathname = usePathname();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setHistory((prevHistory) => {
      if (prevHistory[prevHistory.length - 1] !== pathname) {
        return [...prevHistory, pathname];
      }
      return prevHistory;
    });
  }, [pathname]);
  function getLastVisited(urls: string[]) {
    for (let i = urls.length - 1; i >= 0; i--) {
      if (history.lastIndexOf(urls[i]) !== -1) {
        return urls[i];
      }
    }
    return null;
  }
  const contextValue = {
    history,
    getLastVisited,
  };
  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "Navigation compound components must be rendered within the NavigationProvider component"
    );
  }
  return context;
}
export default NavigationProvider;
