import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, AsyncStorage, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import noTransaction from '../../../assets/image/noTransaction.png'
import { getCartByIdUser } from '../../../config/Redux/Actions/Transaction/getCartByIdUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Transaksi extends Component {
  state = {
    dataCart: []
  }
  async componentDidMount() {
    let id_user = JSON.parse(await AsyncStorage.getItem('@id_user'))
    await this.props.getCartByIdUser(null, id_user)
    console.log(this.props.cartData)
    this.setState({
      dataCart: this.props.cartData.data.data
    })
    console.log('aa',this.state.dataCart)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Daftar Transaksi</Text>
          </View>
          <View style={styles.navbarIcon} >
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('historyTrans')}>
            <Icon name="history" type="font-awesome" size={22} color="#A1A1A1" />
          </TouchableOpacity>
          </View>
        </View>

        {this.state.dataCart.length == 0 ? 
          <View style={styles.content}>
            <Image source={noTransaction} style={styles.img} />
            <Text style={styles.textTop}>Transaksimu kosong, yuk order lagi!</Text>
            <Text style={styles.textBot}>Cari produk kebutuhanmu hari ini,</Text>
            <Text style={styles.textBot}>yuk belanja sekarang!</Text>
          </View>:
          <ScrollView>
            {this.state.dataCart.map(data => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.push('detailTrans', {
                  id_cart: data.id_cart
                })}>
                  <View style={{ flexDirection: "column", height: 130, backgroundColor: 'white', elevation: 3, marginTop: 12 }}
                    onPress={() => this.props.navigation.navigate('detailTrans')}>
                    <View style={{ flexDirection: 'row', height: '70%', borderBottomWidth: 1, borderColor: '#EFEAEA' }}>
                      <View style={{ padding: 19 }}>
                        <Icon name='shopping-basket' size={20} color='red' />
                      </View>
                      <View style={{ flexDirection: 'column', justifyContent: 'center', padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}>
                          Kode belanja - {data.id_cart}
                            </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Alamat:
                                </Text>
                          <Text style={{ paddingLeft: 5, fontSize: 15, color: '#737375' }}>
                            {data.market_name}
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Tanggal:
                                </Text>
                          <Text style={{ paddingLeft: 5, fontSize: 15, color: '#737375' }}>
                            {data.date_transaction}
                                </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: '30%', alignItems: 'center', marginHorizontal: 16 }}>
                      <View>
                        <Text style={{ fontSize: 14, }}>
                          Total: Rp {data.total}
                            </Text>
                      </View>
                      <View style={{ paddingLeft: 90 }}>
                        <Text style={{ fontSize: 14, color: '#737375' }}>
                          Status:
                            </Text>
                      </View>
                      <View style={{ padding: 5 }}>
                        <Text style={{ fontSize: 14, color: '#31C026' }}>
                          Dalam Proses
                            </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}

          </ScrollView>}
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartData: state.getCartByIdUser.cartData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCartByIdUser
    },
    dispatch
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Transaksi);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 30,
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  navbarTextView: {
    marginLeft: 5,
  },
  navbarText: {
    fontSize: 16,
    fontWeight: '700',
  },
  navbarIcon: {
    marginRight: 20
  },
  //Content
  content: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100
  },
  img: {
    width: 200,
    height: 200,
  },
  textTop: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5
  },
  textBot: {
    fontSize: 18,
  }
});
