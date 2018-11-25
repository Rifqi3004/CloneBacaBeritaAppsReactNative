import Pages from "./Pages"
import { createMaterialTopTabNavigator } from 'react-navigation'
export default VideosTabs = createMaterialTopTabNavigator(
    {
        ViralVideos : {
            screen : Pages,
            navigationOption : {

            }
        },
        TipsVideos : Pages,
        OtoVideos : Pages,
        HealthVideos : Pages
    },
    {
        swipeEnabled : true,
        tabBarOptions : {
         activeBackgroundColor : '#fff',
         inactiveBackgroundColor : '#fff',
         activeTintColor : '#000000',
         inactiveTintColor : 'grey',
         labelStyle : {
             fontSize : 16,
             fontWeight : 'bold'
         },
         allowFontScaling : true,
         scrollEnabled : true,
         style : {
             backgroundColor : '#fff',
             height : 55
         }
        }
        
    }
)
