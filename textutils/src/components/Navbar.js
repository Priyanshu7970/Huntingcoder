import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
        {/* <htmlForm className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </htmlForm> */} 
        <div class={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.greenMode}/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label>
</div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable Dark mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
// This is htmlFor check if you put the title as number then it will give you error if you will not use this you will not see any error then it can be a risk .
Navbar.propTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string} 

// ---------------------------------------------------------------------------------------
// WE can set the default props means if you have not set anything it will show this 
    Navbar.defaultProps = {
        title: 'Set title here',
        aboutText: 'About'
      }

// -----------------------------------------------------------------------------------------

    //   we can set  the prop compulsary  means you must fill this  but htmlFor this you have to remove the default props otherwise it will not show any error
    Navbar.propTypes = {
        title:PropTypes.string.isRequired ,
        aboutText:PropTypes.string.isRequired
    }