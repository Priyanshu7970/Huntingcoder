import React from 'react'

export default function Alert(props) { 
  const capitalize = (word)=>{
     const lower = word.toLowerCase(); 
     return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return ( 
    // if the props.alert is not null then it will run this other wise it will not do anything
  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>
  )
}
