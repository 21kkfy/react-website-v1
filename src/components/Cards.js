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
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/hero.2d91f325.png'
                text='Warthu'
                label='Manager'
              />
              <CardItem
                src='images/hero.2d91f325.png'
                text='Robbo'
                label='Developer'
              />
              <CardItem
                src='images/hero.2d91f325.png'
                text='Otto'
                label='Community
              Manager'
              />
            </ul>
            <ul className='cards__items reveal'>
              <CardItem
                src='images/hero.2d91f325.png'
                text='Skipper'
                label='Designer'
              />
              <CardItem
                src='images/hero.2d91f325.png'
                text='Reed'
                label='Event Manager'
              />
              <CardItem
                src='images/hero.2d91f325.png'
                text='RushC.'
                label='Social Media Expert'
              />
            </ul>
          </div>
        </div>

        <div className="flat-horizontal-line gradient-text"></div>
        <div id="faq" className="cards__container">
          <h1 className='reveal gradient-text h1-page' ><i className='fa-solid fa-otter' />   FAQ</h1>
          <ul>
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
