import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CartScreen() {
  const cartItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 111199,
      quantity: 1,
      image: require('@/assets/images/iphone.jpg'),
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 68000,
      quantity: 1,
      image: require('@/assets/images/sam.jpg'),
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Cart</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
            </View>
            <View style={styles.quantityRow}>
              <TouchableOpacity style={styles.qtyBtn}>
                <Text>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.qtyBtn}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.subtotalRow}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalText}>₹{subtotal.toLocaleString()}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3e6f9', // soft lavender
    padding: 20,
  },
  logo: {
    width: 160,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#660066',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fbe8ff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#800080',
    fontWeight: '600',
    marginRight: 10,
  },
  strikeThrough: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyBtn: {
    backgroundColor: '#e3c9f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  qtyText: {
    fontSize: 16,
    color: '#333',
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b004b',
  },
  checkoutBtn: {
    backgroundColor: '#800080',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
