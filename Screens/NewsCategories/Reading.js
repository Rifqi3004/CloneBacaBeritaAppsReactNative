import React, { Component, PropTypes } from 'react';
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
Container, Header, Item, Icon, Button, Input, Content
} from 'native-base'
class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let data = this.props.navigation.state.params.Content;
    return (
      <Container>
          <Header style={{ flex :1, flexDirection :'row', backgroundColor : '#fff' }}>
            <View style={{ flex : 1 }}>
              <TouchableOpacity>
                <Icon name="ios-arrow-back" style={{ fontSize : 20, fontWeight: 'bold', }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 5 }}>
            {data.slug}
            </View>
            <View style={{ flex:1 }}>
              <TouchableOpacity>
                <Icon name="ios-more" style={{ fontSize : 20, fontWeight: 'bold', }}/>
              </TouchableOpacity>
            </View>
          </Header>
          <Content style={{ paddingLeft : 10, paddingRight : 10 , marginTop : 10}}>
            <View style={{ marginBottom : 10 }}>
              <Text style={{ fontSize : 18, fontWeight : 'bold' }}>
                  {data.slug}
              </Text>
            </View>
            <View style={{ flex:1, flexDirection : 'row' }} >
              <View style={{ flex : 1 }}>
                <Image source={require('../../src/Images/user1.png')} style={{ height : 50, width : 50 }}/>
              </View>
              <View style={{ flex:5 }}>
                <Text style={{ fontSize : 11, fontWeight :'bold' }}>
                  {data.author}
                </Text>
                <Text style={{ fontSize : 11, color : 'grey' }}>
                  2018/11/21 10:12
                </Text>
              </View>
              <View style={{ flex : 1 , alignItems : 'center'}}>
                <Button rounded><Text>Ikuti</Text></Button>
              </View>
            </View>
            <View>
              <Image source={{ uri : data.image }} style={{ height : 150, borderRadius : 10 }}/>
            </View>
            <View>
              <Text>
                {data.desc}
              </Text>
            </View>
          </Content>
      </Container>
    );
  }
}


export default Reading