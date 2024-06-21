import React, { createContext, useState } from 'react'

const creatingContext = createContext()
function ContextApi(props) {
    const [mealData,setMealData] = useState([])
    const [searchQuery,setSearchQuery] = useState('')
    const [location, setLocation] = useState('indian');

  return (
    <>
      <creatingContext.Provider value={{mealData,setMealData,setSearchQuery,searchQuery,setLocation,location}}>
      {props.children}
      </creatingContext.Provider>
    </>
  )
}

export default ContextApi
export {creatingContext}
