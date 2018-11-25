
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Tabs from "./Tabs"
import HeaderComponent from "../../Components/Header"

const Screen = {
    slug : 'Pilih Kategori Berita',
    categories : [
        {
            screen : 'ViralNews'
        },
        {
            screen : 'TipsNews'
        },
        {
            screen : 'OtoNews'
        },
        {
            screen : 'HealthNews'
        },
    ]
}

const News =
    {
        HomeNews : {
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

export default createStackNavigator(News)


