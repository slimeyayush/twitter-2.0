import React, { useState } from 'react'
import SidebarRow from './SidebarRow'
import {HomeIcon,BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
function Sidebar() {
 const [input,setInput] = useState<string>('')
  const {data:session} = useSession();
  return (
    <div className='flex flex-col col-span-2 items-center md:items-start px-4'>
        <img src='https://links.papareact.com/drq' className='m-3 h-10 w-10 ' alt='' />
        <SidebarRow title='Home' Icon={HomeIcon}/>
        <SidebarRow title='Explore' Icon={HashtagIcon}/>
        <SidebarRow title='Notification' Icon={BellIcon}/>
        <SidebarRow title='Save' Icon={BookmarkIcon}/>
        <SidebarRow title='Saved' Icon={CollectionIcon}/>
        <SidebarRow title='Menu' Icon={DotsCircleHorizontalIcon}/>
        <SidebarRow title='Texts' Icon={MailIcon}/>
        <SidebarRow onClick = {session? signOut: signIn} title={session? 'Sign Out': 'Sign In'} Icon={UserIcon}/>
    </div>
  )
}

export default Sidebar