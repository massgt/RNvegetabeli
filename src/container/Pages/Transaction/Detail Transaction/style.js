import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'white', 
      paddingLeft: '5%', 
      height: '10%', 
      elevation: 3
  },
  textHeader: {
      fontSize: 17,  
      fontWeight: 'bold', 
      alignSelf: 'center', 
      marginLeft: '10%'
  },
  cardDate: {
    flexDirection: "column", 
    height: 95, 
    backgroundColor: 'white', 
    elevation: 3, 
    marginTop: 5, 
    paddingHorizontal: 16
  },
  subCardCode: {
    flexDirection: 'row', 
    height: '40%', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderColor: '#EFEAEA'
  },
  textCode: {
    fontSize: 14, 
    color: '#737375'
  },
  codeShop: {
    paddingLeft: 3, 
    alignSelf: 'center'
  },
  textStatus: {
    fontSize: 14, 
    color: '#737375'
  },
  valueStatus: {
    fontSize: 14, 
    color: '#31C026'
  },
  subCardDate: {
    flexDirection: 'row', 
    height: '60%', 
    alignItems: 'center'
  },
  textOrderDate: {
    fontSize: 13, 
    paddingLeft: 5,
    color: '#737375'
  },
  valueNameMarket: {
    fontSize: 13, 
    paddingLeft: 5,
  },
  valueAddress: {
    fontSize: 13, 
    paddingLeft: 5,
    paddingLeft: 10
  },
  nameItem: {
    fontSize: 13,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  priceItem: {
    fontSize: 13,
    color: '#737375'
  }


});