import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import ItemImage from '../../../assets/image/Tempe.png';
import noTransaction from '../../../assets/image/noTransaction.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconStore from 'react-native-vector-icons/FontAwesome5';
import IconInfo from 'react-native-vector-icons/Foundation';
import styles from './style';
import {getProductMarket} from '../../../config/Redux/Actions/Shop/getProductMarket';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class ShoppingCart extends Component {
  state = {
    cart: {},
    id_market: '',
    product: [],
    market: [],
    totalPrices: 0,
    totalProduct: 0,
    id_product: [],
    price: []
  };

  handlePlus = async (name) => {
    this.state.cart[name] += 1
    this.forceUpdate()
    this.total(this.state.product, Object.values(this.state.cart))
    this.totalProduct(Object.values(this.state.cart))
  }

    handleMinus = async (name) => {
      if(this.state.cart[name] > 1) {
        this.state.cart[name] -= 1
        this.forceUpdate()
        this.total(this.state.product, Object.values(this.state.cart))
        this.totalProduct(Object.values(this.state.cart))

      }
    }

    total = (x, y) => {
        let totalPrice = 0
        let z = []
        for (let i = 0; i < x.length; i++) {
            z.push(x[i].price)
        }
        for (let i = 0; i < y.length; i++) {
            totalPrice += Number((y[i] * z[i]))
        }
        return this.setState({totalPrices: totalPrice})
    }

    totalProduct = (y) => {
        let product = 0
        for (let i = 0; i < y.length; i++) {
            product += Number(y[i])
        }
        return this.setState({totalProduct: product})
    }

    paymentGateway = async () => {
      this.props.navigation.push('Payment', {
        productOrder: this.state.product,
        cart: this.state.cart,
        totalPrice: this.state.totalPrices,
        market: this.state.market,
        totalProduct: this.state.totalProduct,
        quantity: Object.values(this.state.cart),
        id_product: this.state.id_product,
        price: this.state.price
      })
    }

    id_produx = (x) => {
      let z = []
      for (let i = 0; i < x.length; i++) {
        z.push(Object.values(x[i])[0])
      }
      return z
    }

  price = (x) => {
    let z = []
    for (let i = 0; i < x.length; i++) {
      z.push(Object.values(x[i])[3])
    }
    return z
  }

  async componentDidMount() {
    await this.setState({
      cart: await this.props.navigation.getParam('cart'),
      id_market: await this.props.navigation.getParam('id_market'),
        market: await this.props.navigation.getParam('market')
    });
    console.log('matrkett', this.state.market)
    const token = await AsyncStorage.getItem('@accessToken');
    const id_market = this.state.id_market;
    await this.props.getProductMarket(token, id_market);

    console.log('produxx', this.props.product);
    console.log('cartzz', this.state.cart);
    console.log('keyz', Object.values(this.state.cart))
    let productFilter = this.props.product.data.data.filter((item, index) => {
        let x = []
        for (let i of Object.keys(this.state.cart)) {
            if(item.name != i) {
                x.push(item.name)
                continue
            } 
            return x
        }
    })
    
    console.log('ss',productFilter)
    await this.setState({
      product: productFilter,
    });
  
    let id_prod = await this.id_produx(this.state.product)
    await this.setState({
      id_product: id_prod
    })
    console.log('id_produzxx', this.state.id_product)

    let prices = await this.price(this.state.product)
    await this.setState({
      price: prices
    })
    console.log('priccceeeee', this.state.price)

    console.log('statee', this.state.product);
    console.log(this.state.totalPrice)
    await this.total(this.state.product, Object.values(this.state.cart))
    console.log('totalPrice', this.state.totalPrices)
    await this.totalProduct(Object.values(this.state.cart))
    console.log('totalProduct', this.state.totalProduct)
    console.log('market', this.state.market)
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
        {Object.keys(this.state.cart).length == 0 ? (
          <>
            <View style={styles.content}>
              <Image source={noTransaction} style={styles.img} />
              <Text style={styles.textTop}>
                Keranjangmu masih kosong nih :(
              </Text>
              <Text style={styles.textBot}>
                Cari produk kebutuhanmu hari ini,
              </Text>
              <Text style={styles.textBot}>yuk belanja sekarang!</Text>
            </View>
            <View style={{paddingTop: 60}}>
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
                  onPress={() => this.props.navigation.navigate('Shop')}>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    BELANJA SEKARANG
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
                        <View
                            style={{
                                flexDirection: 'column',
                                height: 20,
                                elevation: 3,
                                marginTop: 3,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginHorizontal: 16,
                                    justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14 }}>Total Produk:</Text>
                                    <Text style={{ fontSize: 14, paddingLeft: 5 }}>{this.state.totalProduct}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 14, color: '#FF5063' }}>
                                            Tambah lagi
                          </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
            {this.state.product.map(data => {
              return (
                <>
                  <ScrollView>
                    <View style={{flexDirection: 'column', height: 100}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '95%',
                          borderBottomWidth: 1,
                          borderColor: '#DBDBDB',
                        }}>
                        <View style={{padding: 16}}>
                          <Image
                            source={ItemImage}
                            style={{width: 60, height: 60}}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontSize: 16, paddingVertical: 3}}>
                            {data.name}
                          </Text>
                          <View
                            style={{flexDirection: 'row', paddingVertical: 3}}>
                            <Text style={{fontSize: 15, color: '#FF5063'}}>
                              {data.price}
                            </Text>
                            <Text
                              style={{
                                paddingLeft: 3,
                                fontSize: 15,
                                color: '#737375',
                              }}>
                              /pcs
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            padding: 19,
                            flexDirection: 'row',
                            paddingTop: 43,
                          }}>
                          <TouchableOpacity style={styles.minButton}
                                          onPress={() => this.handleMinus(data.name)}>
                            <Text style={styles.textEdit}>-</Text>
                          </TouchableOpacity>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 17,
                              paddingHorizontal: 8,
                            }}>
                            {this.state.cart[data.name]}
                          </Text>
                          <TouchableOpacity style={styles.plusButton}
                                          onPress={() => this.handlePlus(data.name)}>
                            <Text style={styles.textEdit}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                  {/* totalPrice = data.price * this.state.cart[data.name] */}
                </>
              );
            })}
            <View
              style={{
                flexDirection: 'column',
                height: 145,
                backgroundColor: 'white',
                paddingHorizontal: 14,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '45%',
                  borderBottomWidth: 1,
                  borderColor: '#DBDBDB',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Text style={{fontSize: 17, paddingBottom: 2}}>
                      Total Pembayaran
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <IconInfo name="info" size={22} />
                    <Text style={{fontSize: 13, paddingLeft: 5}}>
                      belum termasuk biaya antar
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 17, paddingTop: 7}}>Rp {this.state.totalPrices}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  height: '65%',
                  paddingTop: 3,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={{fontSize: 15}}>Kamu belanja di:</Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingLeft: 5}}>
                    <IconStore name="store" size={15} color={'skyblue'} />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingLeft: 5,
                      }}>
                      {this.state.market.name}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 45,
                    marginTop: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: '#FF5063',
                      width: '100%',
                      borderRadius: 7,
                    }}
                    onPress={() => this.paymentGateway()}
                    >
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        alignSelf: 'center',
                      }}>
                      Lanjutkan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
        {/* tidak ada transaksi */}

        {/*ada transaksi */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.getProductMarket.product,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProductMarket,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
