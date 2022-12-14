import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='px-2 mt-3 hidden lg:inline col-span-2'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
            <SearchIcon className='h-6 w-6 text-gray-400' />
            <input type="text" placeholder='Search Twitter' className='bg-transparent flex-1 outline-none' />

        </div>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="elonmusk"
  options={{height: 1000}}
/>


    </div>
  )
}

export default Widgets