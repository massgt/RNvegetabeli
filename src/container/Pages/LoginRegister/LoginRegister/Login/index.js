import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ToastAndroid} from 'react-native';
import {getLogin} from '../../../../../config/Redux/Actions/User/LoginRegister/getLogin';
import {getLoginPhone} from '../../../../../config/Redux/Actions/User/LoginRegister/getLoginPhone';
import AsyncStorage from '@react-native-community/async-storage';
class Login extends Component {
  state = {
    email: '',
    password: '',
    role: '',
    borderBottomColorEmail: 'gray',
    borderBottomColorPassword: 'gray',
    invalidInfoEmail: false,
    invalidInfoPassword: false,
    passwordSecure: true,
    showPassword: false,
    hiddenPassword: false,
    loginPhone: false,
    phone: '',
  };

  onFocusEmail() {
    this.setState({
      borderBottomColorEmail: '#F15B5D',
      invalidInfoEmail: false,
    });
  }

  onFocusPassword() {
    this.setState({
      borderBottomColorPassword: '#F15B5D',
      invalidInfoPassword: false,
      showPassword: true,
    });
  }

  onBlur() {
    this.setState({
      borderBottomColor: 'gray',
      showPassword: false,
      hiddenPassword: false,
    });
  }

  inputPhone = async () => {
    this.setState({
      loginPhone: !this.state.loginPhone,
    });
  };

  loginSubmit = async () => {
    if (this.state.email == '' && this.state.password == '') {
      this.setState({
        invalidInfoPassword: true,
        invalidInfoEmail: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else if (this.state.password == '') {
      this.setState({
        invalidInfoPassword: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else if (this.state.email == '') {
      this.setState({
        invalidInfoEmail: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else {
      this.props
        .getLogin(this.state.email, this.state.password, this.state.role)
        .then(async result => {
          console.log('reeqr', result);
          if (result.value.data == 'Password incorrect!') {
            ToastAndroid.showWithGravity(
              'Password incorrect!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else if (result.value.data == 'Email or Password incorrect!') {
            ToastAndroid.showWithGravity(
              'Email or Password incorrect!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else {
            console.log('gokz', this.props.loginData);
            const data = this.props.loginData.data.data;
            const {token, id_user, role, email} = data;
            await AsyncStorage.setItem('@accessToken', JSON.stringify(token));
            await AsyncStorage.setItem('@id_user', JSON.stringify(id_user));
            await AsyncStorage.setItem('@role', JSON.stringify(role));
            await AsyncStorage.setItem('@email', JSON.stringify(email));
            if (role === 'buyer') {
              ToastAndroid.showWithGravity(
                'Login Success!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
              this.props.navigation.navigate('RouteUser'); //Redirect Home
            } else if (role === 'seller') {
              ToastAndroid.showWithGravity(
                'Login Success!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
              this.props.navigation.navigate('RouteSeller'); //Redirect sellerHome
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleLoginPhone = async () => {
    if (this.state.phone == '' && this.state.password == '') {
      this.setState({
        invalidInfoPassword: true,
        invalidInfoEmail: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else if (this.state.password == '') {
      this.setState({
        invalidInfoPassword: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else if (this.state.phone == '') {
      this.setState({
        invalidInfoEmail: true,
        borderBottomColorEmail: '#F15B5D',
        borderBottomColorPassword: '#F15B5D',
        showPassword: false,
        hiddenPassword: false,
      });
    } else {
      this.props
        .getLoginPhone(this.state.phone, this.state.password, this.state.role)
        .then(async result => {
          console.log('phone slur', result);
          if (result.value.data == 'Phone Number not found') {
            ToastAndroid.showWithGravity(
              'Phone Number not found',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else if (result.value.data == 'Password incorrect!') {
            ToastAndroid.showWithGravity(
              'Password incorrect!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else {
            console.log('gokz phone', this.props.loginPhoneData);
            const data = this.props.loginPhoneData.data.data;
            console.log('DATA REDUX', data);
            const {token, id_user, role, id_market, email} = data;
            await AsyncStorage.setItem('@accessToken', JSON.stringify(token));
            await AsyncStorage.setItem('@id_user', JSON.stringify(id_user));
            await AsyncStorage.setItem('@role', JSON.stringify(role));
            await AsyncStorage.setItem('@id_market', JSON.stringify(id_market));
            await AsyncStorage.setItem('@email', JSON.stringify(email));
            ToastAndroid.showWithGravity(
              'Login Success!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            this.props.navigation.navigate('verifyOtp'); //Redirect Home
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleSubmit = async () => {
    if (this.state.loginPhone) {
      this.handleLoginPhone();
    } else {
      this.loginSubmit();
    }
  };

  componentDidMount() {
    console.log('qweja', process.env.PORT);
    console.log('qweja', process.env.HOST);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            {/* HPqlkwjekqwjek */}
            {this.state.loginPhone ? (
              <Text style={styles.navbarText}>Masuk Lewat Nomor</Text>
            ) : (
              <Text style={styles.navbarText}>Masuk Lewat Email</Text>
            )}
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon
                style={styles.homeIconLogo}
                name="sign-in"
                size={40}
                color="white"
              />
            </View>
            {this.state.loginPhone ? (
              <Text style={styles.homeIconText}>Masuk Lewat Nomor</Text>
            ) : (
              <Text style={styles.homeIconText}>Masuk Lewat Email</Text>
            )}
            {/* HPsssasdasda */}
            {this.state.loginPhone ? (
              <TouchableOpacity onPress={() => this.inputPhone()}>
                <Text
                  style={{textAlign: 'center', color: 'gray', paddingRight: 2}}>
                  Masuk Lewat Email
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.inputPhone()}>
                <Text
                  style={{textAlign: 'center', color: 'gray', paddingRight: 2}}>
                  Masuk Lewat Nomor
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView1}>
            <View style={styles.inputView2}>
              {this.state.loginPhone ? (
                <Text style={styles.inputText}>Nomor:</Text>
              ) : (
                <Text style={styles.inputText}>Email:</Text>
              )}
              {this.state.loginPhone ? (
                <TextInput
                  style={[
                    styles.inputTextInput,
                    {borderBottomColor: this.state.borderBottomColorEmail},
                  ]}
                  placeholder="Masukkan Nomor"
                  onFocus={() => this.onFocusEmail()}
                  onBlur={() => this.onBlur()}
                  onChangeText={(itemValue, itemIndex) =>
                    this.setState({phone: itemValue, invalidInfoEmail: false})
                  }
                />
              ) : (
                <TextInput
                  style={[
                    styles.inputTextInput,
                    {borderBottomColor: this.state.borderBottomColorEmail},
                  ]}
                  placeholder="Masukkan Email"
                  onFocus={() => this.onFocusEmail()}
                  onBlur={() => this.onBlur()}
                  onChangeText={(itemValue, itemIndex) =>
                    this.setState({email: itemValue, invalidInfoEmail: false})
                  }
                />
              )}
              <Icon
                name="envelope"
                color="gray"
                size={21}
                style={styles.inputLogoEmail}
              />
              {this.state.invalidInfoEmail ? (
                <Icon
                  name="info-circle"
                  color="rgb(241, 91, 93)"
                  size={21}
                  style={styles.inputLogoEmailInvalid}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
          <View style={styles.inputPassword}>
            <View style={styles.inputView2}>
              <Text style={styles.inputText}>Password:</Text>
              <TextInput
                style={[
                  styles.inputTextInput,
                  {borderBottomColor: this.state.borderBottomColorPassword},
                ]}
                placeholder="Masukkan Password"
                secureTextEntry={this.state.passwordSecure}
                onFocus={() => this.onFocusPassword()}
                onBlur={() => this.onBlur()}
                onChangeText={(itemValue, itemIndex) =>
                  this.setState({
                    password: itemValue,
                    invalidInfoPassword: false,
                  })
                }
              />
              <Icon
                name="lock"
                color="gray"
                size={25}
                style={styles.inputPasswordIcon}
              />
              {this.state.invalidInfoPassword ? (
                <Icon
                  name="info-circle"
                  color="rgb(241, 91, 93)"
                  size={21}
                  style={styles.inputLogoEmailInvalid}
                />
              ) : (
                <></>
              )}
              {this.state.showPassword ? (
                <Icon
                  name="eye"
                  color="gray"
                  size={21}
                  style={styles.inputLogoEmailInvalid}
                  onPress={() =>
                    this.setState({passwordSecure: false, hiddenPassword: true})
                  }
                />
              ) : (
                <></>
              )}
              {this.state.hiddenPassword ? (
                <Icon
                  name="eye-slash"
                  color="gray"
                  size={21}
                  style={styles.inputLogoEmailInvalid}
                  onPress={() =>
                    this.setState({
                      passwordSecure: true,
                      showPassword: true,
                      hiddenPassword: false,
                    })
                  }
                />
              ) : (
                <></>
              )}
            </View>
          </View>

          <View style={styles.questionTextContainer}>
            <View style={styles.questionTextView}>
              <View>
                <View style={styles.forgotView}>
                  <Text>Belum terdaftar? </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.questionTextColor}>Daftar</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('insertEmail')
                    }>
                    <Text style={styles.forgotText}>Lupa Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Picker
                selectedValue={this.state.role}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({role: itemValue})
                }>
                <Picker.Item label="Buyer" value="buyer" />
                <Picker.Item label="Seller" value="seller" />
              </Picker>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.handleSubmit()}>
              <View style={styles.buttonRegister}>
                <Text style={styles.buttonRegisterText}>Masuk</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonCancelContainer}>
              <Text
                onPress={() => this.props.navigation.navigate('Register')}
                style={styles.buttonCancelText}>
                Batalkan
              </Text>
            </View>
          </View>
          <View style={styles.conditionView}>
            <Text style={styles.conditionText}>
              Dengan masuk dan mendaftar,Anda menyetujui
              <Text style={styles.conditionText2}>
                {' '}
                Syarat Penggunaan
              </Text> dan{' '}
              <Text style={styles.conditionText2}>Kebijakan Privasi</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginData: state.getLogin.loginData,
    loginPhoneData: state.getLoginPhone.loginPhoneData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getLogin,
      getLoginPhone,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
