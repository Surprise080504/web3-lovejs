import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import DiscordLogo from '../public/images/redes/discord.png'
import TwitterLogo from '../public/images/redes/twitter.png'
import OpenseaLogo from '../public/images/redes/opensea.png'


const navbar = ({classStaking, classShop}) => {
    if (typeof window !== 'undefined') {
        const navItems = document.querySelector(".nav-item");
        const bars = document.querySelectorAll(".ham span")
        //navActive
        //bars
    
        // console.log(connected);
        const responsiveNav = () => {
          navItems.classList.toggle("navActive");
          bars.forEach(child => {child.classList.toggle('animado')});
          // if(ul.classList.contains("navActive")){
          //   ul.classList.remove("navActive");
          // }else{
          //   ul.classList.add("navActive");
          // }
        }
    
    
      }
    return (
        <nav class="nav">
            <div className="logo"></div>

            <div className="container-nav">
                <ul className="nav-item">
                    <li><a href="#">Collection</a></li>
                    <li className={classStaking}><Link href="/staking"><a>Staking</a></Link></li>
                    <li className={classShop}><Link href="/shop"><a >Shop</a></Link></li>
                    <li><a href="#">Downloads</a></li>
                </ul>

                <section className="redes">
                    <a href="#"><Image src={DiscordLogo} alt="facebook" /></a>
                    <a href="#"><Image src={TwitterLogo} alt="twitter" /></a>
                    <a href="#"><Image src={OpenseaLogo} width={40} height={40} alt="opensea" /></a>
                </section>
            </div>
            <button id="container-boton" onClick={() => responsiveNav()} className="ham">
                <span className="br-1"></span>
                <span className="br-2"></span>
                <span className="br-3"></span>
            </button>

            {/* <div id="menu-responsive_container" className="responsive-nav_container">
                <div className="menu-responsive_items">
                    <ul className="nav-item">
                        <li><a href="#">Collection</a></li>
                        <li className={classStaking}><Link href="/staking"><a>Staking</a></Link></li>
                        <li className={classShop}><Link href="/shop"><a>Shop</a></Link></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>

                    <section className="redes">
                        <a href="#"><Image src={DiscordLogo} alt="facebook" /></a>
                        <a href="#"><Image src={TwitterLogo} alt="twitter" /></a>
                        <a href="#"><Image src={OpenseaLogo} width={40} height={40} alt="opensea" /></a>
                    </section>
                </div>
            </div> */}
        </nav>
    )
}

export default navbar;