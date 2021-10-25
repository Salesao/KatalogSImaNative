import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { pages } from './pages'



export const Navigation = () => {
    const {Navigator, Screen} = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Navigator>
                {pages.map((page) => (
                    <Screen
                    key={page.name}
                    name={page.name}
                    component={page.component}
                    options={({route}) => ({
                        title:page.title?page.title:route.params.name,
                        headerTitleAlign:'center',
                        headerTitleStyle:{color:'#000'},
                        headerStyle:{backgroundColor:'#eb9f1d'}
                    })}/>
                ))}
            </Navigator>
        </NavigationContainer>
    )
}
