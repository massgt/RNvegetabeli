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
})