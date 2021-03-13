import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import GraphVisualization from './src/screens/GraphVisualization'
import Splash from './src/screens/Splash';
import GraphForm from './src/screens/GraphForm';
import Form from './src/components/Form'

const navigator = createStackNavigator(
  {
    Main : Main,
    GraphVisualization : GraphVisualization,
    Splash : Splash,
    GraphForm: GraphForm,
  },

  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerShown: false
    }
  });

export default createAppContainer(navigator);