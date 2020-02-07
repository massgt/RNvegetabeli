import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {Separator} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

//redux
import {connect} from 'react-redux';
import {getProduct} from '../../../config/Redux/Actions/User/product';
import {getLogin} from '../../../config/Redux/Actions/User/LoginRegister/getLogin';

import CardProduct from '../../../components/moleculs/CardProduct';

class sellerProduct extends Component {
  state = {
    data: [],
    category: '',
  };

  getProduct = async () => {
    console.log('getProduk');
    const data = this.props.loginData.data.data;
    const {token, id_user, role} = data;
    await AsyncStorage.setItem('@accessToken', JSON.stringify(token));
    await AsyncStorage.setItem('@id_user', JSON.stringify(id_user));
    await AsyncStorage.setItem('@role', JSON.stringify(role));
    const url = `http://18.208.177.116:5000/product/${id_user}`;
    // const dataProduct = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   category: this.state.category,
    //   price: this.state.price,
    //   stock: this.state.stock,
    //   id_market: this.state.id_market,
    //   // image: this.state.image,
    // };
    // console.log('DATAPRODUCT ', dataProduct);
    // const config = {headers: {'Content-Type': 'application/json'}};

    axios
      .get(url)
      .then(res => {
        console.log('axios get product=', res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });

    // this.props.navigation.navigate('sellerHome');
  };

  onPress = () => {
    console.log('PRESS go DETAIL');
    this.props.navigation.navigate('sellerProductDetail');
  };

  componentDidMount() {
    console.log('DIDMOUNT');
    getProduct(`http://18.208.177.116:5000/product/`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="#FF5063"
              size={25}
              onPress={() => this.props.navigation.navigate('sellerHome')}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Produk Saya</Text>
        </View>

        <Separator
          bordered
          style={{backgroundColor: '#EE4F6F', marginBottom: 5}}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>5 Produk</Text>
        </Separator>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginLeft: -15,
            }}>
            <CardProduct onPress={this.onPress} />
            <CardProduct onPress={this.onPress} />
            <CardProduct onPress={this.onPress} />
            <CardProduct onPress={this.onPress} />
            <CardProduct onPress={this.onPress} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct,
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(sellerProduct);
// export default sellerProduct;
