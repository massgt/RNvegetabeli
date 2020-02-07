import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput,Picker} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { postRegister } from '../../../../../config/Redux/Actions/User/LoginRegister/postRegister';
import {ToastAndroid} from 'react-native';

class Register extends Component {
  state = {
    email: '',
    password: '',
    role: 'buyer',
    borderBottomColorEmail:'gray',
    borderBottomColorPassword: 'gray',
    invalidInfoEmail: false,
    invalidInfoPassword: false,
    passwordSecure: true,
    showPassword: false,
    hiddenPassword: false,
    rulesPassword: false,
    marginTop:0,
    marginTest: 14
  }

  onFocusEmail() {
    this.setState({
      borderBottomColorEmail: "#F15B5D",
      invalidInfoEmail:false
    })
  }

  onFocusPassword() {
    this.setState({
      borderBottomColorPassword: "#F15B5D",
      invalidInfoPassword: false,
      showPassword: true
    })
  }

  onBlur() {
    this.setState({
      borderBottomColor:'gray',
      showPassword: false,
      hiddenPassword:false
    })
  }

  rulesPassword = () => {
    if(!this.state.rulesPassword) {
      this.setState({
        rulesPassword: !this.state.rulesPassword,
        marginTop: 14
      })
    } else {
      this.setState({
        rulesPassword: !this.state.rulesPassword,
        marginTop: 0
      })
    }
  }

  registerSubmit = async () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }
    if (this.state.email == '' && this.state.password == '') {
        this.setState({
          invalidInfoPassword: true,
          invalidInfoEmail: true,
          borderBottomColorEmail: "#F15B5D",
          borderBottomColorPassword: "#F15B5D",
          showPassword: false,
          hiddenPassword: false
        })
      } else if (this.state.password == '') {
        this.setState({
          invalidInfoPassword: true,
          borderBottomColorEmail: "#F15B5D",
          borderBottomColorPassword: "#F15B5D",
          showPassword: false,
          hiddenPassword: false
        })
      } else if ( this.state.email == '') {
        this.setState({
          invalidInfoEmail: true,
          borderBottomColorEmail: "#F15B5D",
          borderBottomColorPassword: "#F15B5D",
          showPassword: false,
          hiddenPassword: false
        })
      } else {
          this.props.postRegister(data)
          .then(result => {
            console.log('reeqr',result)
            if(result.value.data == "Your password is not valid ") {
              ToastAndroid.showWithGravity(
                'Your password is not valid',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            } else if (result.value.data == "email already exists") {
              ToastAndroid.showWithGravity(
                'Email with those role already exists',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            }
            else {
              this.setState({
                email: '',
                password: ''
              })
              this.props.navigation.navigate('Login');
              ToastAndroid.showWithGravity(
                'Successfully Registered',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
  }

  componentDidMount() {
    console.log('qwej', process.env.PORT)
    console.log('qwej', process.env.HOST)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeLogin')}>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Masuk Lewat Email</Text>
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon style={styles.homeIconLogo} name="sign-in" size={40} color="white" />
            </View>
            <Text style={styles.homeIconText}>Daftar</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView1}>
            <View style={styles.inputView2}>
              <Text style={styles.inputText}>Email:</Text>
              <TextInput style={[styles.inputTextInput, { borderBottomColor: this.state.borderBottomColorEmail }]} placeholder="Masukkan Email" 
              onFocus={() => this.onFocusEmail()} onBlur={() => this.onBlur()} 
                onChangeText={(itemValue, itemIndex) =>
                  this.setState({ email: itemValue, invalidInfoEmail: false })
                } value={this.state.email}/>
              <Icon name="envelope" color="gray" size={21}
              style={styles.inputLogoEmail}/>
              {this.state.invalidInfoEmail ? <Icon name="info-circle" color="rgb(241, 91, 93)" size={21}
                style={styles.inputLogoEmailInvalid} /> : <></>}
              
            </View>
          </View>
          <View style={styles.inputPassword}>
            <View style={styles.inputView2}>
              <Text style={styles.inputText}>Password:</Text>
              <TextInput style={[styles.inputTextInput, {borderBottomColor: this.state.borderBottomColorPassword}]} placeholder="Masukkan Password" 
              secureTextEntry={this.state.passwordSecure} onFocus={() => this.onFocusPassword()} onBlur={() => this.onBlur()}
              onChangeText={(itemValue, itemIndex) =>
                  this.setState({ password: itemValue, invalidInfoPassword: false })}
              value={this.state.password}
              />
              <Icon name="lock" color="gray" size={25}
                style={styles.inputPasswordIcon}
              onPress={() => this.rulesPassword()} />
              {this.state.invalidInfoPassword ? <Icon name="info-circle" color="rgb(241, 91, 93)" size={21}
                style={styles.inputLogoEmailInvalid} /> : <></>}
              {this.state.showPassword ? <Icon name="eye" color="gray" size={21}
                style={styles.inputLogoEmailInvalid} onPress={() => this.setState({ passwordSecure: false, hiddenPassword: true})} /> : <></>}
              {this.state.hiddenPassword ? <Icon name="eye-slash" color="gray" size={21}
                style={styles.inputLogoEmailInvalid} onPress={() => this.setState({ passwordSecure: true, showPassword: true,hiddenPassword: false })} /> : <></>}
            </View>
            {this.state.rulesPassword ? <View>
              <Text style={{ color: 'gray', fontSize: 10 }}>Ketentuan: 1 Karakter non-Alfanumerik, 2 Huruf Kapital Kembar,3 Angka,2 Huruf Kecil Kembar</Text>
            </View> : <></>}
          </View>
          <View style={[styles.questionTextContainer, {marginTop:this.state.marginTop}]}>
            <View style={styles.questionTextView}>
              <Text>Sudah terdaftar? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.questionTextColor}>Masuk</Text>
              </TouchableOpacity>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.registerSubmit()}>
              <View style={styles.buttonRegister}>
                <Text style={styles.buttonRegisterText}>Daftar</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonCancelContainer}>
              <Text onPress={() => this.props.navigation.navigate('HomeLogin')} 
              style={styles.buttonCancelText}>Batalkan</Text>
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
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.postRegister.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
 return bindActionCreators(
   {
     postRegister,
   },
   dispatch,
 );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)