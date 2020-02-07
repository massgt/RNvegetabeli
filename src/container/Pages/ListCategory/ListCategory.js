import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';
import {Tab, Tabs, ScrollableTab} from 'native-base';
import Vegetable from './Vegetables/Vegetable';
import Snacks from './Snacks/Snacks';
import Fish from './Fish/Fish'
import Fruit from './Fruit/Fruit'
import MainFood from './MainFood/MainFood'
import Seafood from './Seafood/Seafood'
import Seasoning from './Seasoning/Seasoning'

class ListCategory extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
  

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.btnBack}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Shop')}>
              <Icon name="chevron-left" size={40} color="#F15B5D" />
            </TouchableOpacity>
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
        <Tabs
          renderTabBar={() => (
            <ScrollableTab underlineStyle={{backgroundColor: 'skyblue'}} />
          )}>
          <Tab
            heading="SAYURAN"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Vegetable />
          </Tab>
          <Tab
            heading="LAUK PAUK"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Fish/>
          </Tab>
          <Tab
            heading="BUMBU"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Seasoning/>
          </Tab>
          <Tab
            heading="SEAFOOD"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Seafood/>
          </Tab>
          <Tab
            heading="SEMBAKO"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <MainFood/>
          </Tab>
          <Tab
            heading="JAJANAN"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Snacks/>
          </Tab>
          <Tab
            heading="BUAH"
            textStyle={styles.textCategory}
            activeTextStyle={styles.activeTextStyle}
            tabStyle={{backgroundColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}>
            <Fruit/>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default ListCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 10,
    height: 50,
    backgroundColor: 'white',
  },
  navbarTextView: {
    marginLeft: 30,
  },
  btnBack: {
    flexDirection: 'row',
    paddingLeft: 5,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  searchBar: {
    width: '85%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 45,
  },
  categoryName: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textCategory: {
    color: '#A0A0A0',
  },
  activeTextStyle: {
    color: '#87CAFE',
  },
  tabHeading: {
    color: '#87CAFE',
  },
});

// <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//   <View style={styles.categoryName}>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>SAYURAN</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>LAUK PAUK</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>BUMBU</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>SEAFOOD</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>SEMBAKO</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>JAJANAN</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.textCategory}>BUAH</Text>
//     </TouchableOpacity>
//   </View>
// </ScrollView>;
