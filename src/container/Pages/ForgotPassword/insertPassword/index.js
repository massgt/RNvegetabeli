import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {passwordInsert} from '../../../../config/Redux/Actions/User/ForgotPassword/passwordInsert'
import AsyncStorage from '@react-native-community/async-storage';

class insertPassword extends Component {
  state= {
    password: '',
    secureText: true,
    showPassword: false,
    hiddenPassword: false,
    rulesPassword: false,
  }

  rulesPassword = () => {
    if (!this.state.rulesPassword) {
      this.setState({
        rulesPassword: !this.state.rulesPassword,
      })
    } else {
      this.setState({
        rulesPassword: !this.state.rulesPassword,
      })
    }
  }

  onFocusPassword() {
    this.setState({
      showPassword: true
    })
  }

  onBlur() {
    this.setState({
      showPassword: false,
      hiddenPassword: false
    })
  }

  handleInsertPassword = async () => {
    const data = {
      password: this.state.password
    }
    const id_user = await JSON.parse(await AsyncStorage.getItem('@id_user'))
    this.props.passwordInsert(data, id_user)
    .then(result => {
      console.log('rez',result)
      if(result.value.data == 'Your password pattern is invalid') {
        return ToastAndroid.showWithGravity(
          'Your password pattern is invalid',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Password Updated',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          );
        this.props.navigation.navigate('Login')
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
              <Icon style={styles.homeIconLogo} name="sign-in" size={40} color="white" />
            </View>
            <Text style={styles.homeIconText}>Atur Ulang Password</Text>
          </View>
        </View>
        <View style={styles.inputCodeContainer}>
          <View style={styles.inputCodeView}>
            <Text style={styles.inputCodeTextInfo}>Masukkan password baru anda</Text>
            <TextInput style={styles.inputCodeTextInput} placeholder="Password" secureTextEntry={this.state.secureText}
            onChangeText={(itemValue, itemIndex) => {
              this.setState({
                password: itemValue
              })
            }}
              onFocus={() => this.onFocusPassword()} onBlur={() => this.onBlur()}
            />
            <Icon name="lock" color="gray" size={35}
              style={styles.iconShowRules}
              onPress={() => this.rulesPassword()} />
            {this.state.showPassword ? <Icon name="eye" color="gray" size={30}
              style={styles.iconTogglePassword} onPress={() => this.setState({ secureText: false, hiddenPassword: true })} /> : <></>}
            {this.state.hiddenPassword ? <Icon name="eye-slash" color="gray" size={30}
              style={styles.iconTogglePassword} onPress={() => this.setState({ secureText: true, showPassword: true, hiddenPassword: false })} /> : <></>}
          </View>
          {this.state.rulesPassword ? <View style={styles.iconRulesView}>
            <Text style={{ color: 'gray', fontSize: 10 }}>Ketentuan: 1 Karakter non-Alfanumerik, 2 Huruf Kapital Kembar,3 Angka,2 Huruf Kecil Kembar</Text>
          </View> : <></>}
          <TouchableOpacity onPress={() => this.handleInsertPassword()}>
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

// const mapStateToProps = state => {
//   return {
//     errorMessage: state.passwordInsert.errorMessage
//   }
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      passwordInsert
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(insertPassword)