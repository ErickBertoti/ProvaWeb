import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

const Navbar = () => {
  return (
    <header>

      <h2>MyFinace</h2>
      
        <nav>
            <Link to="/">Home</Link>
            <Link to="/transacoes">Transações</Link>
        </nav>
    </header>

  )
}

export default Navbar