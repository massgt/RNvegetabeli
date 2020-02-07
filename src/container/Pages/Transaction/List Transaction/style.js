import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 52,
    elevation: 3,
    justifyContent: 'space-between'
  },
  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingLeft: 16,
  },
  histButton: {
    alignSelf: 'center', 
    padding: 16
  },
//   containerIcon: {
//     flex: 1, 
//     height: '35%', 
//     alignItems: 'center', 
//     justifyContent: 'center',
//   },
//   containerText: {
//     flex: 1,
//     paddingHorizontal: 16, 
//     alignItems: 'center'
//   },
//   textFront: {
//     fontSize: 21, 
//     fontWeight: 'bold', 
//     textAlign: 'center'
//   },
//   textFronttwo: {
//     fontSize: 17,
//     textAlign: 'center', 
//     color: '#737375',
//     marginTop: 5
//   }

});