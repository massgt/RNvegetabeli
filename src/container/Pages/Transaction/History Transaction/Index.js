import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

class historyTrans extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25}
                        onPress={() => this.props.navigation.navigate('Transaction')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Riwayat Transaksi
                    </Text>
                </View>
                <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailTrans')}>
                <View style={{flexDirection: "column", height: 130, backgroundColor: 'white', elevation: 3, marginTop: 12}}>
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
                        <View style={{paddingLeft: 100}}>
                            <Text style={{fontSize: 14, color: '#737375'}}>
                                Status:
                            </Text>
                        </View>
                        <View style={{padding: 5}}>
                            <Text style={{fontSize: 14, color: '#737375'}}>
                                Dibatalkan
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

export default historyTrans;