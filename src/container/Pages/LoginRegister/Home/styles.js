import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 30,
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  navbarTextView: {
    marginLeft: 30,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: '700',
  },
  //Home Icon
  homeIconContainer: {
    alignItems: 'center',
  },
  homeTopIconView: {
    marginBottom: 15,
  },
  homeIcon: {
    marginBottom: 5,
    backgroundColor: 'rgba(241, 91, 93,0.7)',
    width: 85,
    height: 85,
    borderRadius: 60,
    borderWidth: 13,
    borderColor: 'pink',
    justifyContent: 'center',
  },
  homeIconLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  homeIconText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  homeDescriptionView: {
    alignItems: 'center',
    width: 300,
  },
  homeDescriptionText: {
    textAlign: 'center',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  //Sign in Option
  signInOptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 323,
  },
  signInGoogleView: {
    marginBottom: 18,
  },
  signInGoogleViewButton: {
    flexDirection: 'row',
    backgroundColor: '#4286F5',
    height: 45,
    width: 240,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 2,
    paddingRight: 18,
  },
  signInGoogleImageView: {
    backgroundColor: 'white',
    height: 27,
    width: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
  },
  signInGoogleImage: {
    height: 15,
    width: 15,
  },
  signInGoogleText: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 2,
  },
  signInEmailViewButton: {
    flexDirection: 'row',
    backgroundColor: '#F15B5D',
    height: 45,
    width: 240,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 2,
    paddingRight: 20,
  },
  signInEmailImageView: {
    backgroundColor: 'white',
    height: 27,
    width: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    borderRadius: 2,
  },
  signInEmailText: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 2,
  },
  conditionView: {height: 100, width: 300, alignSelf: 'center'},
  conditionText: {textAlign: 'center', color: 'gray', fontSize: 13,letterSpacing:0.3},
  conditionText2: {color: 'black', fontWeight: 'bold'},
});
