import React, { Component, useState } from 'react'


function useForm () {
    const [state, setstate] = useState({})

    
    const HandleChange =(e) =>{
        setstate(state=>(
          {
            ...state,
            [e.target.name]:e.target.value
          }
        ))
        
      }

      console.log(state)
      return [state, HandleChange]

}

export default useForm