/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const DATA_FAKE: any[] = [
  {
    id: '001',
    name: 'Elly Beli',
    avatar: 'https://i.ibb.co/MSF7QF1/avatar-b.png',
  },
  {
    id: '002',
    name: 'Johny March',
    avatar: 'https://i.ibb.co/ChHx37k/avatar-c.png',
  },
  {
    id: '003',
    name: 'Jenny Pham',
    avatar: 'https://i.ibb.co/YdkZNJN/avatar-a.png',
  },
];

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{marginBottom: 90, flex: 1, padding: 16, marginTop: 4}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_FAKE}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                marginVertical: 4,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item?.avatar}}
                style={{width: 30, height: 30, marginRight: 16}}
              />
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  flex: 1,
                  height: 45,
                  justifyContent: 'center',
                  paddingLeft: 16,
                }}>
                <Text>{item?.name}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.card}>
        <View
          style={{
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            marginRight: 16,
            flex: 1,
            paddingLeft: 8,
            borderColor: '#eda8cb',
          }}>
          <TextInput placeholder="Type something" />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../../images/add.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    position: 'absolute',
    height: 90,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    padding: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    elevation: 2,
  },
});
