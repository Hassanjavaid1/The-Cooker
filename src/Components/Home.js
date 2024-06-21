import React, { useContext } from 'react'
import demo_img from './demo_img.jpg'
import { creatingContext } from './ContextApi'
import preLoad from './cooking_preLoad.png'
function Home() {
    const {mealData,location} = useContext(creatingContext)
  return (
    <>
      <div className="container px-8 py-8">
        <h2 className=' text-3xl font-[sans-serif]'>{location || 'Random'} Meals!</h2>
        <div className="content mt-8 flex justify-center gap-8 flex-wrap gap-y-12">
            {
              mealData == null || mealData == undefined?(
                <h1>Opps somthing went wrong!</h1>
              ):(
                mealData.map(({strMeal,strMealThumb,idMeal})=>(
                <div key={idMeal} className="meal_box flex flex-col justify-center">
                    <img src={strMealThumb == null  || strMealThumb == undefined || strMealThumb == ''?preLoad:strMealThumb} alt="" className='w-[16rem]'/>
                    <h4 className="title font-sans text-lg">{strMeal}</h4>
                </div>
                ))

              )
            
            }
        </div>
      </div>
    </>
  )
}

export default Home
