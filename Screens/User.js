import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  Container, Body, List, ListItem, Content,
  Grid, Col, Left, Right, Icon
} from 'native-base'

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Content>
            <Text style={Style.textheader}> Login dengan </Text>
            <View style={Style.contentIcon}>
              <View style={Style.viewImage} >
                <Image source={require("../src/Images/facebook.png")} style={Style.imageIcon} />
              </View>
              <View style={Style.viewImage} >
                <Image source={require("../src/Images/google.png")} style={Style.imageIcon} />
              </View>
              <View style={Style.viewImage} >
                <Image source={require("../src/Images/twitter.png")} style={Style.imageIcon} />
              </View>
              <View style={Style.viewImage} >
                <Image source={require("../src/Images/email.png")} style={Style.imageIcon} />
              </View>
            </View>
            <Text style={{ textAlign:'center', marginTop:20 }}>
              Dengan melanjutkan berarti anda setuju dengan 
              <Text style={{ fontWeight:'bold', color : '#0985ea' }}> Persyaratan </Text>
              dan <Text style={{ fontWeight:'bold', color : '#0985ea' }}> Kebijakan </Text> aplikasi ini
            </Text>
            
            <List style={{ marginTop: 10 }}>
              <ListItem></ListItem>
              <ListItem>
                <Left>
                  <Text>Riwayat</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Suka</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Tersimpan</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Notifikasi</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Pengaturan</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Saran</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={{ color : '#c6bebe' }} />
                </Right>
              </ListItem>
            </List>

        </Content>
      </Container>
    );
  }
}

const Style = StyleSheet.create({
    textheader : {
      textAlign : 'center',
      fontSize : 17,
      fontWeight : 'bold',
      fontFamily :'arial',
      marginTop : 30
    },
    imageIcon : {
      width : 50,
      height : 50,
    },
    viewImage : {
      flex : 1,
      alignItems : 'center'
    },
    contentIcon : {
      flex : 1,
      paddingTop : 20,
      flexDirection : 'row'
    }
})