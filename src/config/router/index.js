import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Order, OrderDetail, ScanQRCode } from '../../screens';

const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const OrderStack = createStackNavigator(
    {
        Order,
        OrderDetail
    },
    {
        headerMode: 'none',
        initialRouteName: 'Order'
    }
)

const ScanStack = createStackNavigator(
    {
        ScanQRCode
    },
    {
        headerMode: 'none',
        initialRouteName: 'ScanQRCode'
    }
)

const Router = createSwitchNavigator(
    {
        HomeStack,
        OrderStack,
        ScanStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
)
  
export default createAppContainer(Router);