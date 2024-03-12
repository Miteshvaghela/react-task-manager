import React from 'react'

function Footer({text}) {
  return (
    <footer>
        <div className="row">
            <span className="text-center">
            {text}
            </span>
        </div>
    </footer>
  )
}

export default Footer