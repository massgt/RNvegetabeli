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
  },
  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingLeft: 16,
  },
  headerUser: {
    flexDirection: 'row',
    height: 90,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 5,
  },
  headIcon: {
    marginLeft: 14,
    justifyContent: 'center',
  },
  textUser: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  nameUser: {
    fontSize: 17,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  emailUser: {
    fontSize: 14,
  },
  containerFollowUs: {
    flexDirection: 'column',
    height: 122,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 4,
  },
  textFollow: {
    fontSize: 17,
    marginTop: 18,
    marginBottom: 10,
    marginLeft: 14,
    fontWeight: 'bold',
  },
  containerFacebook: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    paddingHorizontal: 14,
  },
  touchableFollow: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    width: '100%',
    // height: 44,
    borderRadius: 8,
    alignItems: 'center',
  },
  line: {
    width: 1, 
    height: 30, 
    backgroundColor: 'white'
  },
  textFacebook: {
    color: 'white', 
    fontSize: 17, 
    padding: 50
  },
  containerInfo: {
    flexDirection: 'column',
    backgroundColor: 'white',
    elevation: 3,
    marginTop: 5,
    paddingTop: 4,
    paddingHorizontal: 14,
  },
  touchableInfo: {
    height: 46,
    width: '100%',
  },
  headInfo: {
    flexDirection: 'row',
    height: 46,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
    justifyContent: 'space-between',
  },
  titleApp: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 52,
    elevation: 3,
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  textSyarat: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#88898B',
  },
});
