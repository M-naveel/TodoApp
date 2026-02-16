import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../app/features/todo/todoSlice'
function FilterButton() {
  const dispatch = useDispatch();

  
    return (
    <>
    <div className="filter flex items-center gap-2">
      <h3 className='text-white'>Filter</h3>
            <button
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={()=> dispatch(setFilter("all"))}
            >All</button>
            <button 
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            
            onClick={()=> dispatch(setFilter("Completed"))} 
            >Completed</button>
            <button
             className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            
            onClick={()=> dispatch(setFilter("incompleted"))}
            >
                Incomplete
            </button>
        </div>    
    </>
  )
}

export default FilterButton
