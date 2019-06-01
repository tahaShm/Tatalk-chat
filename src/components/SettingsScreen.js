import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SettingToolBar} from './utils/SettingToolBar'
import { RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import {lightTheme1, lightTheme2, lightTheme3, lightTheme4, lightTheme5, darkTheme1, darkTheme2, darkTheme3, darkTheme4, darkTheme5} from '../themes'
class SettingsScreen extends Component{
  constructor(){
    super()
    this.state = {
      themeIndex: null,
      imageIndex: null,
    }
  }
  changeBackground(index){
    this.setState({imageIndex: index})
  }
  changeTheme(index){
    this.setState({themeIndex: index})
    if (index == 1)
      RkTheme.setTheme(lightTheme1)
    if (index == 2)
      RkTheme.setTheme(lightTheme2)
    if (index == 3)
      RkTheme.setTheme(lightTheme3)
    if (index == 4)
      RkTheme.setTheme(lightTheme4)
    if (index == 5)
      RkTheme.setTheme(lightTheme5)
    if (index == 11)
      RkTheme.setTheme(darkTheme1)
    if (index == 12)
      RkTheme.setTheme(darkTheme2)
    if (index == 13)
      RkTheme.setTheme(darkTheme3)
    if (index == 14)
      RkTheme.setTheme(darkTheme4)
    if (index == 15)
      RkTheme.setTheme(darkTheme5)
  }
  render() {
    return (
      <Container style = {styles.containerStyle}>
        <SettingToolBar navigation = {this.props.navigation} messages = {this.props.navigation.getParam('messages')} imageIndex = {this.state.imageIndex} />
        <Content>
          <ScrollView 
            showsVerticalScrollIndicator = {false}
            style = {{flex: 1}}
          >
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20}}>
              <View style = {styles.viewStyle}>
                <View style = {{flex: 2, margin: 20}}>
                  <Text style = {styles.themeTitleStyle}> Choose your Theme </Text>
                </View>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', margin: 20}}>
                  <Text style = {styles.themeSubTitleStyle}> Light </Text>
                  <TouchableOpacity onPress = {() => this.changeTheme(1)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#00bfff"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(2)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#d966ff"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(3)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#2eb82e"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(4)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#ff5c33"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(5)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#795548"}}/>
                  </TouchableOpacity>
                </View>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', margin: 20}}>
                  <Text style = {styles.themeSubTitleStyle}> Dark </Text>
                  <TouchableOpacity onPress = {() => this.changeTheme(11)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#00bfff"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(12)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#d966ff"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(13)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#2eb82e"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(14)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#ff5c33"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeTheme(15)}>
                    <View style = {{width: 30, height: 30, borderRadius: 6, backgroundColor: "#795548"}}/>
                  </TouchableOpacity>
                </View>
              </View>

              <View style = {styles.viewStyle}>
                <View style = {{flex: 2, margin: 20}}>
                  <Text style = {styles.themeTitleStyle}> Choose your Chat Background</Text>
                </View>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', margin: 20}}>
                  <TouchableOpacity onPress = {() => this.changeBackground(1)}>
                    <Image style = {{width: 45, height: 45, borderRadius: 6, borderWidth: 1,  borderColor: styles.borderColor}} source = {require("../../assets/background1.jpg")}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeBackground(2)}>
                    <Image style = {{width: 45, height: 45, borderRadius: 6, borderWidth: 1, borderColor: styles.borderColor}} source = {require("../../assets/background2.jpg")}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeBackground(3)}>
                    <Image style = {{width: 45, height: 45, borderRadius: 6, borderWidth: 1, borderColor: styles.borderColor}} source = {require("../../assets/background3.jpg")}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeBackground(4)}>
                    <Image style = {{width: 45, height: 45, borderRadius: 6, borderWidth: 1, borderColor: styles.borderColor}} source = {require("../../assets/background4.jpg")}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => this.changeBackground(5)}>
                    <Image style = {{width: 45, height: 45, borderRadius: 6, borderWidth: 1, borderColor: styles.borderColor}} source = {require("../../assets/background5.jpg")}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
export {SettingsScreen}
const styles = RkStyleSheet.create(theme => ({
  borderColor: theme.text1,
  containerStyle : {
    backgroundColor: theme.primary1
  },
  themeTitleStyle: {
    fontSize: 17,
    color: theme.text1
  },
  themeSubTitleStyle: {
    fontSize: 16,
    color: theme.text1
  },
  viewStyle:{
    marginTop: 10,
    borderColor: theme.separator,
    borderRadius: 10,
    borderWidth: 0.5,
    flex: 1,
    flexDirection: "column",
    width: "100%"
  }
})) ;

