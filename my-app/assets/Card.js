import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { CartContext } from '../src/CartContext';

const Card = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        fetchProducts().then(r => console.log(r));
    }, []);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.product}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.detailContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.productContainer}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listContainer: {
        paddingBottom: 20,
    },
    product: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 150,
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ed9c3d',
        marginTop: 5,
        left: 90,
    },
});


export default Card;
