import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import ItemImage from '../../../assets/image/Tempe.png';
import noTransaction from '../../../assets/image/noTransaction.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconStore from 'react-native-vector-icons/FontAwesome5';
import IconInfo from 'react-native-vector-icons/Foundation';
import styles from './style';


class iPaySuccess extends Component {
  state={
    iPaymuData: [],
    sessionID: '',
    url: ''
  }

  async componentDidMount() {
    let dataIpay = await this.props.navigation.getParam('dataIpay')
    await this.setState({
      iPaymuData: dataIpay,
      sessionID: dataIpay.value.data.sessionID,
      url: dataIpay.value.data.url
    })
    console.log('paymuu',this.state.iPaymuData)
    console.log('a',this.state.sessionID)
    console.log('payssmuu', this.state.url)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="chevron-left" color="#FF5063" size={25} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Keranjang Belanja</Text>
        </View>

            <View style={styles.content}>
              <Image source={noTransaction} style={styles.img} />
              <Text style={styles.textTop}>
                Id Pembayaran Anda adalah:
              </Text>
              <Text style={styles.textBot}>
                {this.state.sessionID}
              </Text>
            </View>
            <View style={{ paddingTop: 60 }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 40,
                  paddingHorizontal: 14,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: '#FF5063',
                    width: '100%',
                    borderRadius: 7,
                  }}
                  onPress={() => Linking.openURL(`${this.state.url}`)}
                  // onPress={() => this.props.navigation.navigate('Shop')}
                  >
                  <Text
                    style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>
                    HALAMAN PEMBAYARAN
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
      </View>
    );
  }
}


export default iPaySuccess
