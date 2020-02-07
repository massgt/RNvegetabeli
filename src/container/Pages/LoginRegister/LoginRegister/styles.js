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
    marginBottom: 30,
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
    borderWidth: 10,
    borderColor: 'pink',
    justifyContent: 'center',
    alignSelf:'center'
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
  //Input

  //Input Email
  inputContainer: {height: 130, paddingHorizontal: 15},
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
  inputLogoEmail: {position: 'absolute', top: 23, left: 5},
  
  //Input Email Invalid
    inputTextInputInvalid: {
      borderColor: 'white',
      borderBottomColor: 'rgb(241, 91, 93)',
      borderWidth: 1,
      padding: 0,
      paddingLeft: 35,
    },
    inputLogoEmailInvalid: { position: 'absolute', top: 23, right:1 },

  //Input Password
  inputPassword: {height: 50},
  inputPasswordIcon: {position: 'absolute', top: 23, left: 7},

  //Question Text
  questionTextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  questionTextView: {flexDirection: 'row', alignItems: 'center'},
  questionTextColor: {
    color: 'rgb(241, 91, 93)',
  },

  //Picker
  picker: {
    height: 50,
    width: 110,
    color: 'gray',
  },

  //Button
  buttonContainer: {
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: 'rgb(241, 91, 93)',
    height: 37,
    width: 225,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 5,
  },
  buttonRegisterText: {color: 'white', fontSize: 18, letterSpacing: 0.5},
  buttonCancelContainer: {
    height: 37,
    width: 225,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancelText: {fontSize: 16, color: 'gray', letterSpacing: 0.3},

  //Forgot Password
  forgotView: {
    flexDirection:'row'
  },
  forgotText: {
    color:'gray',
    fontSize:12,
    letterSpacing:0.2
  },

  //Text Condition
  conditionView: {
    height: 125,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  conditionText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  conditionText2: {color: 'black', fontWeight: 'bold'},
});
