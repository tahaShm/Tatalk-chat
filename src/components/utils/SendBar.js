import React, { Component } from 'react';
import { RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { Container, Header, Left, Icon, Body, Title, Content, Text, Right, Item, Input, Form, Label, View, CheckBox, Footer, ActionSheet, Root } from 'native-base';
import { moderateScale, scale } from 'react-native-size-matters';
import { TouchableOpacity, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';


var W = Dimensions.get('window').width;
var H = Dimensions.get('window').height;
const lineSize = 20;
class SendBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputHeight: 0,
      numOfLines : 2,
      trueNumberOfLines : 2,
      lineHeight: 20,
      message : "",
      buttons: ["Pick image from gallery", "Cancel"],
      cancelIndex: 1,
      image : '',
      imageBase64 : '',
      showImageDialog : false
    }

  }
  renderNewLine(height) {
    if (this.props.message == "") {
      this.setState({numOfLines: 2, trueNumberOfLines: 2, textInputHeight: 40})
    }
    else {
      if (height >= this.state.textInputHeight){
        console.log("here")
        this.setState({numOfLines: this.state.numOfLines < 5 ?  this.state.numOfLines + 1 : this.state.numOfLines})
        this.setState({trueNumberOfLines: this.state.trueNumberOfLines + 1})
      }
      else if (height < this.state.textInputHeight){
        console.log("here2")
        this.setState({trueNumberOfLines: this.state.trueNumberOfLines - 1})
        this.setState({numOfLines: this.state.trueNumberOfLines > 5 ? this.state.numOfLines : this.state.numOfLines - 1})
      }
      console.log("new height ->", height, "    old height ->", this.state.textInputHeight)
      console.log("true lines ->", this.state.trueNumberOfLines, "    lines ->", this.state.numOfLines)
      this.setState({textInputHeight : height})
    }
    
  }
  _pickImage = async () => {

    ImagePicker.openPicker({
        width: 1000,
        height: 1000,
        cropping: true,
        avoidEmptySpaceAroundImage: false,
        includeBase64: true,
    }).then(image => {
        this.setState({
            image: image.path,
            imageBase64: image.data,
            showImageDialog: true
        });
        this.props.tester(image)
    });
  };
  renderClicked(index){
    if (index == 0) {
      this._pickImage()
    }
  }
  chooseImage(){
      ActionSheet.show(
        {
            options: this.state.buttons,
            cancelButtonIndex: this.state.cancelIndex,
            title: "Send Image :)"
        },
        buttonIndex => {
            this.setState({ clicked: this.state.buttons[buttonIndex] });
            this.renderClicked(buttonIndex)
        }
      )
    
  }
  renderSendIcon(){
    if (this.props.message.length > 0)
      return(
        <TouchableOpacity>
          <TouchableOpacity style = {styles.touchStyle} onPress = {this.props.send}>
            <Icon name = "arrowup" type = "AntDesign" style = {styles.iconStyle} />
          </TouchableOpacity>
        </TouchableOpacity>
      )
    else
      return (
        <View style = {styles.emptySend} onPress = {this.props.send}>
          <Icon name = "arrowup" type = "AntDesign" style = {styles.iconStyle} />
        </View>
      )
        
  }
  render() {

    return (
        <Footer style = {[styles.footerStyle, {height: this.state.numOfLines * this.state.lineHeight + 20}]}>
          <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center', height: "70%"}}>
              <Root>
                <TouchableOpacity style = {styles.touchStyle} onPress = {() => 
                  ActionSheet.show(
                    {
                        options: this.state.buttons,
                        cancelButtonIndex: this.state.cancelIndex,
                        title: "Send Image"
                    },
                    buttonIndex => {
                        this.setState({ clicked: this.state.buttons[buttonIndex] });
                        this.renderClicked(buttonIndex)
                    }
                  ) 
                }>
                  <Icon name = "camera" type = "FontAwesome" style = {styles.iconStyle2} />
                </TouchableOpacity>
              </Root>
            </View>
            <View style = {[styles.inputStyle, {height: this.state.numOfLines * this.state.lineHeight + 5}]}>
              <TextInput style = {{color : styles.text1}}
                
                placeholder='Message'
                placeholderTextColor= {styles.separator}
                value = {this.props.message}
                selectionColor = {styles.text1}
                multiline = {true}
                onContentSizeChange = {(e) => this.renderNewLine(e.nativeEvent.contentSize.height)}
                onChangeText = {this.props.onChangeText}
              />
            </View>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'flex-start', height: "70%"}}>
              {this.renderSendIcon()}
            </View>
          </View>
        </Footer>
      
  )}
}

let styles = RkStyleSheet.create(theme => ({
  status: theme.status,
  text1: theme.text1,
  separator: theme.separator,
  footerStyle: {
    paddingTop: 4,
    paddingBottom: 4,
    width: "100%",
    backgroundColor: theme.primary2,
    borderTopColor: theme.separator,
    borderTopWidth: 0.35,
  },
  touchStyle:{
    aspectRatio: 1,
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: theme.accent1,
  },
  emptySend: {
    aspectRatio: 1,
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: theme.separator,
  },
  iconStyle:{
    fontSize: moderateScale(20),
    color: theme.primary1,
  },
  iconStyle2:{
    fontSize: moderateScale(15),
    color: theme.primary1,
  },
  inputStyle: {
    flex: 5,
    borderColor: theme.separator,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: theme.textInput,
    justifyContent: 'center',
  },
  textInputStyle : {
    color: "red",
    fontSize: lineSize,
    
  }
}))


export { SendBar }