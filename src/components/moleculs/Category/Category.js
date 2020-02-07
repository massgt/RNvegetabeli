import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import logo7 from '../../../assets/icon/apple-red.png';
import logo1 from '../../../assets/icon/broccol-red.png';
import logo5 from '../../../assets/icon/egg-red.png';
import logo6 from '../../../assets/icon/milk-red.png';
import logo3 from '../../../assets/icon/onions-red.png';
import logo2 from '../../../assets/icon/potato-red.png';
import logo4 from '../../../assets/icon/shrimp-red.png';

class Category extends Component {
 

  // onPress = (onPress) => {
  //   console.log("PRESS", onPress
  // )
  //   this.props.navigation.navigate('ListCategory')
  // }
  render() {
    console.log("LOG", this.props)
    return (
      <>
        <View style={styles.categoryTop}>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo1} style={styles.iconStyle}  />
              <Text style={styles.textMid}>Sayuran</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo2} style={styles.iconStyle} />
              <Text style={styles.textMid}>Lauk Pauk</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo3} style={styles.iconStyle} />
              <Text style={styles.textMid}>Bumbu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo4} style={styles.iconStyle} />
              <Text style={styles.textMid}>Seafood</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo5} style={styles.iconStyle} />
              <Text style={styles.textMid}>Sembako</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryBot}>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo6} style={styles.iconStyle} />
              <Text style={styles.textMid}>Jajanan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity onPress={this.props.onPres}>
              <Image source={logo7} style={styles.iconStyle} />
              <Text style={styles.textMid}>Buah</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  iconStyle: {
    width: 45,
    height: 45,
    marginBottom: 8,
  },
  categoryTop: {
    flexDirection: 'row',
    marginTop: 12,
  },
  categoryBot: {
    flexDirection: 'row',
    marginTop: 24,
  },
  card1: {
    backgroundColor: '#FFF1ED',
    alignItems: 'center',
    height: 50,
    width: 53,
    borderRadius: 10,
    elevation: 2.5,
    marginHorizontal: '3.2%',
    marginTop:5
  },
  cardMid: {
    marginLeft: '7%',
  },
  textMid: {
    fontSize: 10.5,
    fontFamily: 'AirbnbCerealLight',
    fontWeight: '700',
    textAlign: 'center',
    color: '#A0A0A0',
  },
});
