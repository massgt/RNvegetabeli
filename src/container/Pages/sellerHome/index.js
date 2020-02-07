import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class sellerHome extends Component {
  onPress = () => {
    console.log('Go To Produk');
    this.props.navigation.navigate('sellerProfile');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Profil</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.headerUser}>
              <View style={styles.headIcon}>
                <Icon name="user-circle" size={55} color="#EE4F6F" />
              </View>
              <View style={styles.textUser}>
                <Text style={styles.nameUser}>Demo Sellerpasar</Text>
                <Text style={styles.emailUser}>agsn.does6@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.containerFollowUs}>
            <View>
              <Text style={styles.textFollow}>Mulai Jual</Text>
            </View>
            <View style={styles.containerFacebook}>
              <TouchableOpacity
                style={styles.touchableSell}
                onPress={() => this.props.navigation.navigate('sellerLoad')}>
                <View style={{padding: 15}}>
                  {/* <Icon name="facebook" size={17} color="white" /> */}
                </View>
                {/* <View style={styles.line}></View> */}
                <View>
                  <Text
                    style={{
                      paddingLeft: 65,
                      color: '#fff',
                      fontSize: 17,
                    }}>
                    Tambah Produk Baru
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerFollowUs}>
            <View>
              <Text style={styles.textFollow}>Daftar Produk</Text>
            </View>
            <View style={styles.containerFacebook}>
              <TouchableOpacity
                style={styles.touchableSee}
                onPress={this.onPress}>
                <View style={{padding: 15}}>
                  {/* <Icon name="facebook" size={17} color="white" /> */}
                </View>
                {/* <View style={styles.line}></View> */}
                <View>
                  <Text
                    style={{
                      paddingLeft: 75,
                      color: '#F15B5D',
                      fontSize: 17,
                    }}>
                    Lihat Produk Saya
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerFollowUs}>
            <View>
              <Text style={styles.textFollow}>Ikuti kami</Text>
            </View>
            <View style={styles.containerFacebook}>
              <TouchableOpacity style={styles.touchableFollow}>
                <View style={{padding: 15}}>
                  <Icon name="facebook" size={17} color="white" />
                </View>
                <View style={styles.line}></View>
                <View>
                  <Text style={styles.textFacebook}>Follow Us On Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerInfo}>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={() => this.props.navigation.navigate('termOfUse')}>
              <View style={styles.headInfo}>
                <Text style={styles.textSyarat}>Syarat Penggunaan</Text>
                <Icon
                  name="chevron-right"
                  color="#ACADAF"
                  size={17}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={() => this.props.navigation.navigate('privacyPolicy')}>
              <View style={styles.headInfo}>
                <Text
                  style={{fontSize: 17, alignSelf: 'center', color: '#88898B'}}>
                  Kebijakan Privasi
                </Text>
                <Icon
                  name="chevron-right"
                  color="#ACADAF"
                  size={17}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={() => this.props.navigation.navigate('aboutUs')}>
              <View style={styles.headInfo}>
                <Text
                  style={{fontSize: 17, alignSelf: 'center', color: '#88898B'}}>
                  Tentang Kami
                </Text>
                <Icon
                  name="chevron-right"
                  color="#ACADAF"
                  size={17}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={() => this.props.navigation.navigate('HomeLogin')}>
              <View style={styles.headInfo}>
                <Text style={{fontSize: 17, alignSelf: 'center', color: 'red'}}>
                  Keluar
                </Text>
                <Icon
                  name="chevron-right"
                  color="#ACADAF"
                  size={17}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.titleApp}>
            <Text
              style={{
                fontSize: 15,
                color: '#88898B',
                alignSelf: 'center',
                paddingRight: 16,
              }}>
              Vegetabeli v.1.0.0
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default sellerHome;
