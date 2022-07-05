import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a class="navbar-brand" href="#">Navbar</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/">
              <a class="nav-link">Home <span   class="sr-only">(current)</span></a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact">
                <a class="nav-link">Contact</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <a class="nav-link">Login</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup">
                <a class="nav-link">Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar