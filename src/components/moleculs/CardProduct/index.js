import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableHighlight} from 'react-native-gesture-handler';

const CardProduct = props => {
  return (
    // <View style={styles.containerView}>
    <TouchableHighlight
      // style={{paddingTop: 8, marginHorizontal: 7}}
      underlayColor="1"
      onPress={props.onPress}>
      <Card style={styles.mainCard}>
        <View>
          <Image
            source={require('../../../assets/image/produk_gulaku.jpg')}
            style={{
              height: 160,
              width: 169,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View style={{backgroundColor: '#fafafa', height: 100}}>
            <Text style={{paddingLeft: 10, paddingTop: 5}}>
              Gula Pasir Gulaku
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                paddingTop: 30,
                color: '#EE4F6F',
                fontWeight: 'bold',
              }}>
              Rp99.999.000
            </Text>
            <Icon
              name="heart"
              color="#bbb"
              size={12}
              style={{paddingLeft: 10, paddingTop: 7}}
              onPress={() => this.props.navigation.navigate('sellerHome')}
            />
            <Text
              style={{
                position: 'absolute',
                paddingLeft: 25,
                paddingTop: 77.5,
                fontSize: 13,
                color: '#bbb',
              }}>
              0
            </Text>
            <Text
              style={{
                position: 'absolute',
                paddingLeft: 95,
                paddingTop: 77.5,
                fontSize: 13,
                color: '#bbb',
              }}>
              Terjual 999
            </Text>
          </View>
        </View>
      </Card>
    </TouchableHighlight>
    // </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: 'red',
    // marginHorizontal: 8,
    // marginVertical: 4,
  },
  mainCard: {
    borderRadius: 5,
    height: 260,
    width: 170,
    marginLeft: 15,
    marginTop: 10,
  },
});

export default CardProduct;
