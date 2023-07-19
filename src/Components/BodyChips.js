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
    "everything"
  ]
  return (
    <div className='my-7 ml-9 flex'>
    {
      chipsArray.map((chip)=>{
        return <div className='m-2 bg-slate-300 py-1 px-2 rounded-md'>
          {chip}
        </div>
      })
    }
    </div>
  )
}

export default BodyChips