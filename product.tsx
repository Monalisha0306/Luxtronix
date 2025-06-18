import React from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: '₹130000',
    category: 'Smartphone',
    discount: '10%',
    rating: '4.8',
    image: require('@/assets/images/iphone.jpg'),
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: '₹68000',
    category: 'Smartphone',
    discount: '8%',
    rating: '4.7',
    image: require('@/assets/images/sam.jpg'),
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    price: '₹150000',
    category: 'Laptop',
    discount: '5%',
    rating: '4.6',
    image: require('@/assets/images/macc.jpg'),
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: '₹27,989',
    category: 'Audio',
    discount: '15%',
    rating: '4.9',
    image: require('@/assets/images/head.jpg')
  },
];

export default function ProductsScreen() {
  const handleAddToCart = (itemName: string) => {
    alert(`${itemName} added to cart`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
            
                      <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Price: {item.price}</Text>
            <Text style={styles.detail}>Category: {item.category}</Text>
            <Text style={styles.detail}>Discount: {item.discount}</Text>
            <Text style={styles.detail}>Rating: ⭐ {item.rating}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item.name)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
 image: {
  width: '100%',
  height: 260, // 🔼 increased from 180 to 260
  borderRadius: 10,
  marginBottom: 10,
},

  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  detail: { fontSize: 14, marginBottom: 2 },
});
