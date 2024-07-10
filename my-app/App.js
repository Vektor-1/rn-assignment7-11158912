import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CartProvider } from './src/CartContext';
import Checkout from './screens/CartScreen';
import Home from './screens/HomeScreen';
import Details from './screens/ProductDetailScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => (
    <CartProvider>
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="Cart" component={Details} />
            </Drawer.Navigator>
        </NavigationContainer>
    </CartProvider>
);

const HomeStack = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                        options={({ navigation }) => ({
                            headerShown: false,
                            headerLeft: () => (
                                <MaterialIcons
                                    name='arrow-back'
                                    size={24}
                                    color='black'
                                    onPress={() => navigation.goBack()}
                                    style={{ marginLeft: 15 }}
                                />
                            ),
                            headerTitle: 'Checkout',
                            headerTitleAlign: 'center',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default App;