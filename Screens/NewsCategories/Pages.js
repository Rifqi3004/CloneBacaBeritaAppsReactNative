import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

import { Navigation,  } from 'react-navigation'

import {
  Container, Left, Right, Body, Footer,Content, List, ListItem, CardItem, Card,
  Icon, Toast
} from 'native-base'

import ListNews from "../../Components/News/ListNews"

export default class Pages extends Component {  
  
  Content = [
    {
      slug : 'Serunya naik Paralayang',
      image : 'http://www.4000m.com/data/bundle/kitpagesFileSystem/kitpagesFile/35/354/saut-parachute-tandem-4000m-3.jpg',
      desc : 'Galang Dana, Lari Dari Bogor - Palu Pelari asal Bogor Hendrawijaya atau Kang Hendra mengajak pelari-pelari ',
      creator : 'Mas Joko',
      viewer : 99
    },

    {
      slug : 'Info Film Rilis 2019',
      image : 'http://superstupidfresh.com/wp-content/uploads/2018/01/upcomingMovie2018LG.jpg',
      desc : 'Galang Dana, Lari Dari Bogor - Palu Pelari asal Bogor Hendrawijaya atau Kang Hendra mengajak pelari-pelari ',
      creator : 'Mas Joko',
      viewer : 99
    },
    {
     slug : 'Wow Megalodon melintas di Laut Indonesia',
     image : 'https://vemco.com/wp-content/uploads/2012/09/image-banner2.jpg',
     desc : 'Galang Dana, Lari Dari Bogor - Palu Pelari asal Bogor Hendrawijaya atau Kang Hendra mengajak pelari-pelari ',
     creator : 'Mas Joko',
     viewer : 0
   },
   {
     slug : 'Ssstt . . . Menguak isu sekarang !',
     image : 'https://notairemontreal.files.wordpress.com/2012/10/image-secret.jpg',
     desc : 'Galang Dana, Lari Dari Bogor - Palu Pelari asal Bogor Hendrawijaya atau Kang Hendra mengajak pelari-pelari ',
     creator : 'Mas Joko',
     viewer : 99
   }
   ]
  render() {
   
    return (
      <Container>
        <Content>
          <List>
              {this.Content.map((Content,key) => 
                <ListNews content={Content} key={key} />
              )}
              <ListItem>
                <View style={{ flex : 1}}>
                    <Text style={ styles.textSlug }> Intip Info Films Terabaru Keluar Marvel DC </Text>
                    <Image source={require('../../src/Images/marveldc.jpeg')} style={styles.imageContentBanner}/>
                    <View style={{ flex : 1, marginTop : 30 , flexDirection : 'row'}}> 
                      <Text style={ styles.textFooterContent } >Mas Brow</Text>
                        <Text style={ styles.textFooterContent } >
                        <Icon name='ios-eye-outline'
                        style={{ fontSize : 13, marginRight: 20,  }}
                        ></Icon> 
                        102
                        </Text>
                        <TouchableOpacity style={{ flex : 1  }}
                          onPress={
                            () => alert('laporkan!')
                          }
                        >
                          <Icon name="ios-more-outline" style={{ fontSize : 16, flex : 1 }}></Icon>
                        </TouchableOpacity>
                      </View>
                </View>
              </ListItem>
              <ListItem>
                <View style={{ flex : 1}}>
                    <Text style={ styles.textSlug }> Intip Info Films Terabaru Keluar Marvel DC </Text>
                    <Image source={require('../../src/Images/marveldc.jpeg')} style={styles.imageContentBanner}/>
                    <View style={{ flex : 1, marginTop : 30 , flexDirection : 'row'}}> 
                      <Text style={ styles.textFooterContent } >Mas Brow</Text>
                        <Text style={ styles.textFooterContent } >
                        <Icon name='ios-eye-outline'
                        style={{ fontSize : 13, marginRight: 10, }}
                        ></Icon> 
                        102
                        </Text>
                        <TouchableOpacity style={{ flex : 1  }}
                          onPress={
                            () => alert('laporkan!')
                          }
                        >
                          <Icon name="ios-more-outline" style={{ fontSize : 16, flex : 1 }}></Icon>
                        </TouchableOpacity>
                      </View>
                </View>
              </ListItem>
              {this.Content.map((Content,key) => 
                <ListNews content={Content} key={key} />
              )}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageContent : {
    height : 100,
    width: 100,
    borderRadius : 10
  },
  textSlug : { 
    fontSize : 15, 
    fontWeight : 'bold', 
    color : '#2b2b2b' 
  },
  textFooterContent : 
  { fontSize : 10, 
    color : 'grey' , 
    flex: 1
  },
  imageContentBanner : {
    height : 120,
    width : '100%',
    flex : 1,
    borderRadius : 1
  }
})