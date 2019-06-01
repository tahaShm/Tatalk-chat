import React, { Component } from 'react';
import { RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { Container, Header, Left, Icon, Body, Title, Content, Text, Right, Item, Input, Form, Label, View, CheckBox, Footer, FooterTab, Button, Thumbnail, Badge } from 'native-base';
import { moderateScale, scale } from 'react-native-size-matters';
import { TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native'

var W = Dimensions.get('window').width;
var H = Dimensions.get('window').height;

class SettingToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }

  }
  render() {

    return (
      
      <View style={{ width: '100%' }}>
      
        <View style={styles.header} >
          <View style={styles.mainView}>
            <StatusBar backgroundColor= {styles.status}/>
            <View style={{flex: 1, height: '100%', justifyContent: "flex-start", flexDirection: "row", alignItems: "center"}}>
              <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate("ChatScreen", {messages: this.props.messages, imageIndex: this.props.imageIndex})}>
                  <View style = {{marginLeft: 4}}>
                    <Text style = {styles.backStyle}>Back</Text>
                  </View>
                  <View style = {{justifyContent: 'flex-end', marginLeft: 4}}><Badge><Text>{this.props.messages.length}</Text></Badge></View>
              </TouchableOpacity>
            </View>
            
            <View style={{flex: 2, height: '100%', justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
              <View style={styles.textView}>
                <Text style={styles.titleStyle} allowFontScaling={false} >Settings</Text>
              </View>
            </View>
            <View style = {{flex: 1}}>
            </View>
            
          
          </View>
        </View>
      </View>
  )}
}

let styles = RkStyleSheet.create(theme => ({
  status: theme.status,
  header: {
    backgroundColor: theme.primary1,
    height: moderateScale(60),
    borderBottomColor: theme.separator,
    borderBottomWidth: 0.35,
  },
  mainView: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  touchableStyle: {
    height: moderateScale(42),
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: moderateScale(3),
    marginRight: moderateScale(3),
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    height: "100%",
  },
  titleStyle:{
    color: theme.text1,
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'SHOWG'
  },
  thumbnailView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    height: "100%",
  },
  thumbnailStyle: {
    borderColor: theme.separator,
    borderWidth: 0.5,
  },
  backIconStyle: {
    color: theme.accent1,
    fontSize: 17,
  },
  backStyle: {
    color: theme.accent1,
    fontSize: 17,
  }
  
}))


export { SettingToolBar }