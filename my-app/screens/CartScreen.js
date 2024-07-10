import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../src/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from "@expo/vector-icons";

const Logo = require('../assets/Images/Logo.png');
const Search = require('../assets/Images/Search.png');
const checkout = require('../assets/Images/CheckOut.png');
const remove = require('../assets/Images/remove.png');

const CartScreen = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    useEffect(() => {
        const loadCartItems = async () => {
            const storedCartItems = await AsyncStorage.getItem('cartItems');
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            }
        };
        loadCartItems().then(r => console.log(r));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name='arrow-back' size={24} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerContainer}>
                    <Image source={Search} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={checkout} style={styles.checkout} />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.details}>
                            <Text>{item.title}</Text>
                            <Text>${item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                <Text style={styles.button}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Text style={styles.totalText}>EST. TOTAL</Text>
                    <Text style={styles.totalCost}>${totalCost.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 10,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItems: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 10,
    },
    image: {
        width: 150,
        height: 180,
    },
    details: {
        flex: 1,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    subHeading: {
        fontSize: 14,
        paddingBottom: 5,
        color: '#888',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ed9c3d',
    },
    footer: {
        paddingVertical: 20,
    },
    footerText: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        top: 25,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalCost: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ed9c3d',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
        width: 420,
        right: 22,
        top: 42,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkout: {
        width: 189,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 95,
    },
    remove: {
        width: 40,
        height: 40,
        left: 150,
    },
});

export default CartScreen;
