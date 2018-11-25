import React, { Component } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image} from 'react-native';
import {
Container, Header, Left, Right, Body, Content, Icon, Grid, Col, List, ListItem
}from 'native-base'

export default class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  categories = [
    {
      name : 'Viral'
    },
    {
      name : 'PEndidikan'
    },
    {
      name : 'anek'
    },
    {
      name : 'Seru'
    },
    {
      name : 'Lucu'
    },
    {
      name : 'Sakarepku'
    },
  ]
  render() {    
    return (
      <Container>
        <Header style={Style.header} >
          <Left>
            <TouchableOpacity onPress={
              ()=>{
                this.props.navigation.navigate('Videos')
              }
            }>
              <Icon name="arrow-back" style={Style.fontHeader} />
            </TouchableOpacity>
          </Left>
          <Body style={{  }}>
            <Text style={Style.fontHeader}>
              Jelajahi
            </Text>
          </Body>
        </Header>
        <Content>
          <View style={{ flex : 1, flexDirection : 'row', paddingTop: 10 }}>
              <View style={{ flex: 1, paddingLeft : 15,  }}>
                <Text style={{ fontSize : 18 , fontWeight : 'bold', textAlign : 'left'}}>
                  <Text style={{ color: 'yellow' }}>|</Text>
                  TOP
                </Text>
              </View>
              <View style={{ flex : 1, paddingRight : 15 }}>
                <Text style={{ fontSize : 14, textAlign : 'right' }}>
                  lebih banyak
                </Text>
              </View>
          </View>
          <Grid>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/uc.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>UC</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/detikcom.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>detikcom</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/kumparan.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>Kumparan</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/sindo.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>Sindo</Text>
              </View>
            </Col>
          </Grid>

            <Grid>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/pekalonganinfo.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>pekalonganinfo</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/opini.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>Opini.id</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/okezone.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>Okezone</Text>
              </View>
            </Col>
            <Col style={{ margin : 5, padding : 10, flex: 1 ,flexDirection : 'column', backgroundColor : '#f0f0f0'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require("../src/Images/favicon/jalantikus.png")} style={{ width: 40, height : 40 }} />
              </View>
              <View style={{ flex:1 , alignItems : 'center', paddingTop : 5}}>
                <Text style={{ fontSize : 11, textAlign : 'center' }}>jalantikus</Text>
              </View>
            </Col>
          </Grid>

          <List>
            <ListItem>
              <Text style={{ fontWeight : 'bold', }}>
                <Text style={{ color: 'yellow' }}> | </Text>
                Cari Kategori
              </Text>
            </ListItem>
            {this.categories.map((categories, key)=>(
              <ListItem key={key}>
                <Text>
                  {categories.name}
                </Text>
              </ListItem>
            ))}
          </List>

        </Content>
      </Container>
    );
  }
}

const Style = StyleSheet.create({
  header : {
    backgroundColor : "#fff"
  },
  fontHeader : {
    color : '#000000',
    fontSize : 20,
    fontWeight: 'bold',
  }
})