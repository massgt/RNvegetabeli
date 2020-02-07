import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import logoTumbasin from '../../../../../assets/image/tumbasin.png';
import { ceil } from 'react-native-reanimated';

class aboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25}
                        onPress={() => this.props.navigation.navigate('Profile')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Tentang Kami
                    </Text>
                </View>
                <View style={{height: '35%', alignItems: 'center',borderBottomWidth: 1, borderColor: '#818182', justifyContent: 'center',}}>
                        <Image source={logoTumbasin} style={{height: 160, width: 160, justifyContent: 'center'}}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{alignItems: 'center', marginTop: 7}}>
                        <Text style={{fontWeight: 'bold', fontSize: 21, textAlign: 'center', color: '#737375'}}>
                            PT TUMBAS SINERGI MANDIRI (TUMBASIN.ID)
                        </Text>
                        <Text style={{ontSize: 17, textAlign: 'center', marginTop: 7, color: '#737375'}}>
                            Sebuah platform teknologi yang bertujuan untuk menghubungkan pelanggan dengan pedagang Pasar
                            tradisional.
                        </Text>
                        <Text style={{ontSize: 17, textAlign: 'center', marginTop: 7, color: '#737375'}}>
                            Tumbas.in dapat membantu pelanggan dalam membandingkan harga khususnya kebutuhan bahan pokok
                            dari pasar satu ke pasar lainnya. Selain itu tumbas.in akan memudahkan Ibu-Ibu untuk menyalurkan
                            hobi memasaknya di rumah.
                        </Text>

                    </View>
                </View>
            </View>
        )
    }
}

export default aboutUs;