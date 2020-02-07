import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: '5%',
    height: '10%',
    elevation: 3,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '10%',
  },
  editProfilButton: {
    flexDirection: 'row',
    width: '100%',
    height: 35,
    paddingHorizontal: 14,
    paddingLeft: 140,
    paddingTop: 10,
  },
  touchableEdit: {
    backgroundColor: 'grey',
    borderRadius: 100,
    alignItems: 'center',
  },
  textEdit: {
    color: 'white',
    fontSize: 15,
  },
  editButton: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingHorizontal: 14,
    paddingLeft: 130,
    paddingTop: 10,
  },
  touchEdit: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    width: '50%',
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 19,
  },
  textEditProfile: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 17,
  },
});
