import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Container
  container: {flex: 1, backgroundColor: 'white'},
  //Navbar
  navbarContainer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    elevation: 3,
  },
  navbarTextView: {marginLeft: '8%'},
  navbarText: {fontSize: 18, fontWeight: 'bold'},

  //InputCode
  inputCodeContainer: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    alignItems: 'center',
  },
  inputCodeView: {width: '100%', alignItems: 'center', marginBottom: 16},
  inputCodeTextInfo: {fontSize: 16, marginBottom: 8, letterSpacing: 0.3},
  inputCodeTextInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
    borderRadius: 10,
    padding: 0,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
    elevation: 1,
  },
  buttonSendCode: {
    backgroundColor: '#F15B5D',
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    marginBottom: 8,
  },
  buttonSendCodeText: {fontSize: 18, color: 'white', letterSpacing: 1},
  buttonCancelCode: {fontSize: 18, color: 'gray'},

  //Home Icon
  homeIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: 'white',
    height: '30%',
  },
  homeTopIconView: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  homeIcon: {
    marginBottom: 10,
    backgroundColor: 'rgba(241, 91, 93,0.7)',
    width: 85,
    height: 85,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  homeIconLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  homeIconText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
