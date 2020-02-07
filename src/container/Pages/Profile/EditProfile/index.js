import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconUser from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getUserBuyer } from '../../../../config/Redux/Actions/User/CrudUser/getUserBuyer'
import { patchUserBuyer } from "../../../../config/Redux/Actions/User/CrudUser/patchUserBuyer";
import AsyncStorage from '@react-native-community/async-storage';



class editProfile extends Component {
    state = {
        data: [],
        name: '',
        email: '',
        phone: '',
        photo: '',
        defaultName: '',
        defaultEmail: '',
        defaultPhone: '',
        defaultPhoto: ''
    }

    getProfile = async () => {
        const id_user = JSON.parse(await AsyncStorage.getItem('@id_user'))
        const token = JSON.parse(await AsyncStorage.getItem('@accessToken'))

        await this.props.getUserBuyer(id_user, token)
        console.log('response data', this.props.dataUser)
        this.setState({
            ...this.state,
            data: this.props.dataUser.data[0]
        })
    }

    async componentDidMount() {
        // const token = JSON.parse(await AsyncStorage.getItem('@accessToken'))
        // console.log('sultan', token)
        await this.getProfile()
        console.log('tes', this.state.data)
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25} 
                        onPress={() => this.props.navigation.navigate('Profile')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Edit Profil
                    </Text>
                </View>
                <View style={{borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                    <View style={{alignItems: 'center', paddingTop: 25}}>
                        <IconUser name='user-circle' size={70} color='#EE4F6F'/>
                    </View>
                    <View style={styles.editProfilButton}>
                        <TouchableOpacity style={styles.touchableEdit}>
                            <Text style={styles.textEdit}>
                                Edit Foto
                            </Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View  style={{alignContent: 'center', paddingHorizontal: 40}}>
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 20}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="Nama"
                        inputStyle={{fontSize: 12}}
                    />
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 3}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="No. Telepon"
                        inputStyle={{fontSize: 12}}
                    />
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 3}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="E-mail"
                        inputStyle={{fontSize: 12}}
                    />
                </View>
                <View style={styles.editButton}>
                    <TouchableOpacity style={styles.touchEdit} 
                     onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.textEditProfile}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataUser : state.getUserBuyer.dataUser
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUserBuyer
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(editProfile);