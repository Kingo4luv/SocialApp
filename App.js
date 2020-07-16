import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import {
  createStackNavigator
} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDX7NCSvf3ux0qN6n1mnbZnNU6i7C8ouc",
  authDomain: "socialapp-d5003.firebaseapp.com",
  databaseURL: "https://socialapp-d5003.firebaseio.com",
  projectId: "socialapp-d5003",
  storageBucket: "socialapp-d5003.appspot.com",
  messagingSenderId: "870003233000",
  appId: "1:870003233000:web:6368479a6c4589ab99b95d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createStackNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  }, {
    initialRouteName: "Loading"
  })
)