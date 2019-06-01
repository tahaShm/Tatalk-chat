import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from "react-native"
import {ChatScreen} from './components/ChatScreen'
import {SettingsScreen} from './components/SettingsScreen'
import {EditProfileScreen} from './components/EditProfileScreen'
import {AppearanceScreen} from './components/AppearanceScreen'
import {AboutScreen} from './components/AboutScreen'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const Routes = createSwitchNavigator({

  ChatScreen: { screen: ChatScreen },
  SettingsScreen: { screen: SettingsScreen },
  EditProfileScreen: { screen: EditProfileScreen },
  AppearanceScreen: { screen: AppearanceScreen },
  AboutScreen: { screen: AboutScreen }

},
  {
    headerMode: "none",
    mode: "modal",
  });

export default createAppContainer(Routes);