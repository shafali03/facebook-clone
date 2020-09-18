import React from 'react'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'


function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />


      <Post
        profilePic='https://res.cloudinary.com/shafali/image/upload/v1600344869/portrait-3353699_640_d4tecz.jpg'
        message='Awesome'
        timestamp='timestamp ...'
        username='hasan'
        image='https://res.cloudinary.com/shafali/image/upload/v1600344870/the-palm-962785_640_o2hibx.jpg'
      />
      {/* <Post />
      <Post /> */}
    </div>
  )
}

export default Feed
