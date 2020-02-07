import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar: {
    marginBottom: 25,
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
    marginBottom: 10,
  },
  homeTopIconView: {
    marginBottom: 15,
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
  //Input EMail
  inputContainer: {height: 40, paddingHorizontal: 15},
  inputView1: {height: 70},
  inputView2: {position: 'relative'},
  inputText: {color: 'gray'},
  inputTextInput: {
    borderColor: 'white',
    borderBottomColor: 'gray',
    borderWidth: 1,
    padding: 0,
    paddingLeft: 35,
  },
  inputLogoEmail: {position: 'absolute', top: 5, left: 5},

  //Text Information
  textInformationView: {alignItems: 'center', marginBottom: 25,marginTop:40},
  textInformationText: {
    textAlign: 'center',
    fontSize: 14,
    width: 300,
    letterSpacing: 0.5,
  },
  buttonResetView: {
    backgroundColor: 'rgb(241, 91, 93)',
    width: 230,
    height: 38,
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonResetText: {color: 'white', fontSize: 16, letterSpacing: 1.5},
  buttonCancelView: {alignItems: 'center', justifyContent: 'center'},
  buttonCancelText: {fontSize: 16, color: 'gray', letterSpacing: 0.2},

  //Conditon
  conditionView: {height: 165, alignSelf: 'center', justifyContent: 'flex-end'},
  conditionText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  conditionText2: {color: 'black', fontWeight: 'bold'},
  //Picker
  picker: {
    height: 50,
    width: 110,
    color: 'gray',
  },
});
