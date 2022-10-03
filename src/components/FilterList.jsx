import React from 'react'

const FilterList = ({suggestedList, setSearchImput}) => {
   
  console.log(suggestedList)

const handleClick = id => setSearchImput(id)  



    
  return (
    <ul className='filter'>
     {
         suggestedList?.map(location => ( 
           <li onClick={() => handleClick(location.id)} key={location.id}>{location.name} </li>
            
        ))
     }
    </ul>
  )
}

export default FilterList
