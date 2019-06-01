import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Container, Content, Icon} from 'native-base';
import { RkStyleSheet } from 'react-native-ui-kitten';

class ReplyBox extends Component{
  constructor(){
    super()
    this.state = {
      AmPm: "am",
      seen: 0
    }

  }
  renderTime(){
      return (
        <View style = {{flex: 1, flexDirection: "row", width: "100%"}}>
          <Text style = {styles.textFooterStyle}>
            {this.props.hours}:{this.props.min}
          </Text>
      </View>
    )
  }
  render() {
    return (
      
        <View style = {styles.boxStyle}>
            <View style = {styles.textViewStyle}>
              <Text style = {styles.messageStyle}>
                {this.props.context}

              </Text>
            </View>
            <View style = {styles.footerStyle}>  
              {this.renderTime()}
            </View>
            <View style = {{height: 10}}>
            </View>
        </View>
        
        
      
    );
  }
}
export {ReplyBox}
const styles = RkStyleSheet.create(theme => ({
  boxStyle: {
    backgroundColor: theme.primary2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0.5,
    flex: 1, 
    flexDirection: 'column',
    alignSelf: "flex-start",
    borderColor: theme.text1
  },
  textViewStyle: {
    flex: 1, 
    alignItems: 'center',
    padding: 20,
    maxWidth: "70%",
  },
  messageStyle : {
    fontSize: 14.5,
    fontFamily: "IRANSansMobile",
    color: theme.text1
  },
  textFooterStyle : {
    fontSize: 12,
    color: theme.text1,
  },
  footerStyle : {
    height: 20,
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10
  }
})) ;
