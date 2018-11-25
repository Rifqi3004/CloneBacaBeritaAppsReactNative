import React, { Component } from 'react';
import { 
  View, Text, StyleSheet , Image, WebView, TouchableOpacity
} from 'react-native';
import {
  Container, Content, Body,Left, Right, Footer, Icon, Card, CardItem
} from 'native-base'

export default class Pages extends Component {

  videos = [
    {
      thumbnails : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      url : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      creator : {
        fotoicon : 'user1',
        username : 'Mas Andrew'
      },
      viewer : 80,
      comment : 33,
      share  : 18
    },
    {
      thumbnails : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      url : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      creator : {
        fotoicon : 'user2',
        username : 'Mas Andre'
      },
      viewer : 10,
      comment : 2,
      share  : 0
    },
    {
      thumbnails : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      url : 'https://img.youtube.com/vi/sjTkaaaoTCQ/maxresdefault.jpg',
      creator : {
        fotoicon : 'user1',
        username : 'Mas Iqbal'
      },
      viewer : 999,
      comment : 203,
      share  : 764
    }
  ]

  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
 onLoad(data){
   this.setState({duration : data})
 }
 onPress(data){
   this.setState({currentTime : data})
 }
onEnd(){
  this.setState({ pausedText : 'Play', paused : true })
  this.video.seek(0)
}

  render() {
    
    return (
      <Container>
        <Content>                           
            {this.videos.map(
              (videos, key) => (
                <View style={{ flex:1, flexDirection : 'column' }} key={key}>
                    <View style={styles.ViewImageVideos}>
                        <Image source={{ uri : videos.thumbnails }}
                          style={styles.ImageVideos}
                        />
                        <TouchableOpacity
                          style={styles.TouchIcon}
                        >
                          <Icon name="ios-play" style={styles.iconImageVideos} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerVideos}>
                      <Left style={{ flex : 1, flexDirection : 'row', paddingLeft : 20 }}>
                            <Image style={styles.imageIconUser} source={require("../../src/Images/user1.png")} />
                            <Text style={{ flex: 1, marginLeft : 10 }}>
                              { videos.creator.username }
                            </Text>
                        </Left>
                        <Right style={{ flex: 1, flexDirection : 'row' }}>
                            <Text style={{ flex : 1, fontSize : 12 }}>
                              <Icon name="ios-heart-outline" style={{ fontSize : 16 }}/> {videos.viewer}
                            </Text>
                            <Text style={{ flex : 1 , fontSize : 12}}>
                              <Icon name="ios-chatbubbles-outline" style={{ fontSize : 16 }} /> {videos.comment}
                            </Text>
                            <Text style={{ flex : 1 , fontSize : 12}}>
                              <Icon name="ios-share-alt-outline" style={{ fontSize : 16 }} /> {videos.share}
                            </Text>
                        </Right>
                    </View>
                  </View>
              )
            )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    WebViewContainer : {
      width : 300,
      height : 200
    },
    imageIconUser : {
      width : 30,
      height : 30
    },
    ViewImageVideos : { 
      flex: 1, 
      position: 'relative', 
      alignItems : 'center',
       justifyContent : 'center' 
    },
    ImageVideos : {
       position : 'relative', 
       width : '100%', 
       height: 200
    },
    TouchIcon : { 
      position:'absolute',  
      alignItems : 'center' 
    },
    iconImageVideos :  { 
      color: '#fff', 
      fontSize : 80,
      borderRadius:  30,
      borderColor:  '#000',
  },
  footerVideos : { 
     flex:1, 
     flexDirection:'row',
      marginTop : 20,
      marginBottom : 20, 
      alignItems : 'center'
    }


})