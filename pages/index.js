

export default function Home() {
  return (
<form action="" id="container-form">
      <div className="info">
      </div>
      <div id="connect" className="metamask">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
          alt="metamask logo" width="70px" height="70px"> */}
        <h1>Connect with metamask</h1>
      </div>
      <div id="connect" className="metamask">
        {/* <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" alt="trustwallet logo"
          width="70px" height="70px"> */}
        <h1>Connect with Trustwallet</h1>
      </div>
      <div id="connect" className="metamask">
        {/* <img src="https://help.coinbase.com/public-assets/favicons/apple-icon-180x180.png" alt="trustwallet logo"
          width="70px" height="70px"> */}
        <h1>Connect with CoinBase</h1>
      </div>
    </form>
  )
}