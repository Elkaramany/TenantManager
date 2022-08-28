import React from 'react'
import { View, StatusBar } from 'react-native'
import { Colors, IOS } from './src/Config/Constants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SplashScreen from "react-native-splash-screen";

//Redux
import Redux from './src/Redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

//Navigation
import Navigatior from './src/Navigation'

export default () => {
  StatusBar.setBarStyle('dark-content', true);

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500)
  }, []);


  return (
    <Provider store={Redux['Store']}>
      <View style={{ flex: 1, backgroundColor: Colors.primary, paddingTop: IOS ? getStatusBarHeight() : 0 }}>
        <PersistGate persistor={Redux['Persistor']}>
          <Navigatior />
        </PersistGate>
      </View>
    </Provider>
  )
}