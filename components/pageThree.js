import React from 'react';
import  { 
          StyleSheet, 
          Text, 
          View, 
          Button, 
          Image, 
          Dimensions, 
          TextInput, 
          TouchableOpacity
        } from 'react-native';
import { InputGroup, Input, Icon } from 'native-base';
import commonStyle from './style.js';
import myTheme from './mytheme.js';
import MapView from './map.js';

class PageThree extends React.Component {

  render() {
    return (
      <View style={commonStyle.pages}>
        <View style={commonStyle.imageView}>
          <Image style={commonStyle.image}
            source={require('../images/Address_icon.png')}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={[commonStyle.text, styles.title]}>Your contact details</Text>
        </View>
        <View style={styles.inputView}>
          <InputGroup style={styles.textInput} >
            <Icon name='ios-person-outline' style={{color:'#2196f3', fontSize: 27}}/>
            <Input theme={myTheme} placeholder='Your names' />
          </InputGroup>
          <InputGroup style={styles.textInput} >
            <Icon name='ios-phone-portrait-outline' style={{color:'#2196f3', fontSize: 27}}/>
            <Input theme={myTheme} placeholder='Your mobile number' />
          </InputGroup>
          
        </View>
        <View style={styles.mapView}>
          <MapView/>
        </View>
        <Text onPress={this.props.nextPage} 
              style={commonStyle.Button}
        >Done</Text>
      </View>
    );
  }
}
export default PageThree

var DeviceWidth = Dimensions.get('window').width;
var DeviceHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({    
  titleView:{
    marginTop: DeviceHeight*0.02,
    height: DeviceHeight*0.08,
  },
  title:{
    fontSize: 33,
    fontFamily: 'Lato-Regular',
  },
  inputView:{
    height: DeviceHeight*0.15,
    alignItems: 'center',
  },
  textInput:{
    backgroundColor: '#ffffff',
    borderRadius: 3,
    width: DeviceWidth*0.8,
    height: 38,
    marginBottom: DeviceHeight*0.015,
  },
  mapView: {
    width: DeviceWidth*0.8,
    alignItems: 'center',
  }
});