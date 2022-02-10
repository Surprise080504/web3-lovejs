import React from 'react';
import Navbar from '../components/navbar.js'
const requestForm = () => {
  return (
    <main className="main">
      <Navbar
        classShop="nav-active"
      />
      <article className="article">

      <div className="article-subcontainer">
        <div className="header">
          <h1>Request Form</h1>
        </div>
        <form className="form" action="">
          {/* <input className="input input-name" placeholder="Name" id="name" type="text" /> */}
          <label className="label" htmlFor="">Opensea profile URL<input placeholder="https://opensea.io/Geralt" className="input input-opensea_id" id="opensea-tag" type="text" />
          </label>
          <label className="label" htmlFor="">Discord Name<input className="input input-discordName" placeholder="Geralt#3389" id="discord-nickname" type="text"/>
          </label>
          <button className="input input-submit" type="submit">Send</button>
        </form>
      </div>
      </article>
    </main>    
  )
};

export default requestForm;
