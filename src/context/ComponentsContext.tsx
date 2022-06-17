import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_300Light, Poppins_700Bold } from '@expo-google-fonts/poppins'

interface ComponentsProviderProps {
  children: ReactNode
}

interface ComponentsContextData {
  onLayout: () => void
}

export const ComponentsContext = createContext({} as ComponentsContextData)

export const ComponentsProvider = ({ children }: ComponentsProviderProps) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Poppins_400Regular, Poppins_300Light, Poppins_700Bold });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ComponentsContext.Provider value={{
      onLayout
    }}>
      {children}
    </ComponentsContext.Provider>
  )
}