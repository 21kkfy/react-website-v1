import React from 'react';
import '../styles/Cards.css';
import '../styles/App.css';
import CardItem from './CardItem';
import CardText from './CardText';

function Cards() {
  return (
    <section id="team">
      <div className='cards'>
        <h1 className='reveal gradient-text h1-page' ><i className='fa-solid fa-otter' />   Team</h1>
        <div className='cards__container'>
          <div className='cards__wrapper reveal'>
            <ul className='cards__items'>
              <CardItem
                src='images/warthu.png'
                name='Warthu'
                about1="Founder & Manager"
                about2="Has a Pink Floyd record"
                about3="Crypto investor since 2015"
                twitter="OtterWarthu_"
              />
              <CardItem
                src='images/skipper.png'
                name='Skipper'
                about1="Cartoon and Animation Student"
                about2="Cartoon Designer"
                about3="Animation Artist logo and Cover Designer"
                twitter="os_skipper"
              />
              <CardItem
                src='images/robbo.jpg'
                name='Robbo'
                about1="Software Engineering student"
                about2="WEB 3.0 DEV"
                about3="Hardware and Math enthusiast"
                twitter="OtterRobbo"
              />
              <CardItem
                src='images/reed.png'
                name='Reed'
                about1="Event Manager since 2015"
                about2=""
                about3=""
                twitter="os_reed"
              />
              <CardItem
                src='images/rushc.png'
                name='RushC.'
                about1="Social Media Expert"
                about2=""
                about3=""
                twitter="otterushcutter"
              />
            </ul>
          </div>
        </div>

        <div className="flat-horizontal-line gradient-text"></div>
        <div id="faq" className="cards__container">
          <h1 className='reveal gradient-text h1-page' ><i className='fa-solid fa-otter' />   FAQ</h1>
          <ul className='reveal'>
            <CardText
              title="What is an NFT?"
              text="NFT stands for 'Non-Fungible Token'.
          An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique.
          An NFT can, for example, represent a unique piece of art or simply a game token."
              id="1"
            />
            <CardText
              title="What is a crypto wallet?"
              text="A crypto wallet is an interface that lets you interact with your blockchain assets — Crypto assets are essentially data on the blockchain.
          "
              id="2"
            />
            <CardText
              title="How to mint an NFT?"
              text="You will be able to mint your Otter Society NFT through our smart contract on our website website's mint page.
        At the time of purchase, a randomly selected NFT will be minted on the Ethereum blockchain and delivered to your crypto wallet.
        "
              id="3"
            />
            <CardText
              title="How to purchase an already minted NFT?"
              text="Once the minting process is over and the limit for NFTs are reached, you can get an Otter Society NFT on the secondary markets such as OpenSea or Rarible."
              id="4"
            />
            <CardText
              title="What is the total supply for Otter Society Collection?"
              text="10.000 Otter Society NFTs will be created!"
              id="5"
            />
            <CardText
              title="How much does it cost to mint an Otter Society NFT?"
              text="Prices will be announced in the upcoming months."
              id="6"
            />
            <CardText
              title="Where can I see my NFT?"
              text="Once minted, you'll just need to login into your OpenSea account to view your NFTs."
              id="7"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cards;
