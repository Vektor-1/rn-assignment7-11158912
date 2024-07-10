import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = async (item) => {
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
        await AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    const removeFromCart = async (itemId) => {
        const newCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCartItems);
        await AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
