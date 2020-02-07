import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconUser from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

class sellerProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="#FF5063"
              size={25}
              onPress={() => this.props.navigation.navigate('sellerHome')}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Edit Profil</Text>
          <TouchableOpacity
            style={{
              // backgroundColor: 'yellow',
              paddingLeft: 200,
            }}>
            <Icon
              alignItems="right"
              name="check"
              color="#EE4F6F"
              size={20}
              onPress={() => this.props.navigation.navigate('sellerHome')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginBottom: 20,
            // paddingBottom: 20,
            borderColor: '#E3E3E3',
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 30,
              paddingBottom: 45,
              backgroundColor: '#EE4F6F',
            }}>
            <TouchableOpacity style={styles.touchableEdit}>
              <IconUser name="user-circle" size={100} color="#fff" />
              <IconUser
                name="camera"
                size={25}
                color="#bebebe"
                style={{
                  position: 'absolute',
                  paddingVertical: 40,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Input form */}
        <ScrollView>
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
        </ScrollView>
        {/* End Input form */}
        {/* <View style={styles.editButton}>
          <TouchableOpacity
            style={styles.touchEdit}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={styles.textEditProfile}>Edit</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

export default sellerProfile;
