import React, { Component } from 'react';
import { RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { Container, Header, Left, Icon, Body, Title, Content, Text, Right, Item, Input, Form, Label, View, CheckBox, Footer, FooterTab, Button, Thumbnail } from 'native-base';
import { moderateScale, scale } from 'react-native-size-matters';
import { TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native'
var W = Dimensions.get('window').width;
var H = Dimensions.get('window').height;

class ToolBar extends Component {
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
              <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate("SettingsScreen", {messages: this.props.messages})}>
                <Icon name="md-settings" type = "Ionicons" style={styles.settingIcon} />
              </TouchableOpacity>
              <View style = {{marginLeft: 20}} >
                <TouchableOpacity style={styles.touchableStyle} onPress={this.props.down}>
                  <View style = {styles.arrowStyle}>
                    <Icon name="arrowdown" type = "AntDesign" style={styles.downArrowIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{flex: 2, height: '100%', justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
              <View style={styles.textView}>
                <Text style={styles.titleStyle} allowFontScaling={false} >Tatalk</Text>
              </View>
            </View>

            <View style={{flex: 1, height: '100%', justifyContent: "flex-end", flexDirection: "row", alignItems: "center"}}>
              <View style = {styles.thumbnailView}>
                <Thumbnail source = {require("../../../assets/Tatalk.png")} style = {styles.thumbnailStyle} />
              </View>
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
    width: moderateScale(42),
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: moderateScale(3),
    marginRight: moderateScale(3),
  },
  arrowStyle : {
    height: moderateScale(30),
    aspectRatio: 1,
    borderRadius: 200,
    backgroundColor: theme.accent1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    height: "100%",
  },
  titleStyle:{
    color: theme.accent1,
    fontSize: 25,
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
    height: moderateScale(45),
    width: moderateScale(45),
    borderColor: theme.separator,
    borderWidth: 0.5,
  },
  settingIcon: {
    color: theme.accent1,
    fontSize: 25,
  },
  downArrowIcon: {
    color: theme.primary1,
    fontSize: 25,
  }
  
}))


export { ToolBar }