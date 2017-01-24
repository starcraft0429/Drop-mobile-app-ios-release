import React, { Component } from 'react';
import  { 
          StyleSheet, 
          Text, 
          View, 
          Button, 
          Alert, 
          Dimensions, 
          TextInput, 
          MapView,
          TouchableOpacity
        } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { InputGroup, Input, Icon } from 'native-base';
import myTheme from './mytheme.js';

var DeviceWidth = Dimensions.get('window').width;
var DeviceHeight = Dimensions.get('window').height;
var styles = StyleSheet.create({
  demoView: {
    alignSelf: 'stretch', 
    borderRadius: 3, 
    overflow: 'hidden',
    height: DeviceHeight*0.3+38,
  },
  map: {
    height: DeviceHeight*0.3,
    alignSelf: 'stretch',
  },
  textInput:{
    backgroundColor: '#ffffff',
    height: 38,
    alignSelf: 'stretch',
    marginBottom: DeviceHeight*0.015,
  },
});
class GPlacesDemo extends Component {
  constructor(props) {
    super(props);
    this.openSearchModal = this.openSearchModal.bind(this);
    this.state =  {
                    address:'',
                    lat: 54.9201941,
                    long: 37.424409,
                  };
  }     
  openSearchModal() {
    var self = this;
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => { 
      self.setState({address: place.address});
      self.setState({lat: place.latitude});
      self.setState({long: place.longitude});
        console.log(place);   
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    const { region } = this.props;
    return (
        <View style={styles.demoView}>
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
          </MapView>
          <InputGroup style={styles.textInput} >
            <Icon name='ios-home-outline' style={{color:'#2196f3', fontSize: 27}}/>
            <Input 
              theme={myTheme} 
              onFocus = {() => this.openSearchModal()}
              onChange = {() => this.openSearchModal()}
              placeholder="Your Address"
              underlineColorAndroid='transparent'
              value={this.state.address}
            />
          </InputGroup>
          
        </View>
    );
  }
}
export default GPlacesDemo;