
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Tabs from "./Tabs"
import HeaderComponent from "../../Components/Header"

const Screen = {
    slug : 'Pilih Kategori Videos',
    categories : [
        {
            screen : 'ViralVideos'
        },
        {
            screen : 'TipsVideos'
        },
        {
            screen : 'OtoVideos'
        },
        {
            screen : 'HealthVideos'
        },
    ]
}

const Videos =
    {
        HomeVideos : {
            screen : Tabs,
            navigationOptions : {
                header : (
                    <HeaderComponent dataScreen={
                       Screen
                    }/>
                )
            }
        }
    }

export default createStackNavigator(Videos)


