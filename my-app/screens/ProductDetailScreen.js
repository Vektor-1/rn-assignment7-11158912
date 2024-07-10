import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../src/CartContext';

const ProductDetailScreen = ({ route }) => {
    const { product } = route.params;
    const { addToCart } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity onPress={() => addToCart(product)}>
                <Text style={styles.button}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    image: { width: 200, height: 200 },
    title: { fontSize: 20, fontWeight: 'bold' },
    price: { fontSize: 18, color: 'green' },
    description: { marginVertical: 10 },
    button: { padding: 10, backgroundColor: 'blue', color: 'white', textAlign: 'center' }
});

export default ProductDetailScreen;
