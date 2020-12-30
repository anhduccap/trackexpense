import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider as StoreProvider} from 'react-redux'
import store from './store/index'


import Home from './Components/Home'
import AddTransaction from './Components/AddTransaction'

 
const stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <StoreProvider store={store}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
            name="Home"
            component={Home}
            options={{
              title:'Expense track'
            }}
            />
            <stack.Screen
            name="Add"
            component={AddTransaction}
            options={{
              title:'Add Transaction'
            }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
      
    )
  }
}