import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, FlatList, ScrollView } from 'react-native';
import { Container, Content, Button, Badge } from 'native-base';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { TextBox } from './TextBox'
import { ReplyBox } from './ReplyBox';
class ChatArea extends Component{
  constructor(){
    super()
    this.state = {
      imageUrl: require("../../../assets/background1.jpg")
    }
  }
  
  componentDidMount() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }
  componentWillMount() {
    if (this.props.imageIndex == 1)
      this.setState({imageUrl: require("../../../assets/background1.jpg")})
    if (this.props.imageIndex == 2)
      this.setState({imageUrl: require("../../../assets/background2.jpg")})
    if (this.props.imageIndex == 3)
      this.setState({imageUrl: require("../../../assets/background3.jpg")})
    if (this.props.imageIndex == 4)
      this.setState({imageUrl: require("../../../assets/background4.jpg")})
    if (this.props.imageIndex == 5)
      this.setState({imageUrl: require("../../../assets/background5.jpg")})
  }
  goDown(){
    if (this.props.down == true){
      setTimeout(function() {
        this.scrollView.scrollToEnd();
      }.bind(this))
      this.downDone
    }
  }
  componentDidUpdate() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }
  renderMessages(){
      var allMessages = []
      var i = 0;
      var size = this.props.messages.length
      for (i = 0 ; i < size ; i++){
        if (this.props.messages[i].type == "text")
          allMessages.push(<TextBox context = {this.props.messages[i].message} image = "" type = "text" hours = {this.props.messages[i].hours} min = {this.props.messages[i].min} key = {i}/>)
        else if (this.props.messages[i].type == "image")
        allMessages.push(<TextBox context = "" image = {this.props.messages[i].image} type = "image"  hours = {this.props.messages[i].hours} min = {this.props.messages[i].min} key = {i}/>)
        else if (this.props.messages[i].type == "reply")
          allMessages.push(<ReplyBox context = {this.props.messages[i].message}  hours = {this.props.messages[i].hours} min = {this.props.messages[i].min} key = {i}/>)  

      }
      this.goDown()
      return (
        allMessages
      )
  }
  render() {
    return (
      <ImageBackground source = {this.state.imageUrl} style = {{width: "100%", height: "100%", flex: 1}} >
        <View style = {{flex: 1,  flexDirection: "row", justifyContent: "flex-start", alignItems: 'flex-end'}}>
          <ScrollView  
            ref={(ref) => { this.scrollView = ref }}
            showsVerticalScrollIndicator = {false}
            style = {{flex: 1}}>
              {this.renderMessages()}
          </ScrollView>
        </View>
      </ImageBackground>
      
    );
  }
}
export {ChatArea}
const styles = RkStyleSheet.create(theme => ({
  contentStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
  }
})) ;
