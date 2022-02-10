import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import DiscordLogo from '../public/images/redes/discord.png'
import TwitterLogo from '../public/images/redes/twitter.png'
import OpenseaLogo from '../public/images/redes/opensea.png'


const navbar = ({ classStaking, classShop }) => {
    if (typeof window !== 'undefined') {
        let toggle = document.getElementById("container-boton")
        let menu = document.getElementById("menu-responsive_container")
        function cositas() {
            if (toggle.classList.contains("active")) {
                toggle.classList.remove("active")
                menu.classList.remove("translate")
                
            } else {
                toggle.classList.add("active")
                menu.classList.add("translate")
            }
        }
    }

    //translate

    return (

        <nav>
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
            <div id="container-boton" onClick={() => cositas()} className="container-boton">
                <div className="boton"></div>
            </div>

            <div id="menu-responsive_container" className="responsive-nav_container">
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
            </div>


            <style jsx="true">{`        
            nav{
                width: 100%;
                background-color: #25262A;
                display:flex;
                justify-content: space-between;
                align-items: center;
                height: 120px;
                z-index:160;
            }
            .responsive-nav_container{
                width:100%;
                background-color: #25262A;
                height:100vh;
                position:absolute;
                z-index:150;
                display:none;
                transition: all 0.5s;
            }
            .container-nav{
                display:flex;
                justify-content: space-between;
                align-items: center;
            }
            ul{
                display: flex;
                justify-content: space-around;
                background-color: white;
                width: 520px;
                height: 50px;
                border-radius: 30px;
                margin-right:110px;
            }
            li{
                display: flex;
                align-items: center;
                list-style: none;
                justify-content: space-evenly;
            }
            a{
                text-decoration: none;
                color: black;
                font-size: 1.1rem;
                font-weight: 400;
            }
            a:hover{
                color: #25262A;
            }
            .active-nav{
                position: relative;
            }
            .active-nav::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 5px;
                background-color: $active;
                bottom: 0;
                left: 0;
                top: 33px;
                z-index:510;
            }
            .redes{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                background-color: white;
                width: 220px;
                height: 50px;
                border-radius: 30px;
                position: relative;
                right: 40px;
            }
            .redes a{
                display:flex;
            }
            
                    
            @media(max-width:1024px){
                .container-nav{
                    display: none;
                    z-index:149;
                    li{
                    }
                }
                
                .container-boton{
                    display: flex;
                    z-index:250;
                }
                .responsive-nav_container{
                    display:flex;
                    transform:translateY(-100%);
                    width:100%;
                }
                .translate{
                    transform:translateY(0);
                }
                .menu-responsive_items{
                    width:100%;
                    display:flex !important;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:center;
                }
            }
        `}</style>
        </nav>
    )
};

export default navbar;