import React from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'

function Sidebar() {
  return (
    <div className='sidebar'>


      <SidebarRow
        src='https://res.cloudinary.com/shafali/image/upload/v1600341615/images_1_zqz9a5.jpg'
        title='Hasan'
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title={'COVID-19 Information Center'}
      />

      <SidebarRow
        Icon={EmojiFlagsIcon}
        title='Pages'
      />


      <SidebarRow
        Icon={PeopleIcon}
        title='Friends'
      />

      <SidebarRow
        Icon={ChatIcon}
        title='Message'
      />

      <SidebarRow
        Icon={StorefrontIcon}
        title='Marketplace'
      />

      <SidebarRow
        Icon={VideoLibraryIcon}
        title='Videos'
      />

      <SidebarRow
        Icon={ExpandMoreOutlined}
        title='Marketplace'
      />


    </div>
  )
}

export default Sidebar
