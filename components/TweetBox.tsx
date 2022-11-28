import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { Dispatch, useRef, useState } from 'react'
import { Tweet, TweetBody } from '../typings';
import { fetchTweet } from '../utils/fetchTweets';


interface Props {
  setTweets: Dispatch<React.SetStateAction<Tweet[]>>
}
function Tweetbox({setTweets}: Props) {
   const [input, setInput] = useState<string>('')
   const {data:session} = useSession();
   const imageInputRef = useRef<HTMLInputElement>(null)
   const [boxOpen,setBoxOpen] = useState<boolean>(false);
   const [image,setImage] = useState<string>('')
   const addImageToTweet =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(!imageInputRef.current?.value) return;
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setBoxOpen(false)
   }
   const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown',
      profileImg: session?.user?.image || 'https://images.unsplash.com/photo-1598124146163-36819847286d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      image: image,
    }
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST',
    })
    const json = await result.json();
    const newTweets = await fetchTweet();
    setTweets(newTweets);
    return json

   }
   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    postTweet();
    setInput('')
    setImage('')
    setBoxOpen(false);
   }
  return (
    <div className='flex space-x-2 p-5'>
        <img className='rounded-full h-14 w-14 object-cover mt-4' src={session?.user?.image ||'https://links.papareact.com/gll'} alt=''/>
        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Whats Happening' className='h-24 w-full text-xl outline-none placeholder:text-xl' />
            <div className='flex items-center'>
              <div className='flex flex-1 space-x-2 text-twitter'>
                <PhotographIcon onClick={()=> setBoxOpen(!boxOpen)} className='h-5 w-5'/>
                <SearchIcon className='h-5 w-5' />
                <EmojiHappyIcon className='h-5 w-5' />
                <CalendarIcon className='h-5 w-5' />
                <LocationMarkerIcon className='h-5 w-5' />
              </div>
              <button onClick={handleSubmit} disabled={!input} className='bg-twitter text-white font-bold rounded-full px-5 py-2 disabled:opacity-40'>Tweet</button>
            </div>
            {boxOpen && (
              <form className='rounded-lg mt-5 flex bg-twitter/80 py-2 px-4'>
                <input ref={imageInputRef}
                 type='text' className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white' placeholder='Enter Image URL'/>
                <button type='submit' onClick={addImageToTweet} className='font-bold text-white'>Add Image</button>
              </form>
            )}
            {image && <img className='mt-10 h-40 w-full rounded-xl object-contain shadow-lg' src={image} alt='' />  }
          </form>
        </div>
    </div>
  )
}

export default Tweetbox