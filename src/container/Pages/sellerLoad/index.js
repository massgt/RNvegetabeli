import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Picker, FormData} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconUser from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {Right} from 'native-base';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Separator,
} from 'native-base';

import {connect} from 'react-redux';
import {getLogin} from '../../../config/Redux/Actions/User/LoginRegister/getLogin';

class sellerLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      name: '',
      description: '',
      price: '',
      stock: '',
      id_market: '',
      image: '',
    };
  }
  handleSkillUpgrade = async () => {
    console.log('ADD SKILL');
    alert('Skill Upgraded.');
    const token = await AsyncStorage.getItem('token');
    const id_user = await AsyncStorage.getItem('id_user');
    const username = await AsyncStorage.getItem('username');
    const role = await AsyncStorage.getItem('role');
    const engineerProfile = this.props.engineerProfile.engineerProfile;
    const url = `https://hiringchannel-api.herokuapp.com/v1/engineer/skill/${engineerProfile.id}`;
    console.log('ID ENG ', engineerProfile.id);
    const dataSkill = {
      skill_item: this.state.skill_item,
      id: engineerProfile.id,
    };
    const headers = {Authorization: `Bearer ${token}`};

    axios
      .post(url, null, {
        headers: headers,
        params: dataSkill,
      })
      .then(res => {
        console.log('axios post skill=', res);

        this.setState({isModalVisible: !this.state.isModalVisible});
        this.goHomeEngineer();
      })
      .catch(err => {
        console.log(err);
      });
    this.goHomeEngineer();
    this.getData('https://hiringchannel-api.herokuapp.com/v1/engineer/profile');
  };

  name = text => {
    console.log('Name Produk ', text);
    this.setState({name: text});
  };
  description = text => {
    console.log('Desc Produk ', text);
    this.setState({description: text});
  };
  price = text => {
    console.log('Price Produk ', text);
    this.setState({price: text});
  };
  stock = text => {
    console.log('Stok Produk ', text);
    this.setState({stock: text});
  };

  postProduct = async () => {
    console.log('AXIOS PRODUCT TO API');
    const data = await this.props.loginData.data.data;
    console.log('DATA SELLER', data);
    const url = 'http://18.208.177.116:5000/product';
    const dataProduct = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
      stock: this.state.stock,
      id_market: this.state.id_market,
      // image: this.state.image,
    };
    console.log('DATAPRODUCT ', dataProduct);
    const config = {headers: {'Content-Type': 'application/json'}};

    axios
      .post(url, dataProduct, config)
      .then(res => {
        console.log('axios post product=', res.data);
        ToastAndroid.showWithGravity(
          'Produk baru berhasil ditambahkan',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })
      .catch(err => {
        console.log(err);
      });

    this.props.navigation.navigate('sellerHome');
  };
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
          <Text style={styles.textHeader}>Tambah Detail Produk</Text>
          <TouchableOpacity
            onPress={this.postProduct}
            style={{
              //   backgroundColor: 'yellow',
              paddingLeft: 110,
            }}>
            <Icon
              alignItems="right"
              name="check"
              color="#EE4F6F"
              size={20}
              // onPress={() => this.props.navigation.navigate('sellerHome')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginBottom: 20,
            // paddingBottom: 20,
            borderColor: '#E3E3E3',
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 30,
              paddingBottom: 25,
              //   backgroundColor: '#EE4F6F',
            }}>
            <TouchableOpacity
              style={styles.touchableEdit}
              onPress={() => this.props.navigation.navigate('sellerCamera')}>
              <View
                style={{
                  borderWidth: 1.5,
                  borderStyle: 'dotted',
                  borderColor: '#EE4F6F',
                  width: 100,
                  height: 100,
                }}>
                <Text
                  style={{
                    color: '#EE4F6F',
                    paddingTop: 25,
                    textAlign: 'center',
                  }}>
                  + Tambah
                </Text>
                <Text
                  style={{
                    color: '#EE4F6F',
                    paddingBottom: 25,
                    textAlign: 'center',
                  }}>
                  Foto Produk
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Input form */}
        <ScrollView>
          <View style={{alignContent: 'center', paddingHorizontal: 40}}>
            <View style={{marginTop: 0}}>
              <Input
                inputContainerStyle={{height: 35}}
                //   containerStyle={{marginTop: 30}}
                onChangeText={this.name}
                value={this.state.name}
                placeholder="Nama Produk"
                style={{fontSize: 14}}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Input
                inputContainerStyle={{height: 35}}
                //   containerStyle={{marginTop: 30}}
                onChangeText={this.description}
                placeholder="Deskripsi Produk"
                style={{fontSize: 14}}
              />
            </View>
            <View style={{marginTop: 10, width: 292, marginLeft: 10}}>
              <Separator bordered style={{backgroundColor: '#EE4F6F'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Atur Kategori
                </Text>
              </Separator>
              <Picker
                selectedValue={this.state.category}
                style={{width: 290, marginLeft: 10}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({category: itemValue})
                }>
                <Picker.Item label="Sayuran" value="Sayuran" />
                <Picker.Item label="Lauk Pauk" value="Lauk Pauk" />
                <Picker.Item label="Bumbu" value="Bumbu" />
                <Picker.Item label="Seafood" value="Seafood" />
                <Picker.Item label="Sembako" value="Sembako" />
                <Picker.Item label="Jajanan" value="Jajanan" />
                <Picker.Item label="Buah" value="Buah" />
              </Picker>
            </View>
            <View style={{marginTop: 10, width: 292, marginLeft: 10}}>
              <Separator bordered style={{backgroundColor: '#EE4F6F'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Harga</Text>
              </Separator>
              <Input
                inputContainerStyle={{height: 35}}
                //   containerStyle={{marginTop: 30}}
                onChangeText={this.price}
                // defaultValue="Rp"
                keyboardType="numeric"
                style={{fontSize: 14}}
              />
            </View>
            <View style={{marginTop: 10, width: 292, marginLeft: 10}}>
              <Separator bordered style={{backgroundColor: '#EE4F6F'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Stok</Text>
              </Separator>
              <Input
                inputContainerStyle={{height: 35}}
                //   containerStyle={{marginTop: 30}}
                onChangeText={this.stock}
                placeholder="Masukkan Stok Produk"
                keyboardType="numeric"
                style={{fontSize: 14}}
              />
            </View>
            <View style={{marginTop: 10, width: 292, marginLeft: 10}}>
              <Separator bordered style={{backgroundColor: '#EE4F6F'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Pilih Pasar
                </Text>
              </Separator>
              <Picker
                selectedValue={this.state.id_market}
                style={{width: 290, marginLeft: 10}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({id_market: itemValue})
                }>
                <Picker.Item label="Pasar Mampang" value="02acccfb" />
                <Picker.Item label="Pasar Maliran" value="14bc2bfe" />
                <Picker.Item label="Pasar Kembang" value="82cd852c" />
                <Picker.Item label="Pasar Sidayur" value="9s8ad7sadbj" />
              </Picker>
            </View>
          </View>
        </ScrollView>
        {/* End Input form */}
        {/* <View style={styles.editButton}>
          <TouchableOpacity
            style={styles.touchEdit}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={styles.textEditProfile}>Edit</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginData: state.getLogin.loginData,
    // loginPhoneData: state.getLoginPhone.loginPhoneData,
  };
};

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(
  // {
  getLogin,
  // getLoginPhone,
  // },
  dispatch,
  // );
});

export default connect(mapStateToProps, mapDispatchToProps)(sellerLoad);
// export default sellerLoad;
