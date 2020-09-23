
import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import Torch from 'react-native-torch';
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTorchOn: false,
    };
  }
  _handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }

  render() {
    let imageUri;
    if (this.state.isTorchOn){
      imageUri = require("./assets/image/ON.png");
    }else{
      imageUri = require("./assets/image/OFF.png");
    }

    return (

        <View style={styles.container}>
          <TouchableHighlight  onPress={this._handlePress.bind(this)}>
            <Image
                source={imageUri}
                style={{width:"100%"}}
            >
            </Image>
          </TouchableHighlight>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1
  }
});
