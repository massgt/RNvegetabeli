import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ProductBestSeller extends Component {
  render() {
    return (
      <>
        {this.props.product.map(data => {
          return (
            <View style={styles.listProduk}>
              <View style={styles.produkStyle}>
                <View style={styles.cardStyle}></View>
                <View style={styles.marginLeft}>
                  <Text style={styles.fontBestSell}>{data.name}</Text>
                  <Text style={styles.fontSeeAll}>Rp. {data.price}</Text>
                </View>
              </View>
              <View style={styles.produkStyle2}>
                
                {this.props.total[data.name] == 0 ? 
                  <Button
                  onPress={() =>this.props.handlePlus(data.name)}
                    // onPress={() => this.test(data.name,this.props.total[data.name])}
                    title="Tambahkan"
                    titleStyle={styles.titleBtn}
                    buttonStyle={styles.btnColor}
                    containerStyle={styles.marginBtn}
                  /> : <View style={styles.btnHandler}>
                    <View style={styles.btnHandlerView}>
                      <TouchableOpacity style={styles.btnOpacity} onPress={() =>this.props.handleMinus(data.name)}>
                        <Text style={styles.btnHandlerText}>-</Text>
                      </TouchableOpacity>
                <Text>{this.props.total[data.name]}</Text>
                      <TouchableOpacity style={styles.btnOpacity} onPress={() => this.props.handlePlus(data.name)}>
                        <Text style={styles.btnHandlerText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  }
                {/* <View style={styles.btnHandler}>
                  <View style={styles.btnHandlerView}>
                    <TouchableOpacity style={styles.btnOpacity}>
                      <Text style={styles.btnHandlerText}>-</Text>
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity style={styles.btnOpacity}>
                      <Text style={styles.btnHandlerText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View> */}
              </View>
            </View>
          )
        })}
      </>
    );
  }
}

export default ProductBestSeller;

const styles = StyleSheet.create({
  btnHandler: { width: 60 },
  btnHandlerView: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  btnOpacity: {
    backgroundColor: 'red', height: 22, width: 22,
    alignItems: 'center'
  },
  btnHandlerText: { color: 'white' },
  btnColor: {
    backgroundColor: '#F15B5D',
    width: 90,
    height: 30,
    borderRadius: 6,
    elevation: 2,
  },
  marginBtn: {
    marginBottom: 10,
  },
  titleBtn: {
    fontSize: 12,
    textAlign: 'center',
  },
  fontBestSell: {
    fontSize: 16,
    fontFamily: 'AirbnbCerealBold',
    marginLeft: '5%',
  },
  fontSeeAll: {
    color: '#F15B5D',
    fontSize: 13,
    marginLeft: '5%',
    fontFamily: 'AirbnbCerealLight',
  },
  listProduk: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 12,
    marginHorizontal: '2%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  cardStyle: {
    height: 100,
    width: 100,
    alignItems: 'stretch',
    borderRadius: 8,
    elevation: 2.5,
    backgroundColor: 'white',
    marginLeft: '2%',
    marginBottom: 10,
  },
  produkStyle: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  produkStyle1: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: '35%',
    marginTop: '5%',
  },
  produkStyle2: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: '75%',
  },
  marginLeft: {
    marginLeft: 10,
  },
});
