import React, { Component } from 'react';
import { 
  Container, Header, Content,List, ListItem, Button, Icon, Left, Body, Right, Switch
} 

from 'native-base';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
export default class Categories extends Component {
  data = this.props.navigation.state.params.dataScreen
  render() {
    return (
      <Container>
          <Header style={Style.header}>
            <Left>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                  <Icon name="ios-arrow-back" style={{ fontSize : 24, fontWeight :'bold' }} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text style={Style.headerText}>
                {this.data.slug}
              </Text>
            </Body>
          </Header>
          <Content>
            <List>
              {
                this.data.categories.map((categories, key) => (
                  <ListItem key={key}
                  onPress={(props)=> this.props.navigation.navigate(categories.screen)}
                  >
                    <Body>
                      <Text style={Style.listText}>
                        {categories.screen}
                      </Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem>
             
                ))
              }            
            </List>
          </Content>
       </Container>
    );
  }
}

const Style = StyleSheet.create({
  headerText : {
    fontSize : 18,
    color : '#000',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor : '#fff'
  },
  listText : {
    fontSize : 16
  }
})