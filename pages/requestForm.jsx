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
          <input placeholder="Opensea name" className="input input-opensea_id" id="opensea-tag" type="text" />
          <div className="discord-container">
            <input className="input input-discord_name" placeholder="Discord name" id="discord-name" type="text" />
            <input className="input input-discord_tag" placeholder="Discord tag" id="discord-tag" type="number" min="1" max="9999" />
          </div>
          <button className="input input-submit" type="submit">Send</button>
        </form>
      </div>
      </article>
    </main>    
  )
};

export default requestForm;
