import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity, Image, Dialog } from "react-native";
// import { Container, CardItem, Body, Content, Header, Left, Right, Icon, Item,Card, Input, Title, Button, Text } from "native-base";
import { Container, Header, Content, Form, Item, Input, Footer, Text, Label, Left, Right, Button, Icon, Body, Title, Card, Radio, ListItem } from 'native-base';

// import {Modal} from 'react-native-elements'
// import styles from './ScreenkuCSS'

export default class Screenku extends React.Component {
    state = {
        id_cart: 0
    }

    async componentDidMount() {
        let id = await this.props.navigation.getParam('id_cart')
        this.setState({
            id_cart: id
        })
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-back' style={styles.iconHeader} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleHeader}>Pesan</Title>
                    </Body>
                    <Right />
                </Header>

                {/* Payment Loading: */}
                {/* <View >
                    <Image source={require('./wait.jpg')} style={{  marginLeft:30, height:300, width:310, resizeMode: 'contain'}}  />
                    <Text style={{marginTop:-30, textAlign:'center', fontWeight:'bold'}}>Tunggu Sebentar..</Text>
                    <Text style={{textAlign:'center', marginTop:8}}>Order kamu lagi diprses nih.</Text>
                </View> */}

                {/* Payment Success Confirmation: */}
                <View >
                    <Image source={require('./sukses.jpg')} style={styles.sukses}  />
                    <Text style={styles.suksesFont}>Sukses!</Text>
                    <Text style={styles.ket}>
                        <Text style={styles.ket}>Belanja kamu telah kami proses ordernya dengan kode </Text>
                        <Text style={styles.sukses}>{this.state.id_cart}</Text>
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.cekTransaksi}>Cek Transaksi</Text>
                    </TouchableOpacity>
                    <Button style={styles.button} onPress={() => this.props.navigation.navigate('Shop')}>
                        <Text style={styles.pesan}>Pesan Sekarang</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}




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
    sukses:{ 
        marginLeft:15,
        height:280,
        width:310,
        resizeMode: 'contain'
    },
    suksesFont:{
        marginTop:5,
        textAlign:'center',
        fontWeight:'bold'
    },
    ket:{
        textAlign:'center',
        marginTop:8,
        marginLeft:12,
        marginRight:12
    },
    cekTransaksi:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#c4c4c4',
        marginTop:75
    },
    button:{
        backgroundColor:'#F15B5D',
        borderRadius: 10,
        marginTop:14,
        marginLeft:15,
        marginRight:15
    },
    pesan:{
        marginLeft:92
    }
})