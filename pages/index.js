import { useState,useEffect } from 'react';
import Image from 'next/image'
import Metamask from '../public/images/wallets/metamask.webp'
import Coinbase from '../public/images/wallets/coinbase.png'
import Trustwallet from '../public/images/wallets/trustwallet.svg'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  const [address, setAddress] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('address')){
      router.push(`/requestform`)
    }
  }, [])
      

  const connectToMetamask = async (e) => {
    e.preventDefault();
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        localStorage.setItem('address', accounts[0])
        router.push(`/requestform`)
      }).catch((err) => console.log(err))
      : console.log("Please install MetaMask")
  }
  console.log(address)



  return (
    <form action="" id="container-form">
      <div className="connect-container">
        <div className="container-div">
        
          <div className="info">
            <h1>Log in with wallet</h1>
          </div>
          <button onClick={connectToMetamask} id="connect " className="btn metamask">
            <Image className=" btn-ico" src={Metamask} width="90px" height="90px" alt='' />
            <h2>Connect with metamask</h2>
          </button>
          <button id="connect" className="btn trustwallet">
              <Image className="btn-ico" src={Trustwallet} width="60px" height="60px" alt='' />
              <h2>Connect with Trustwallet</h2>
          </button>
          <button id="connect" className="btn coinbase">
              <Image className="btn-ico" src={Coinbase} width="60px" height="60px" alt='' />
              <h2>Connect with CoinBase</h2>
          </button>
        </div>
      </div>
    </form>
  )
}