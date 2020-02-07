import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ToastAndroid } from 'react-native';
import {emailInsert} from '../../../../config/Redux/Actions/User/ForgotPassword/emailInsert'
import AsyncStorage from '@react-native-community/async-storage';

class insertEmail extends Component {
  state= {
    email: '',
    role: 'buyer'
  }

  handleEmailInsert = async () => {
    const data = {
      email: this.state.email,
      role: this.state.role
    }
    this.props.emailInsert(data)
    .then(async result => {
      if(result.value.data == 'Email not found') {
        ToastAndroid.showWithGravity(
          'Email not found',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        console.log('qqqq',result)
        await AsyncStorage.setItem('@email', JSON.stringify(this.state.email))
        await AsyncStorage.setItem('@role', JSON.stringify(this.state.role))
        await ToastAndroid.showWithGravity(
          'Code has been sent to your email',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        this.props.navigation.navigate('insertCode')

      }
    })
  }

  // componentDidMount() {
  //   this.props.emailInsert()
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
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
        <View style={styles.inputContainer}>
          <View style={styles.inputView1}>
            <View style={styles.inputView2}>
              <TextInput style={styles.inputTextInput}
              onChangeText={(itemValue, itemIndex) => 
              this.setState({email: itemValue})}
              placeholder="Email" />
              <Icon name="envelope" color="gray" size={21}
                style={styles.inputLogoEmail} />
            </View>
            <View>
              <Picker
                selectedValue={this.state.role}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ role: itemValue })
                }>
                <Picker.Item label="Buyer" value="buyer" />
                <Picker.Item label="Seller" value="seller" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.textInformationView}>
          <Text style={styles.textInformationText}>Kami akan mengirimkan email untuk menyetel ulang password anda</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.handleEmailInsert()} style={styles.buttonResetView}>
            <Text style={styles.buttonResetText}>Reset Ulang</Text>
          </TouchableOpacity>
          <View style={styles.buttonCancelView}>
            <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.buttonCancelText}>Batalkan</Text>
          </View>
        </View>
        <View style={styles.conditionView}>
          <Text style={styles.conditionText}>Dengan masuk dan mendaftar,Anda menyetujui
            <Text style={styles.conditionText2}> Syarat Penggunaan</Text> dan <Text style={styles.conditionText2}>
              Kebijakan Privasi
            </Text>
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.emailInsert.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      emailInsert
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(insertEmail)