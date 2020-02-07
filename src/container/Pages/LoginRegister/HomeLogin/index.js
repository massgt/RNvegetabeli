import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleLogo from '../../../../assets/image/google.png'
import styles from "./styles"
import axios from 'axios'

class LoginRegisterHome extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Masuk Akun</Text>
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon style={styles.homeIconLogo} name="user" size={40} color="white"/>
            </View>
            <Text style={styles.homeIconText}>Masuk</Text>
          </View>
          <View style={styles.homeDescriptionView}>
            <Text style={styles.homeDescriptionText}>Nikmati kepuasan dan kenyamanan kualitas
              belanja kebutuhan sehari-hari dengan Vegetabeli
            </Text>
          </View>
        </View>
        <View style={styles.signInOptionContainer}>
          <View style={styles.signInGoogleView}>
            <TouchableOpacity>
              <View style={styles.signInGoogleViewButton} >
                <View style={styles.signInGoogleImageView}>
                  <Image source={GoogleLogo}
                    style={styles.signInGoogleImage} />
                </View>
                <Text style={styles.signInGoogleText}>Sign in with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <View style={styles.signInEmailViewButton}>
                <View style={styles.signInEmailImageView}>
                  <Icon name="envelope" color="#F15B5D" size={18}/>
                </View>
                <Text style={styles.signInEmailText}>Daftar Lewat Email</Text>
              </View>
            </TouchableOpacity>
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

export default LoginRegisterHome