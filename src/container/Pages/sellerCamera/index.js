import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';

class sellerCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcImg: '',
      uri: '',
      fileName: '',
      //   loading: false,
    };
  }

  //   choosePicture = () => {
  //     const ImagePicker = require('react-native-image-picker');
  //     const options = {
  //       title: 'Pilih Gambar',
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //     };
  //     ImagePicker.showImagePicker(options, res => {
  //       console.log('Response = ', res);
  //       if (res.didCancel) {
  //         alert('Cancel image picker');
  //         console.log('User cancelled image picker');
  //       } else if (res.error) {
  //         alert('Error image picker');
  //         console.log('Image picker error: ', res.error);
  //       } else if (res.customButton) {
  //         alert('Tapped Custom Button');
  //         console.log('User tapped custom buttom: ', res.customButton);
  //       } else {
  //         console.log('FILENAME IMAGE= ', res.fileName);
  //         this.setState({
  //           srcImg: {uri: res.uri},
  //           uri: res.uri,
  //           fileName: res.fileName,
  //         });
  //       }
  //     });
  //   };

  //   uploadPicture = () => {
  //     console.log('starting upload');
  //     this.setState({loading: true});

  //     const data = new FormData();

  //     data.append('fileToUpload', {
  //       uri: this.state.uri,
  //       type: 'image/jpeg',
  //       name: this.state.fileName,
  //     });
  //     const url = 'http://18.208.177.116:5000/product/';
  //     axios
  //       .post(url, {
  //         headers: headers,
  //         body: data,
  //       })
  //       .then(res => res.json())
  //       .then(resJson => {
  //         console.log('RES JSON', resJson);
  //         this.setState({
  //           loading: false,
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.loading === true && (
          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.loading}
            onRequestClose={() => {
              alert('Modal has been closed');
            }}>
            <ActivityIndicator
              animating={true}
              style={styles.indicator}
              size="large"
            />
          </Modal>
        )} */}
        {/* <View style={styles.conPreview}>
          {this.state.srcImg != '' && (
            <Image source={this.state.srcImg} style={styles.uploadPicture} />
          )}
        </View> */}
        {/* <View> */}
        {/* <Button onPress={() => this.choosePicture()} title="Pilih Foto" /> */}
        {/* <Button onPress={() => this.uploadPicture()} title="Upload Foto" /> */}
        {/* </View> */}

        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            {/* <Text style={{fontSize: 14}}> SNAP </Text> */}
            <View
              style={{
                position: 'absolute',
                height: 50,
                width: 50,
                marginTop: 15,
                marginLeft: 15,
                borderRadius: 100,
                backgroundColor: '#fff',
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 360,
    padding: 15,
    height: 80,
    width: 80,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  conPreview: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPicture: {
    height: 400,
    width: 400,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
});
export default sellerCamera;
