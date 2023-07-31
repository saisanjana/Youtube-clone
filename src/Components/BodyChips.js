import React from 'react'

const BodyChips = () => {

  const chipsArray = [
    "All",
    "movies",
    "sports",
    "television",
    "news",
    "current affairs",
    "solo",
    "policitics",
    "hyderbad",
    "random",
    "shit",
    "everything",
    "new",
    "hello",
    "world",
    "songs",
    "sad songs",
    "love songs",
    "hero action",
    "harry potter",
    "hellow"
  ]
  return (
    <div className='my-7 ml-9 flex overflow-hidden'>
    {
      chipsArray.map((chip)=>{
        return <div className='m-2 bg-slate-300 py-1 px-2 rounded-md whitespace-nowrap'>
          {chip}
        </div>
      })
    }
    </div>
  )
}

export default BodyChips