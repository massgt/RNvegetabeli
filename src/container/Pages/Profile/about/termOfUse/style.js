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
    topTitle: {
        marginTop: 5, 
        marginHorizontal: 5
    },
    textMain: {
        fontSize: 14, 
        marginHorizontal: '5%', 
        paddingTop: '4%'
    },
    subTitle: {
        fontSize: 15, 
        fontWeight: 'bold', 
        marginTop: '4%'
    },
    subTextMain: {
        fontSize: 14, 
        marginHorizontal: '5%', 
        paddingTop: '3%'
    }
})