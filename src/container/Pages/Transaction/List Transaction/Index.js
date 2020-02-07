import React, {Component} from 'react';
import {Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import {getCartByIdUser} from '../../../../config/Redux/Actions/Transaction/getCartByIdUser'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class listTrans extends Component {
    async componentDidMount() {
        let id_user = await AsyncStorage.getItem('@id_user')
        await this.props.getCartByIdUser(null,id_user)
        console.log(this.props.cartData)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Daftar Transaksi</Text>
                    <TouchableOpacity style={styles.histButton}
                    onPress={() => this.props.navigation.navigate('historyTrans')}>
                        <Icon name= 'history' color='#737375' size={25}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailTrans')}>
                {/* <View style={styles.containerIcon}>
                    <Icon name='shopping-basket' size={150}/>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textFront}>
                        Transaksimu kosong, yuk order lagi!
                    </Text>
                    <Text style={styles.textFronttwo}>
                        Cari produk kebutuhanmu hari ini, yuk belanja sekarang!
                    </Text>
                </View> */}
                <View style={{flexDirection: "column", height: 130, backgroundColor: 'white', elevation: 3, marginTop: 12}}
                onPress={() => this.props.navigation.navigate('detailTrans')}>
                    <View style={{flexDirection: 'row', height: '70%', borderBottomWidth: 1, borderColor: '#EFEAEA'}}>
                        <View style={{padding: 19}}>
                            <Icon name='shopping-basket' size={20} color='red'/>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', padding: 5}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, paddingVertical: 3}}>
                                Kode belanja - 27940
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    Alamat:
                                </Text>
                                <Text style={{paddingLeft: 5,fontSize: 15, color: '#737375'}}>
                                    aasd
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingVertical: 3}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    Tanggal:
                                </Text>
                                <Text style={{paddingLeft: 5,fontSize: 15, color: '#737375'}}>
                                    14 January 2020, 15:22
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', height: '30%', alignItems: 'center', marginHorizontal: 16}}>
                        <View>
                            <Text style={{fontSize: 14,}}>
                                Total: Rp 16.000
                            </Text>
                        </View>
                        <View style={{paddingLeft: 90}}>
                            <Text style={{fontSize: 14, color: '#737375'}}>
                                Status:
                            </Text>
                        </View>
                        <View style={{padding: 5}}>
                            <Text style={{fontSize: 14, color: '#31C026'}}>
                                Dalam Proses
                            </Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>

                </ScrollView>
                
            </View>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(listTrans);