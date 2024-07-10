import React, {useContext} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import CardList from "../assets/Card";
import {CartContext} from "../src/CartContext";

const Menu = require('../assets/Images/Menu.png');
const Logo = require('../assets/Images/Logo.png');
const Search = require('../assets/Images/Search.png');
const Shopping = require('../assets/Images/Shopping.png');
const Filter = require('../assets/Images/Filter.png');
const ListView = require('../assets/Images/Listview.png');

export default function Home({ navigation }) {
    const { cartItems, totalCost } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerContainer}>
                    <Image source={Menu} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </TouchableOpacity>
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.headerContainer}>
                        <Image source={Search} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerContainer}
                        onPress={() => navigation.navigate('Checkout', {
                            cartItems: cartItems,
                            totalCost: totalCost
                        })}>
                        <Image source={Shopping} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.options}>
                <Text style={styles.title}>OUR STORY</Text>
                <View style={styles.rightContainer1}>
                    <TouchableOpacity style={styles.optionContainer}>
                        <Image source={ListView} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <Image source={Filter} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <CardList navigation={navigation} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    headerContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 79,
        height: 32,
        paddingHorizontal: 30,
        left: 15,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 8,
    },
    title: {
        fontSize: 28,
        color: '#000',
        fontWeight: '400',
    },
    rightContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        left: 45,
    },
    optionContainer: {
        width: 50,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: 25,
        marginHorizontal: 2,
    },
    content: {
        marginTop: 25,
    },
});