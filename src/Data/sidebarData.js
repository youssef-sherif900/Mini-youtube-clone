import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExploreIcon from '@mui/icons-material/Explore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const sidebarData =[
    {
        id:1,
       selected:true,
       Icon:HomeIcon ,
       title:"Home" 
    },
    {
        id:2,
        selected:false,
        Icon:ExploreIcon ,
        title:"Explore" 
    },
    {
        id:3,
        selected:false,
        Icon:SubscriptionsIcon ,
        title:"Subscriptions" 
    }
]



const sidebarData2 =[
    {
        id:1,
       selected:false,
       Icon:VideoLibraryIcon ,
       title:"Libary" 
    },
    {
        id:2,
        selected:false,
        Icon:HistoryIcon ,
        title:"History" 
    },
    {
        id:3,
        selected:false,
        Icon:OndemandVideoIcon ,
        title:"Your videos" 
    },
    {
        id:4,
        selected:false,
        Icon:WatchLaterIcon ,
        title:"Watch Later" 
    },
    {
        id:5,
        selected:false,
        Icon:ThumbUpAltIcon ,
        title:"Liked Videos" 
    },
    {
        id:6,
        selected:false,
        Icon:ExpandMoreIcon ,
        title:"Show more" 
    }
]

export { sidebarData,sidebarData2} ;