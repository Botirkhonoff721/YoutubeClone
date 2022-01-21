import React,{createContext, useState} from 'react'
import HOME from '../Assets/Sidebar/Home.svg'
import HISTORY from '../Assets/Sidebar/HISTORY.svg'
import LIBRARY from '../Assets/Sidebar/library.png'
import LIKED from '../Assets/Sidebar/liked.svg'
import PLAYLIST from '../Assets/Sidebar/playlist.svg'
import WATCH from '../Assets/Sidebar/watch.svg'
import YOUTUBES from '../Assets/Sidebar/youtubes.png'
import COMPASS from '../Assets/Sidebar/Compass.svg'

export const MenuData = [
    {id: 1,img:`${HOME}`, title: 'Home' },
    {id: 2,img:`${COMPASS}`, title: 'Explore' },
    {id: 3,img:`${YOUTUBES}`, title: 'Subscriptions' },
    {id: 32,img:`${YOUTUBES}`, title: 'Subscriptions' },
    {id: 4,img:`${LIBRARY}`, title: 'Library' },
    {id: 53,img:`${HISTORY}`, title: 'History' },
    {id: 5,img:`${HISTORY}`, title: 'History' },
    {id: 63,img:`${PLAYLIST}`, title: 'Watch later' },
    {id: 6,img:`${PLAYLIST}`, title: 'Watch later' },
    {id: 7,img:`${WATCH}`, title: 'Liked videos' },
    {id: 8,img:`${LIKED}`, title: 'Liked videos' },
    {id: 9,img:`${LIKED}`, title: 'Liked videos' },
    {id: 10,img:`${LIKED}`, title: 'Liked videos' },
]
export const SidebarList = createContext();

const MenuList = ({children}) => {
    const [data,setData] = useState(MenuData)
    return (
        <SidebarList.Provider value={[data,setData]}>
            {children}
        </SidebarList.Provider>
    )
}

export default MenuList
