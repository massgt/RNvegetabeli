import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {codeInsert} from '../../../../config/Redux/Actions/User/ForgotPassword/codeInsert'
import {getLogin} from '../../../../config/Redux/Actions/User/LoginRegister/getLogin'
import AsyncStorage from '@react-native-community/async-storage';

class insertCode extends Component {
  state = {
    idForgot: ''
  }

  handleInsertCode = async () => {
    const data = {
      idForgot: this.state.idForgot
    }
    this.props.codeInsert(data)
    .then(async result => {
      console.log('qwkelqwresult',result)
      if(result.value.data == 'Wrong code') {
        ToastAndroid.showWithGravity(
          'Wrong code',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        await ToastAndroid.showWithGravity(
          'Success',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        this.props.navigation.navigate('insertPassword')
      }
    })
  }

  async componentDidMount() {
    console.log('email slurr', await AsyncStorage.getItem('@email'))
    console.log('email slurr', await AsyncStorage.getItem('@id_user'))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Lupa Password</Text>
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon style={styles.homeIconLogo} name="code" size={40} color="white" />
            </View>
            <Text style={styles.homeIconText}>Atur Ulang Password</Text>
          </View>
        </View>
        <View style={styles.inputCodeContainer}>
          <View style={styles.inputCodeView}>
            <Text style={styles.inputCodeTextInfo}>Masukkan kode verifikasi yang telah dikirim</Text>
            <TextInput style={styles.inputCodeTextInput} placeholder="Kode" 
            onChangeText={(itemValue, itemIndex) => this.setState({
              idForgot: itemValue
            }) }/>
          </View>
          <TouchableOpacity onPress={() => this.handleInsertCode()}>
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
    errorMessage: state.codeInsert.errorMessage,
    loginData: state.getLogin.loginData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      codeInsert,
      getLogin
    },
    dispatch
  )
}

export default  connect(mapStateToProps, mapDispatchToProps)(insertCode)