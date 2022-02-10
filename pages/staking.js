import React from 'react';
import Navbar from '../components/navbar'
import Image from 'next/image'

import ClaimButtom from '../public/images/assets/claim.png'

const staking = () => {
  return (
    <div>
      <Navbar
      classStaking = "nav-active"
      />

      <div className="staking-container">
        <h1>$LOVE</h1>
        <h2 className="subtitle">The Lonely Hearts Club Utility Token</h2>

        <div className="text">
          <p>Our vision for The Lonely Hearts Club goes beyond just having the sexiest PFP aroud</p>
          <p>We also want to leverage our technical skills to fully ebrace the blockchain ethos and</p>
          <p>deliver unrivaled utility for our community.</p>
        </div>

        <div className="wallet-info_container">
          <div className="wallet-info">
            <h4>Wallet Balance</h4>
            <h5>$0</h5>
          </div>

          <div className="hearth-claim">
            <Image src={ClaimButtom} width="300px" height="300px" alt="claim-btn" />
          </div>

          <div className="wallet-claim">
            <h4>Avaiable to claim</h4>
            <h5>$78</h5>
          </div>
        </div>

        <h2 className="subtitle-wallet">The first step towards that goal is the launch of the Lonely Hearts Club utility token, $LOVE. The token will be an integral part of the mechanics that are coming to the Lonely Hearts Club.</h2>

        <section className="staking-info_container">
          <h2>Spreading the $LOVE</h2>
          <div className="staking-text">
            <div className="hearth"></div>
            <p>Upon release, every Genesis Lovely Heart holder will be able to claim 100 $LOVE tokens per NFT held.</p>
          </div>
          <div className="staking-text">
            <div className="hearth"></div>
            <p>After the initial distribution. Every Lonely Heart that has
              been staked will generate 10 $LOVE tokens per day and
              can be claimed at the holders discretion.</p>
          </div>
          <div className="staking-text"></div>
            <div className="hearth">
            <p>Holders will be able to use their $LOVE tokens to buy
              items in the shop such as love potions and NFTs.
            </p>
          </div>
        </section>

        <h2 className="text-warning">$LOVE is NOT an investment and has NO economic value. It will be earned by active
          participation within the Lonely Hearts Club ecosystem. Each Lonely Heart will be
          eligible to claim tokens at a rate of 10 $LOVE per day.</h2>
          <h2 className="text-warning"> 36,500,000 tokens will be generated annually. Lonely Heart will also be able to
          claim 100 $VOLT tokens each in the initial drop. Additionally, 10,000,000 tokens will be
          allocated to the team for supplemental community rewards.</h2>

        <div className="earn-container">

            <h2>How to earn $LOVE</h2>
          <div className="first-container">
            <div className="earn-container_info">
              <div className="earn-container_icon-first"></div>
              <p>Staking</p>
            </div>
            <div className="earn-container_info">
              <div className="earn-container_icon-second"></div>
              <p>Discord Activity</p>
            </div>
            <div className="earn-container_info">
              <div className="earn-container_icon-third"></div>
              <p>Giveaways</p>
            </div>
          </div>

          <h2>How to spend $LOVE</h2>
          <div className="second-container">
            <div className="earn-container_info">
              <div className="earn-container_icon-first"></div>
              <p>Buy Love Potions</p>
            </div>

            <div className="earn-container_info">
              <div className="earn-container_icon-second"></div>
              <p>Buy NFTs</p>
            </div>

            <div className="earn-container_info">
              <div className="earn-container_icon-third"></div>
              <p>Buy Merchandise</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default staking;
