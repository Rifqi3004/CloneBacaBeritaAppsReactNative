import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
    Header, List,Icon, Input, Item
} from 'native-base'
import { withNavigation } from 'react-navigation'
// class HeaderComponent extends Component {
//     render(){
//         const screen = this.props.screen
//         return (
//             <Header style={{ backgroundColor :'#fff' }}>
//                     <Item style={{ width: '100%' }}>
//                         <TouchableOpacity
//                             onPress={
//                                 () => this.props.navigation.navigate(screen.name)
//                             }
//                         >
//                             <Icon name="menu" style={{ color: '#000000', fontWeight: 'bold', fontSize : 30, marginRight : 20 }} />
//                         </TouchableOpacity>
//                         <Icon active name='search' style={{ color : 'grey' }} />
//                         <Input placeholder="Cari video ..." style={{ width : '100%' , color : 'grey'}} placeholderTextColor='grey'  />
//                     </Item>
//             </Header>
//         )
//     }
// }

class HeaderComponent extends Component {
    render(){
        const dataScreen = this.props.dataScreen
        return (
            <Header style={{ backgroundColor :'#fff' }}>
                    <Item style={{ width: '100%' }}>
                        <TouchableOpacity
                            onPress={
                                () => this.props.navigation.navigate('Categories',{dataScreen})
                            }
                        >
                            <Icon name="menu" style={{ color: '#000000', fontWeight: 'bold', fontSize : 30, marginRight : 20 }} />
                        </TouchableOpacity>
                        <Icon active name='search' style={{ color : 'grey' }} />
                        <Input placeholder='Cari Berita ...' style={{ width : '100%' , color : 'grey'}} placeholderTextColor='grey'  />
                    </Item>
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent)