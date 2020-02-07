import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {verifyOtp} from '../../../../../config/Redux/Actions/User/LoginRegister/verifyOtp'
import AsyncStorage from '@react-native-community/async-storage';

class insertOtp extends Component {
  state = {
    idForgot: '',
    OTP: '',
  }

  async componentDidMount() {
    console.log('id_user', JSON.parse(await AsyncStorage.getItem('@id_user')))
  }

  handleSubmit = async () => {
    const data = {
      otp: this.state.OTP
    }
    this.props.verifyOtp(data)
    .then(result => {
      console.log('rezul',result)
      if(result.value.data == 'Wrong Code!') {
        return (
          ToastAndroid.showWithGravity(
            'Wrong code',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
        )
      } else {
        ToastAndroid.showWithGravity(
          'Login Success!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
        this.props.navigation.navigate('Belanja')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  // handleInsertCode = async () => {
  //   const data = {
  //     idForgot: this.state.idForgot
  //   }
  //   this.props.codeInsert(data)
  //     .then(async result => {
  //       console.log('qwkelqwresult', result)
  //       if (result.value.data == 'Wrong code') {
  //         ToastAndroid.showWithGravity(
  //           'Wrong code',
  //           ToastAndroid.SHORT,
  //           ToastAndroid.CENTER,
  //         );
  //       } else {
  //         await ToastAndroid.showWithGravity(
  //           'Success',
  //           ToastAndroid.SHORT,
  //           ToastAndroid.CENTER,
  //         );
  //         this.props.navigation.navigate('insertPassword')
  //       }
  //     })
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Masuk Lewat Nomor</Text>
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon style={styles.homeIconLogo} name="code" size={40} color="white" />
            </View>
            <Text style={styles.homeIconText}>Konfirmasi kode OTP</Text>
          </View>
        </View>
        <View style={styles.inputCodeContainer}>
          <View style={styles.inputCodeView}>
            <Text style={styles.inputCodeTextInfo}>Masukkan kode OTP yang telah dikirim</Text>
            <TextInput style={styles.inputCodeTextInput} placeholder="Kode OTP"
              onChangeText={(itemValue, itemIndex) => this.setState({
                OTP: itemValue
              })} />
          </View>
          <TouchableOpacity 
          onPress={() => this.handleSubmit()}
          >
            <View style={styles.buttonSendCode}>
              <Text style={styles.buttonSendCodeText}>Kirim</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.buttonCancelCode}>Batalkan</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    // errorMessage: state.codeInsert.errorMessage,
    // loginData: state.getLogin.loginData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // codeInsert,
      // getLogin
      verifyOtp
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(insertOtp)