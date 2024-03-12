import React from 'react'

function Header({title, btnData, toggleForm}) {
  return (
    <header className='d-flex justify-content-between'>
        <div className="left"><h2>{ title }</h2></div>
        <div className="right"><button class={`btn text-light`} style={{backgroundColor:`${btnData.color}`}} onClick={toggleForm}>{btnData.text}</button></div>
    </header>
  )
}

export default Header