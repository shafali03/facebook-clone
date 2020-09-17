import React from 'react'
import './StoryReel.css'
import Story from '../Story/Story'

function StoryReel() {
  return (
    <div className='storyReel'>

      <Story
        image='https://res.cloudinary.com/shafali/image/upload/v1600344869/cyber-glasses-1938449_640_uei6iv.jpg'
        profile='https://res.cloudinary.com/shafali/image/upload/v1600344869/model-2911332_640_nczukm.jpg'
        title='Oliver'

      />
      <Story
        image='https://res.cloudinary.com/shafali/image/upload/v1600344870/the-palm-962785_640_o2hibx.jpg'
        profile='https://res.cloudinary.com/shafali/image/upload/v1600344869/beautiful-1274361_640_t1yghe.jpg
'
        title='Sophia'
      />
      <Story
        image='https://res.cloudinary.com/shafali/image/upload/v1600344869/desert-1654439_640_to6o79.jpg'
        profile='https://res.cloudinary.com/shafali/image/upload/v1600344869/woman-3083390_640_yia6dm.jpg'
        title='Emma'
      />
      <Story
        image='https://res.cloudinary.com/shafali/image/upload/v1600344869/adventure-2151437_640_fbyhcw.jpg'
        profile='https://res.cloudinary.com/shafali/image/upload/v1600344869/portrait-3353699_640_d4tecz.jpg'
        title='Tom'
      />

    </div>
  )
}

export default StoryReel
