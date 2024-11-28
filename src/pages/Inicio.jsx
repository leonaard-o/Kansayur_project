
// INICIO.JSX

import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div>Inicio

        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link>    
    </div>
  )
}
// LOGIN.JSX
import React from 'react'
