import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Content } from 'native-base';
import {ToolBar} from './utils/ToolBar'
import {SendBar} from './utils/SendBar'
import {ChatArea} from './utils/ChatArea'
import { RkStyleSheet } from 'react-native-ui-kitten';

class ChatScreen extends Component{
  constructor(){
    super();
    this.state = {
      currentMessage : "",
      allMessages : [],
      goDown: false,
      currentImageUrl: "",
      backImageIndex: 1,
    }
  }
  componentWillMount(){
    if (typeof this.props.navigation.getParam("messages") != 'undefined')
      this.setState({allMessages: this.props.navigation.getParam("messages")})
    if (typeof this.props.navigation.getParam("imageIndex") != 'undefined' && this.props.navigation.getParam("imageIndex") != null )
    this.setState({backImageIndex: this.props.navigation.getParam("imageIndex")})
  }
  changeMessage = (text) => {
    this.setState({currentMessage: text})
  }
  send = () => {
    this.setState({currentImageUrl: null})
    var tempMessages = this.state.allMessages
    var tempMessage = this.state.currentMessage
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    tempMessages.push({message: this.state.currentMessage, image: "", type: "text", hours: hours, min: min})
    this.setState({allMessages: tempMessages})
    this.setState({currentMessage: ""})
    setTimeout(() => { this.renderReply(tempMessage, hours, min, true) }, 2000);
  }
  renderReply = (text, hours, min, isText) => {
    var AmPm = "am"
    if (hours > 12){
      hours = hours % 12
      AmPm = "pm"
    }
    if (isText == true){
      var reply = `you sent me a text message at ${hours}:${min} ${AmPm}`
      var tempMessages = this.state.allMessages
    }
    else if (isText == false){
      var reply = `you sent me an image at ${hours}:${min} ${AmPm}`
      var tempMessages = this.state.allMessages
    }
    tempMessages.push({message: reply, image: "", type: "reply", hours: hours, min: min})
    this.setState({allMessages: tempMessages})
  }
  goDown = () => {
    this.setState({goDown: true})
  }
  downDone = () => {
    this.setState({goDown: false})
  }
  tester = (img) => {
    this.setState({currentImageUrl: img.path})
    var tempMessages = this.state.allMessages
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    tempMessages.push({message: "", image: this.state.currentImageUrl, type: "image", hours: hours, min: min})
    this.setState({allMessages: tempMessages})
    this.setState({currentImageUrl: ""})
    setTimeout(() => { this.renderReply("", hours, min, false) }, 2000);
  }
  render() {
    return (
      <Container style = {styles.containerStyle} >
        <ToolBar down = {this.goDown} navigation = {this.props.navigation} messages = {this.state.allMessages}/>
        <ChatArea messages = {this.state.allMessages} down = {this.state.goDown} downDone = {this.downDone} imageIndex = {this.state.backImageIndex}/>
        <SendBar message = {this.state.currentMessage} onChangeText = {this.changeMessage} send = {this.send} tester = {this.tester}/>
      </Container>
    );
  }
}
export {ChatScreen}
const styles = RkStyleSheet.create(theme => ({
  containerStyle: {
    backgroundColor: theme.primary1
  }
})) ;
