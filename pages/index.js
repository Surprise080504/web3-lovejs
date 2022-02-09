import Image from 'next/image'
import Metamask from '../public/images/wallets/metamask.webp'
import Coinbase from '../public/images/wallets/coinbase.png'
import Trustwallet from '../public/images/wallets/trustwallet.svg'

export default function Home() {
  return (
    <form action="" id="container-form">
      <div className="connect-container">
        <div className="container-div">

        <div className="info">
          <h1>Log in with wallet</h1>
        </div>
        <button id="connect" className="btn metamask">
          {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
        alt="metamask logo" width="70px" height="70px"> */}
          <Image className="btn-ico" src={Metamask} width="90px" height="90px" alt=''/>
          <h2>Connect with metamask</h2>
          
        </button>
        {/* <button id="connect" className="btn trustwallet">
          <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" alt="trustwallet logo"
          width="70px" height="70px">
          <Image className="btn-ico" src={Trustwallet} width="60px" height="60px" alt=''/>
          <h2>Connect with Trustwallet</h2>
          </button>
          <button id="connect" className="btn coinbase">
          <img src="https://help.coinbase.com/public-assets/favicons/apple-icon-180x180.png" alt="trustwallet logo"
          width="70px" height="70px">
          <Image className="btn-ico" src={Coinbase} width="60px" height="60px" alt=''/>
          <h2>Connect with CoinBase</h2>
        </button> */}
        </div>
      </div>
    </form>
  )
}