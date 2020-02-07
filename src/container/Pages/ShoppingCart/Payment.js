import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity, Image, Dialog, AsyncStorage } from "react-native";
// import { Container, CardItem, Body, Content, Header, Left, Right, Icon, Item,Card, Input, Title, Button, Text } from "native-base";
import { Container, Header, Content, Form, Item, Input, Footer, Text, Label, Left, Right, Button, Icon, Body, Title, Card, Radio, ListItem } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addCart} from '../../../config/Redux/Actions/Cart/addCart'
import {addProductTaken} from '../../../config/Redux/Actions/Product Taken/addProductTaken'
import {postSession} from '../../../config/Redux/Actions/iPaymu/postSession'
// import {Modal} from 'react-native-elements'
// import styles from './ScreenkuCSS'

class Payment extends React.Component {
    state = {
        selected: '',
        email: '',
        id_user: '',
        dateOrder: '',
        dateSent: '',
        productOrder: [],
        cart: {},
        market:[],
        id_market: '',
        deliveryFee: 10000,
        totalPrice: 0,
        totalItem: 0,

        quantity: [],
        id_product: [],
        price: [],

        full_name: '',
        order_address: '',
        phone: '',
        order_note: '',
        payment_method: '',
        session_id: ''
    }

    getDate = () => {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        this.setState({
            dateOrder: `${day} ${month} ${year}`,
            dateSent: `${day + 1} ${month} ${year}`
        })
    }

    handleAddCartCOD = async () => {
        let id_cart = Math.floor(Math.random() * 100000) + 1 
        const data = {
            id_cart: id_cart,
            id_user: this.state.id_user,
            id_market: this.state.id_market,
            full_name: this.state.full_name,
            order_address: this.state.order_address,
            email: this.state.email,
            phone: this.state.phone,
            order_note: this.state.order_note,
            session_id: '-',
            payment_method: this.state.payment_method,
            total: this.state.totalPrice,
            date_transaction: new Date(),
            date_updated: new Date()
        }
        await this.props.addCart(data)
        for(let i = 0; i< this.state.id_product.length; i++) {
            const data2 = {
                id_product:this.state.id_product[i],
                id_cart: id_cart,
                quantity: this.state.quantity[i]
            }
            this.props.addProductTaken(data2)
        }
        this.props.navigation.push('PaymentSucces', {
            id_cart: id_cart
        })
    }

    handleAddCartIPAY = async () => {
        let id_cart = Math.floor(Math.random() * 100000) + 1
        const data = {
            id_cart: id_cart,
            id_user: this.state.id_user,
            id_market: this.state.id_market,
            full_name: this.state.full_name,
            order_address: this.state.order_address,
            email: this.state.email,
            phone: this.state.phone,
            order_note: this.state.order_note,
            session_id: '-', ///////////////////////////////////////
            payment_method: this.state.payment_method,
            total: this.state.totalPrice,
            date_transaction: new Date(),
            date_updated: new Date()
        }
        await this.props.addCart(data)
        for (let i = 0; i < this.state.id_product.length; i++) {
            const data2 = {
                id_product: this.state.id_product[i],
                id_cart: id_cart,
                quantity: this.state.quantity[i]
            }
            this.props.addProductTaken(data2)
        }
        this.state.cart['Ongkos Kirim'] = 10000
        await this.state.price.push(10000)
        await this.state.quantity.push(1)
        await this.forceUpdate()
        const dataIpaymu = {
            key: '8ADEAEAB-1A03-4682-BFB6-C109E2A1A84C',
            action: 'payment',
            product: Object.keys(this.state.cart),
            price: this.state.price,
            quantity: this.state.quantity,
            comments: 'Keterangan Produk',
            ureturn: 'http://websiteanda.com/return.php?q=return',
            unotify: 'http://websiteanda.com/notify.php',
            ucancel: 'http://websiteanda.com/cancel.php',
            format: 'json'
        }
        this.props.postSession(dataIpaymu)
        .then(result => {
            this.props.navigation.push('iPaySuccess', {
                dataIpay: result
            })
        }) 
        .catch(err => {
            console.log(err)
        })
    }

    handleSubmit = () => {
        if(this.state.payment_method == 'COD') {
            this.handleAddCartCOD()
        } else {
            this.handleAddCartIPAY()
        }
    }

    
    async componentDidMount() {
        let emailData = JSON.parse(await AsyncStorage.getItem('@email'))
        let id_users = JSON.parse(await AsyncStorage.getItem('@id_user'))
        this.setState({
            email: emailData,
            id_user: id_users
        })
        console.log('emailq', this.state.email)
        this.getDate()
        let productOrder = await this.props.navigation.getParam('productOrder')
        let cart = await this.props.navigation.getParam('cart')
        let totalPrice = await this.props.navigation.getParam('totalPrice')
        let market = await this.props.navigation.getParam('market')
        let totalProduct = await this.props.navigation.getParam('totalProduct')
        let quantities = await this.props.navigation.getParam('quantity')
        let id_products = await this.props.navigation.getParam('id_product')
        let prices = await this.props.navigation.getParam('price')
        await this.setState({
            productOrder,
            cart,
            totalPrice,
            market,
            totalItem: totalProduct,
            quantity: quantities,
            id_product: id_products,
            price: prices
        })
        await this.setState({
            id_market: this.state.market.id_market,
        })
        console.log('whutprice', this.state.price)
        console.log('sss', this.state.productOrder)
        console.log('catttt', this.state.cart)
        console.log(this.state.cart['Apel'])
        console.log('markezzt', this.state.market)
        console.log('iddd', this.state.id_market)
        console.log('totaoalal', this.state.totalItem)
        console.log('id_pro', this.state.id_product)
        console.log('ququ', this.state.quantity)
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate('ShoppingCart') }}>
                            <Icon name='ios-arrow-back' style={styles.iconHeader} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleHeader}>Pesan</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form >

                        <Item stackedLabel>
                            <Text style={styles.DetailPengiriman}>Detail Pengiriman</Text>
                            <Label style={{ fontSize: 13 }}>Nama Lengkap</Label>
                            <Input onChangeText={itemValue => {
                                this.setState({
                                    full_name: itemValue
                                })
                            }} style={{ marginBottom: 0 }} />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13, marginBottom: 50 }}>Alamat Pengantaran</Label>
                            <Input onChangeText={itemValue => {
                                this.setState({
                                    order_address: itemValue
                                })
                            }}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13 }}>Email</Label>
                            <Input value={this.state.email} disabled/>
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13 }}>No. Telephone</Label>
                            <Input onChangeText={itemValue => {
                                this.setState({
                                    phone: itemValue
                                })
                            }}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13, marginBottom: 50 }}>Catatan Order</Label>
                            <Input onChangeText={itemValue => {
                                this.setState({
                                    order_note: itemValue
                                })
                            }}/>
                        </Item>
                    </Form>
                    <View style={styles.line} />
                    <Container style={{ borderColor: 'black', height: 190 }}>
                        <Text style={{ marginLeft: 12, marginTop: 15, fontWeight: 'bold', marginBottom: 12, fontSize: 15 }}>Tanggal Pengiriman</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./lock.png')} style={{ width: 15, height: 15, marginLeft: 15 }} />
                            <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0, color: 'gray' }}>Tanggal Order</Text>
                            <Image source={require('./next.png')} style={{ width: 15, height: 15, marginLeft: 35 }} />
                            <Image source={require('./home.png')} style={{ width: 15, height: 15, marginLeft: 35 }} />
                            <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0, color: 'gray' }}>Tanggal Pengantaran</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, fontSize: 15, marginTop: 0, fontWeight: 'bold' }}>{this.state.dateOrder}</Text>
                            <Text style={{ marginLeft: 78, fontSize: 15, marginTop: 0, fontWeight: 'bold' }}>{this.state.dateSent}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 40, marginTop: 50 }} source={require('./info.png')} />
                            <Text style={{ marginTop: 48, fontSize: 13, marginLeft: 5, marginRight: 90, color: 'gray' }}>Order sebelum jam 8 pagi akan diantarkan oleh kurir kami Hari ini. Sedangkan untuk order setelah jam 8 pagi akan diantarkan oleh kurir kami Esok Harinya</Text>
                        </View>
                    </Container>
                    <View style={styles.line} />
                    <Content>
                    <Text style={{ marginLeft: 12, marginTop: 20, fontWeight: 'bold' }}>Metode Pembayaran</Text>
                        <ListItem  style={{ borderColor: 'white' }}>
                            <Left>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./money.png')} style={{ width: 17, height: 17, marginLeft: 2 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0 }}>Bayar di rumah</Text>
                                </View>
                                <View>
                                </View>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    selected={this.state.payment_method=='COD'}
                                    onPress={()=>this.setState({payment_method:'COD'})}
                                />
                            </Right>
                        </ListItem>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginTop: -1 }}>Cara Pembayaran:</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13 }}>- Lakukan pembayaran setelah barang diterima.</Text>
                        {/* <View style={styles.line}/> */}
                        <ListItem  style={{ borderColor: 'white' }}>
                            <Left>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./pay.png')} style={{ width: 17, height: 17, marginLeft: 2, marginTop: 12 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 12 }}>iPaymu</Text>
                                </View>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    selected={this.state.payment_method=='iPaymu'}
                                    onPress={()=>this.setState({payment_method:'iPaymu'})}
                                />
                            </Right>
                        </ListItem>
                        <Text style={{ marginLeft: 15, fontSize: 13 }}>Cara Pembayaran:</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50, marginBottom: 12 }}>
                            Setelah mengisi data pada halaman ini,Anda akan diarahkan pada halaman untuk melanjutkan pembayaran Anda
                        </Text>
                        {/* <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50, marginBottom: 12 }}>- Konfirmasi pembayaran ke Admin Tumbasin Telp./ WA 082242861268</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50}}>- Kirim bukti pembayaran berupa foto struk pembayaran atau screenshot pembayaran</Text> */}
                    </Content>
                    <View style={styles.line2} />
                    <Card style={{marginTop:0, marginLeft:0, marginBottom:0,marginRight:0}}>
                        <Text style={{ marginLeft: 12, marginTop: 20, fontWeight: 'bold', marginBottom:15 }}>Ringkasan Pesanan</Text>
                        {this.state.productOrder.map(data => {
                            return (
                                <View style={{ flexDirection: 'row',marginBottom:15 }}>
                                    <Text style={{alignSelf:'center', marginLeft: 13, fontSize: 16, marginTop: 0, marginRight: 10 }}>{this.state.cart[`${data.name}`]}</Text>
                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:30}}>
                                        <View>
                                            <Text style={{ marginLeft: 13, fontSize: 13 }}>{data.name}</Text>
                                            <Text style={{ marginLeft: 13, fontSize: 13 }}>{data.price}</Text>
                                        </View>
                                        <Text style={{ fontSize: 13, alignSelf: 'center' }}>Rp {this.state.cart[`${data.name}`] * data.price}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </Card>
                    <Card style={{marginTop:1, marginLeft:0, marginRight:0}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Sub Total</Text>
                            <Text style={{textAlign: 'right', marginLeft:200, fontSize: 13,marginTop: 20}}>Rp {this.state.totalPrice}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Biaya Pengantaran</Text>
                    <Text style={{textAlign: 'right', marginLeft:145, fontSize: 13,marginTop: 20}}>Rp {this.state.deliveryFee}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Diskon</Text>
                            <Text style={{textAlign: 'right', marginLeft:215, fontSize: 13,marginTop: 20,marginBottom:15}}>Rp 0</Text>
                        </View>
                    </Card>
                </Content>
                <Footer style={{backgroundColor:'white', borderWidth:1, borderColor:'#DBD9D9', height:150}}>
                    <View style={{flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <ListItem style={{marginTop:-4}}>
                            <Text style={{ marginLeft: -5, fontSize: 15, marginRight:10, marginTop:-4, color:'gray', fontWeight:'bold' }}>Total Pembayaran</Text>
                            <Text style={{textAlign: 'right', marginLeft:120, fontSize: 15,marginBottom:5}}>Rp {this.state.totalPrice + this.state.deliveryFee}</Text>
                        </ListItem>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ListItem style={{marginTop:-4}}>
                            <Text style={{ marginLeft: -5, fontSize: 15, marginRight:10, marginTop:-4, color:'gray', fontWeight:'bold' }}>Kamu Belanja di:</Text>
                            <Image source={require('./store.png')} style={{ width: 17, height: 17, marginLeft: 2,marginTop:-7 }} />
                            <Text style={{ marginLeft: 5, marginTop: -3, fontWeight: 'bold', fontSize: 15 }}>{this.state.market.name}</Text>
                        </ListItem>
                    </View>
                    {/* <TouchableOpacity }> */}
                        <Button onPress={() => this.handleSubmit()} style={{backgroundColor:'#F15B5D',borderRadius: 10}}>
                        {/* <Button onPress={() => { this.props.navigation.navigate('PaymentSucces') }} style={{backgroundColor:'#F15B5D',borderRadius: 10}}> */}
                            <Text style={{marginLeft:100}}>Pesan Sekarang</Text>
                        </Button>
                    {/* </TouchableOpacity> */}
                    </View>
                </Footer>
            </Container>
        );
    

    }
}
const mapStateToProps = state => {
    return {
        errorMessageCart: state.addCart.errorMessage,
        errorMessageProduct: state.addProductTaken.errorMessage,
        data: state.postSession.data
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addCart,
            addProductTaken,
            postSession
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)




const styles = StyleSheet.create({

    header: {
        backgroundColor: 'white',
        width: 360,
        height: 60,

    },
    titleHeader: {
        color: 'black',
        fontSize: 18
    },
    iconHeader: {
        color: '#F15B5D',
    },
    line: {
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1,
        marginTop: 30
    },
    line2: {
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1,
        marginTop: 12
    },
    DetailPengiriman:{ marginLeft: -220, marginTop: 20, fontWeight: 'bold' }
})