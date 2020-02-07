import { StyleSheet } from 'react-native';

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
  minButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEdit: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4,
  },
  plusButton: {
    flexDirection: 'row',
    backgroundColor: '#FF5063',
    width: 25,
    height: 25,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //screen tanpa transaksi
  content: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
    // paddingHorizontal: 18
  },
  img: {
    width: 200,
    height: 200,
  },
  textTop: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  textBot: {
    fontSize: 16,
  }


});