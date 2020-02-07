import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShopBag from 'react-native-vector-icons/FontAwesome5';
import IconHome from 'react-native-vector-icons/Entypo';
import Arrow from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {getCartByIdCart} from '../../../../config/Redux/Actions/Transaction/getCartByIdCart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class detailTrans extends Component {
    state ={
        cartData: [],
        date_transaction: '',
        deliveryFee: 10000,
        product: [],
        price: [],
        quantity: []
    }

    cardData = async () => {
        for(let i = 0; i< this.state.product.length; i++) {
            <View style={{ height: '60%', borderBottomWidth: 1, borderColor: '#EFEAEA', flexDirection: 'row' }}>
                <View style={{ paddingTop: 25, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        {this.state.quantity[i]}
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 20, paddingTop: 12 }}>
                    <View>
                        <Text style={styles.nameItem}>{this.state.product[i]}</Text>
                    </View>
                    <View>
                        <Text style={styles.priceItem}>Rp {this.state.price[i]}/pcs</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 25, paddingLeft: 85 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        Rp {this.state.quantity[i] * this.state.price[i]}
                    </Text>
                </View>
            </View>
        }
    }

    async componentDidMount() {
        let id_cart = await this.props.navigation.getParam('id_cart')
        console.log('iddd', id_cart)
        await this.props.getCartByIdCart(null, id_cart)
        console.log('carrrttt', this.props.cartData)
        this.setState({
            cartData: this.props.cartData.data.data[0],
            date_transaction: this.props.cartData.data.data[0].date_transaction.slice(0,10),
            product: this.props.cartData.data.data[0].product.split(','),
            price: this.props.cartData.data.data[0].price.split(','),
            quantity: this.props.cartData.data.data[0].quantity.split(','),
        })
        console.log('stateee', this.state.cartData)
        console.log('dateee', this.state.date_transaction)
        console.log(this.state.product)
        console.log(this.state.price)
        console.log(this.state.quantity)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25}
                            onPress={() => this.props.navigation.navigate('Transaction')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Detail Transaksi
                    </Text>
                </View>
                <ScrollView>
                {/* <View style={{flexDirection: 'row', height: 40, alignItems: 'center', paddingHorizontal: 16}}>
                    <View>
                        <Text style={{fontSize: 14,}}>
                            Kode Belanja - 27940
                        </Text>
                    </View>
                    <View style={{paddingLeft: 80}}>
                        <Text style={{fontSize: 14, color: '#737375'}}>
                            Status:
                        </Text>
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontSize: 14, color: '#737375'}}>
                            Dibatalkan
                        </Text>
                    </View>
                </View> */}

                <View style={styles.cardDate}>
                    <View style={styles.subCardCode}>
                        <View style={{flexDirection: 'row'}}>    
                            <View>
                                <Text style={styles.textCode}>
                                    Kode Belanja -
                                </Text>
                            </View>
                            <View style={styles.codeShop}>
                                <Text style={{fontSize: 14,}}>
                                    {this.state.cartData.id_cart}
                                </Text>
                            </View>
                        </View>
                        <View style={{paddingLeft: 47}}>
                            <Text style={styles.textStatus}>
                                Status:
                            </Text>
                        </View>
                        <View style={{padding: 5}}>
                            <Text style={styles.valueStatus}>
                                Dalam Proses
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subCardDate}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', marginTop: -5}}>
                                <ShopBag name='shopping-bag' size={13} color='#737375'/>
                                <Text style={styles.textOrderDate}>Tanggal Order</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 13}}>{this.state.date_transaction}</Text>
                            </View>
                        </View>
                        <View style={{paddingLeft: 23}}>
                            <Arrow name='arrowright' size={23} color= '#737375'/>
                        </View>
                        <View style={{paddingLeft: 33}}>
                            <View style={{flexDirection:'row'}}>
                                <IconHome name="home" size={14} color= '#737375'/>
                                <Text style={styles.textOrderDate}>Tanggal Pengantaran</Text>
                            </View>
                            <View>
                                    <Text style={{ fontSize: 13 }}>{this.state.date_transaction}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{flexDirection: "column", height: 150,  backgroundColor: 'white', elevation: 3, marginTop: 10,paddingHorizontal: 16}}>
                    <View style={{height: '50%',  borderBottomWidth: 1, borderColor: '#EFEAEA', justifyContent: 'center'}}>
                        <View style={{flexDirection:'row', paddingVertical: 5}}>
                            <ShopBag name="store" size={14} color= 'red'/>
                            <Text style={styles.valueNameMarket}>Pasar Perundungan</Text>
                        </View>
                        <View style={{flexDirection:'row', paddingVertical: 5}}>
                            <Icon name="map-marker" size={17} color= 'red' style={{paddingLeft:3}}/>
                            <Text style={styles.valueAddress}>aaa</Text>
                        </View>
                    </View>
                    <View style={{height: '50%',  justifyContent: "center"}}>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                            Catatan Order
                        </Text>
                        <Text style={{fontSize: 13}}>
                            -
                        </Text>
                    </View>
                </View>

                <View style={{flexDirection: "column", height: 115,  backgroundColor: 'white', elevation: 3, marginTop: 10,paddingHorizontal: 16}}>
                    <View style={{height: '35%',  borderBottomWidth: 1, borderColor: '#EFEAEA', justifyContent: 'center'}}>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                            Ringkasan Pesanan
                        </Text>
                    </View>
                   {this.state.product.map((itemValue, itemIndex) => {
                       return (
                           <View style={{ height: '60%', borderBottomWidth: 1, borderColor: '#EFEAEA', flexDirection: 'row' }}>
                               <View style={{ paddingTop: 25, paddingLeft: 20 }}>
                                   <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                       {this.state.quantity[itemIndex]}
                            </Text>
                               </View>
                               <View style={{ flexDirection: 'column', paddingLeft: 20, paddingTop: 12 }}>
                                   <View>
                                       <Text style={styles.nameItem}>{this.state.product[itemIndex]}</Text>
                                   </View>
                                   <View>
                                       <Text style={styles.priceItem}>Rp {this.state.price[itemIndex]}/pcs</Text>
                                   </View>
                               </View>
                               <View style={{ paddingTop: 25, paddingLeft: 85 }}>
                                   <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                       Rp {this.state.quantity[itemIndex] * this.state.price[itemIndex]}
                            </Text>
                               </View>
                           </View>
                       )
                   })}
                </View>
                <View style={{flexDirection: "column", height: 150,  backgroundColor: 'white', elevation: 3, marginTop: 10,paddingHorizontal: 16}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '65%', borderBottomWidth: 1, borderColor: '#EFEAEA'}}>
                        <View>
                            <Text style={{fontSize: 13, color: '#737375',paddingTop: 13}}>
                                Subtotal
                            </Text>
                            <Text style={{fontSize: 13, color: '#737375', paddingTop: 7}}>
                                Biaya Pengantaran
                            </Text>
                            <Text style={{fontSize: 13, color: '#737375', paddingTop: 7}}>
                                Diskon
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 13, fontWeight: 'bold', paddingTop: 13}}>
                                Rp {this.state.cartData.total}
                            </Text>
                            <Text style={{fontSize: 13, fontWeight: 'bold', paddingTop: 7}}>
                                Rp {this.state.deliveryFee}
                            </Text>
                            <Text style={{fontSize: 13, fontWeight: 'bold', paddingTop: 7}}>
                                Rp 0
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '35%', borderBottomWidth: 1, borderColor: '#EFEAEA'}}>
                        <View>
                            <Text style={{fontSize: 13, color: '#737375',paddingTop: 13}}>
                                Total Pembayaran
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 13, fontWeight: 'bold', paddingTop: 13}}>
                                    Rp {this.state.cartData.total + this.state.deliveryFee}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardDate}>
                    <View style={{height: '50%', justifyContent: 'center'}}>
                        <Text style={{fontSize: 13}}>
                            Butuh Bantuan ?
                        </Text>
                    </View>
                    <View style={{height: '50%'}}>
                        <View style={{flexDirection: 'row', width: '100%', height: 35,}}>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FF5063', width: '100%', borderRadius: 10}}>
                                <Text style={{fontSize: 16, color: 'white', alignSelf: 'center'}}>
                                    Hubungi CS Kami
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartData: state.getCartByIdCart.cartData
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getCartByIdCart
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(detailTrans);