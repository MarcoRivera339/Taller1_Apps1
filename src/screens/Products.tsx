import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vaso plastico 7 oz',
    price: 0.50,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Cuchara sopera',
    price: 0.60,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Servilletas x 300',
    price: 1.00,
  },
];

type ItemProps = {title: string, price?: number};

const Item = ({ title, price }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{price !== undefined ? `$${price.toFixed(2)}` : 'Precio no disponible'}</Text>
  </View>
);

export const Products = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} price={item.price} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});