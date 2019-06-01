import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { Container, Content, Icon, Right} from 'native-base';
import { RkStyleSheet } from 'react-native-ui-kitten';

class TextBox extends Component{
  constructor(){
    super()
    this.state = {
      AmPm: "am",
      seen: 0
    }
    setTimeout(() => {this.changeSeen()} , 2000)
  }
  changeSeen(){
    this.setState({seen: 1})
  }
  renderIcon(){
    if (this.state.seen == 1)
      return(
        <Icon name = "check-all" type = "MaterialCommunityIcons" style = {styles.iconStyle} />
      )
    else if (this.state.seen == 0)
        return(
          <Icon name = "clockcircle" type = "AntDesign" style = {styles.iconStyle2} />
        )
    
  }
  renderTime(){
    var hours = this.props.hours;
    if (this.props.hours > 12){
      hours =  this.props.hours % 12
      this.setState({AmPm: "pm"})
    }
    return (
      <View style = {{flex: 1, flexDirection: "row", width: "100%"}}>
        <Text style = {styles.textFooterStyle}>
          {this.props.hours}:{this.props.min} {this.state.AmPm}
        </Text>
        <View style = {{marginLeft: 4}}>
          {this.renderIcon()}        
        </View>
      </View>
    )
  }
  render() {
    if (this.props.type == "text")
      return (
        <View style = {styles.boxStyle}>
            <View style = {styles.textViewStyle}>
              <Text style = {styles.messageStyle}>
                {this.props.context} {"\n"}
              </Text>
            </View>
            <View style = {styles.footerStyle}>
              {this.renderTime()}
            </View>
            <View style = {{height: 10}}>
            </View>
        </View>
      );
    else if (this.props.type == "image")
      return (
        <View style = {styles.boxStyle}>
            <View style = {styles.textViewStyle}>
              <Image source={{ uri: this.props.image }} style = {{width: 180, height: 180, borderRadius: 5}}/>
            </View>
            <View style = {styles.footerStyle}>
              {this.renderTime()}
            </View>
            <View style = {{height: 10}}>
            </View>
        </View>
      )
  }
}
export {TextBox}
const styles = RkStyleSheet.create(theme => ({
  boxStyle: {
    backgroundColor: theme.accent1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1, 
    flexDirection: 'column',
    alignSelf: "flex-end"
  },
  textViewStyle: {
    flex: 1, 
    alignItems: 'center',
    margin: 20,
    maxWidth: "70%",
  },
  messageStyle : {
    fontSize: 14.5,
    color: theme.primary1
  },
  textFooterStyle : {
    fontSize: 12,
    color: theme.primary1,
  },
  iconStyle: {
    fontSize: 15,
    color: theme.primary1,
  },
  iconStyle2: {
    fontSize: 13,
    color: theme.primary1,
  },
  footerStyle : {
    height: 20,
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
  }
})) ;
