import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconUser from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

class sellerProductDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="#FF5063"
              size={25}
              onPress={() => this.props.navigation.navigate('sellerProduct')}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Detail Produk</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderBottomWidth: 1,
              // marginBottom: 20,
              // paddingBottom: 20,
              borderColor: '#E3E3E3',
            }}>
            <View
              style={{
                alignItems: 'center',
                height: 320,
                backgroundColor: '#EE4F6F',
              }}>
              <Image
                source={require('../../../assets/image/produk_gulaku.jpg')}
                style={{
                  height: 320,
                }}
              />
            </View>
          </View>
          <View style={styles.containerFollowUs}>
            <View>
              <Text style={styles.textNameProduct}>Nama Produk</Text>
            </View>
            <Text style={styles.textRp}>Rp99.999.000</Text>
            <View style={styles.containerFacebook}>
              <TouchableOpacity style={styles.touchableFollow}>
                <View style={styles.line}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerRincian}>
            <View>
              <Text style={styles.textFollow}>Rincian Produk</Text>
              <View style={{height: 1, backgroundColor: 'grey'}}></View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textNameProduct}>Stok</Text>
                <Text style={styles.textStok}>1000</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textNameProduct}>Kategori</Text>
                <Text style={styles.textCategory}>Lauk Pauk</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textNameProduct}>Dikirim Dari</Text>
                <Text style={styles.textMarket}>Pasar Kembang</Text>
              </View>
              <View style={{height: 0.8, backgroundColor: 'grey'}}></View>
              <Text style={styles.textNameProduct}>Deskripsi Produk</Text>
              <Text style={styles.textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Input form */}
        {/* <ScrollView>
          <View style={{alignContent: 'center', paddingHorizontal: 40}}>
            <Input
              inputContainerStyle={{height: 35}}
              containerStyle={{marginTop: 30}}
              labelStyle={{
                fontSize: 14,
              }}
              label="Nama Lengkap"
              inputStyle={{fontSize: 16, paddingLeft: 0}}
            />
            <Input
              inputContainerStyle={{height: 35}}
              containerStyle={{marginTop: 30}}
              labelStyle={{
                fontSize: 14,
              }}
              label="Telepon"
              keyboardType="phone-pad"
              inputStyle={{fontSize: 16, paddingLeft: 0}}
            />
            <Input
              inputContainerStyle={{height: 35}}
              containerStyle={{marginTop: 30}}
              labelStyle={{
                fontSize: 14,
              }}
              label="Email"
              defaultValue="agsn.does6@gmail.com"
              inputStyle={{fontSize: 16, paddingLeft: 0}}
            />
          </View>
        </ScrollView> */}
        {/* End Input form */}
      </View>
    );
  }
}

export default sellerProductDetail;
