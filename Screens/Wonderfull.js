import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import {
  Container, Content, Body, Left, Right, Header, Icon, Input
}  from 'native-base'

import ReadMore from 'react-native-read-more-text';

export default class Wonderfull extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    _renderTruncatedFooter = (handlePress) => {
      return (
        <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
          Read more
        </RegularText>
      );
    }
  
    _renderRevealedFooter = (handlePress) => {
      return (
        <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
          Minimize
        </RegularText>
      );
    }
    return (
      
      <Container >
        <Header>
          <Left style={{ flex: 1, flexDirection : 'row' }} >
              <Icon name="ios-camera-outline" style={{ flex:1 , color: '#fff'}} />
              <Text style={{ flex:3 , color: '#fff', fontFamily : 'forte', fontWeight: 'bold',}}>WonderFull Galery</Text>
          </Left>
          <Right>
            <TouchableOpacity>
              <Icon name="ios-add-circle-outline" style={{ color: '#fff' }}></Icon>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={{ flex:1, flexDirection : 'column' }}>
            <View style={{ flex:1, flexDirection: 'row' }}>
              <View style={{ flex: 1, padding : 10 }}>
                <Image style={{width:39, height:39 }} source={require('../src/Images/user2.png')} />
              </View>
              <View style={{ flex: 9, justifyContent : 'center'}}>
                <Text style={{fontSize : 16, fontWeight : 'bold', textAlign : 'left' }}> Ratu Galery </Text>
              </View>
              <View style={{ flex:1, justifyContent : 'center' }}>
                <TouchableOpacity>
                    <Icon name="md-more" />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex:1 }}>
                <Image style={{ width:'100%', height : 300 }} source={{ uri: 'http://www.smukke.it/wp-content/uploads/2016/06/Wonderfull02.jpg' }} />
            </View>
            <View style={{ flex:1, flexDirection: 'column' }}>
               <View style={{ flex:1, paddingLeft : 10, marginTop : 20 , flexDirection : 'row'}} >
                    <Icon name="ios-heart-outline"  style={{ marginRight: 10,textAlign : 'left' }} />
                    <Icon name="ios-chatbubbles-outline"  style={{ marginRight: 10, textAlign : 'left'}} />
                    <Icon name="md-share"  style={{ marginRight: 10,textAlign : 'left' }}/>
               </View>
               <View style={{ flex:1 , marginTop :10 ,paddingLeft : 10}}>
                     
                     <ReadMore
                        numberOfLines={2}
                        renderTruncatedFooter={this._renderTruncatedFooter}
                        renderRevealedFooter={this._renderRevealedFooter}>
                       <Text>
                       <Text style={{ fontWeight:'bold' }}>ratu galery </Text>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                       </Text>
                      </ReadMore>
               </View>
               <View style={{ flex:1 , paddingLeft : 10}}>
                  <TouchableOpacity>
                    <Text style={{ fontSize : 14, color: '#918e8e' }}>Lihat Semua 4 Komentar</Text>
                  </TouchableOpacity>
               </View>
               <View style={{ flex:1, flexDirection : 'row', marginTop : 10 , paddingLeft : 10}}>
                  <View style={{ flex  :1 }}>
                    <Image style={{ width : 30, height : 30 }} source={require('../src/Images/user1.png')} />
                  </View>
                  <View style={{ flex: 8, paddingBottom : 12}}>
                    <Input style={{ fontSize : 12, height : 35 }}
                    placeholderTextColor="#918e8e" placeholder=" Tambahkan Komentar " />
                  </View>
                  
               </View>
               <Text style={{ flex:1, fontSize : 11, color : '#918e8e', paddingLeft : 10 }}>
                  3 JAM YANG LALU
               </Text>
            </View>
            
          </View>
        </Content>
      </Container>
    );
  }
}

const Style = StyleSheet.create({
    tes : {
        textAlign : 'center',
        alignItems : 'center',
        justifyContent: 'center',
    }
})