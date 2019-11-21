// install react-navigation

import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";
//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

var firebaseConfig = {
  apiKey: "AIzaSyC8BLsU7SAcmhRfofgKMNSXnLh7QLt6BNE",
  authDomain: "messageboard-9b0e6.firebaseapp.com",
  databaseURL: "https://messageboard-9b0e6.firebaseio.com",
  projectId: "messageboard-9b0e6",
  storageBucket: "messageboard-9b0e6.appspot.com",
  messagingSenderId: "648160679318",
  appId: "1:648160679318:web:26a73012d52e55301379b7",
  measurementId: "G-YQVNQX5MJ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default App;
