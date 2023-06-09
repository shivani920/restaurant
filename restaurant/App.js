import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FoodListScreen from './src/screens/FoodListScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';

const AppNavigator = createStackNavigator(
  {
    FoodList: { screen: FoodListScreen },
    FoodDetail: { screen: FoodDetailScreen },
  },
  {
    initialRouteName: 'FoodList',
  }
);

export default createAppContainer(AppNavigator);
