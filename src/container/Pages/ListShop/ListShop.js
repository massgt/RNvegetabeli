import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {Icon, SearchBar, Button} from 'react-native-elements';
import {bindActionCreators} from 'redux'
import { connect} from 'react-redux'
import {getAllMarket} from '../../../config/Redux/Actions/Choose Market/getAllMarket'
import AsyncStorage from '@react-native-community/async-storage'

class ListShop extends Component {
  state = {
    search: '',
    market: []
  };

  updateSearch = search => {
    this.setState({search});
  };

  handleSelectMarket = async (id_market) => {
    await this.props.navigation.push('Shop', {
      id_market:id_market
    })
    
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@accessToken')
    await this.props.getAllMarket(token)
    console.log('door step', this.props.marketData) 
    await this.setState({
      market: this.props.marketData.data.data
    })
    console.log('on my own',this.state.market)
  }

  render() {
    const {search} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <View style={styles.btnBack}>
          <TouchableOpacity
            onPress={() => this.props.onPress}>
            <Icon name="chevron-left" size={40} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Pilih Pasar</Text>
          </View>
          </View>
          <View style={styles.search}>
          <SearchBar
            inputStyle={{fontSize: 14}}
            containerStyle={styles.searchBar}
            onChangeText={this.updateSearch}
            value={search}
            platform="android"
            placeholder="Cari sayur, bumbu dapur, lauk pauk"
          />
          </View>
        </View>
        <ScrollView>
          {this.state.market.map(data => {
            return (
              <View style={styles.listProduk}>
                <View style={styles.produkStyle}>
                  <View style={styles.cardStyle}>
                    <Image source={{ uri: `http://192.168.6.169:5000/uploads/market/${data.photo}`}} height={100} width={100}/>
                  </View>
                  <View>
                    <Text style={styles.fontBestSell}>
                      {data.name}
              </Text>
                    <Text style={styles.fontSeeAll}>
                      {data.location}
              </Text>
                  </View>
                </View>
                <View style={styles.produkStyle2}>
                  <TouchableOpacity>
                    <Button
                      title="Tambahkan"
                      titleStyle={styles.titleBtn}
                      buttonStyle={styles.btnColor}
                      containerStyle={styles.marginBtn}
                      onPress={() => this.handleSelectMarket(data.id_market)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </ScrollView>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    marketData: state.getAllMarket.marketData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllMarket
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListShop);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 15,
    height: 100,
    backgroundColor: 'white',
    elevation: 3,
  },
  navbarTextView: {
    marginLeft: 30,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10
  },
  btnBack: {
      flexDirection: 'row',
      paddingLeft: 5,
  },
  searchBar: {
    width: '95%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: 8,
    borderRadius: 45,
  },
  search: {
    justifyContent: 'flex-start'
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
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',

  },
  cardStyle: {
    height: 110,
    width: 95,
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
    marginTop: 10
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
