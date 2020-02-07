import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

class Snacks extends Component {
  render() {
    return (
      <>
      <View style={styles.container}>
        <View style={styles.listProduk}>
          <View style={styles.produkStyle}>
            <View style={styles.cardStyle}></View>
            <View>
              <Text style={styles.fontBestSell}>
                ndkjakjadbknkjfnjknsjknjfnknkn
              </Text>
              <Text style={styles.fontSeeAll}>
                fknkfsnklnlkfkjfkjfkjakjfhkjfkjbkdabnwn
              </Text>
            </View>
          </View>
          <View style={styles.produkStyle2}>
            <Button
              title="Tambahkan"
              titleStyle={styles.titleBtn}
              buttonStyle={styles.btnColor}
              containerStyle={styles.marginBtn}
            />
          </View>
        </View>
        <View style={styles.listProduk}>
          <View style={styles.produkStyle}>
            <View style={styles.cardStyle}></View>
            <View>
              <Text style={styles.fontBestSell}>
                ndkjakjadbknkjfnjknsjknjfnknkn
              </Text>
              <Text style={styles.fontSeeAll}>
                fknkfsnklnlkfkjfkjfkjakjfhkjfkjbkdabnwn
              </Text>
            </View>
          </View>
          <View style={styles.produkStyle2}>
            <Button
              title="Tambahkan"
              titleStyle={styles.titleBtn}
              buttonStyle={styles.btnColor}
              containerStyle={styles.marginBtn}
            />
          </View>
        </View>
        <View style={styles.listProduk}>
          <View style={styles.produkStyle}>
            <View style={styles.cardStyle}></View>
            <View>
              <Text style={styles.fontBestSell}>
                ndkjakjadbknkjfnjknsjknjfnknkn
              </Text>
              <Text style={styles.fontSeeAll}>
                fknkfsnklnlkfkjfkjfkjakjfhkjfkjbkdabnwn
              </Text>
            </View>
          </View>
          <View style={styles.produkStyle2}>
            <Button
              title="Tambahkan"
              titleStyle={styles.titleBtn}
              buttonStyle={styles.btnColor}
              containerStyle={styles.marginBtn}
            />
          </View>
        </View>
        <View style={styles.listProduk}>
          <View style={styles.produkStyle}>
            <View style={styles.cardStyle}></View>
            <View>
              <Text style={styles.fontBestSell}>
                ndkjakjadbknkjfnjknsjknjfnknkn
              </Text>
              <Text style={styles.fontSeeAll}>
                fknkfsnklnlkfkjfkjfkjakjfhkjfkjbkdabnwn
              </Text>
            </View>
          </View>
          <View style={styles.produkStyle2}>
            <Button
              title="Tambahkan"
              titleStyle={styles.titleBtn}
              buttonStyle={styles.btnColor}
              containerStyle={styles.marginBtn}
            />
          </View>
        </View>
        </View>
      </>
    );
  }
}

export default Snacks;

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
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
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  fontSeeAll: {
    color: '#F15B5D',
    fontSize: 13,
    marginLeft: '5%',
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
});
