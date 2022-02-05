import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardText from './CardText';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the rarest Otters!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/demo_otter.png'
              text='Rare %1'
              label='Adventure'
            />
            <CardItem
              src='images/demo_otter.png'
              text='Rare %3'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/demo_otter.png'
              text='Rare %5'
              label='Mystery'
            />
            <CardItem
              src='images/demo_otter.png'
              text='Rare %13'
              label='Adventure'
            />
            <CardItem
              src='images/demo_otter.png'
              text='Rare %6'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <h1>Frequently Asked Questions</h1>
        <CardText
          title=""
          text=""
        />
        <CardText
          title="What is an NFT ?"
          text="NFT stands for 'non-fungible token'.

        A NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique.
        
        A NFT can, for example, represent a unique piece of art or a game token"

        />
        <CardText
          title="How can I get an NFT ?"
          text="You will be able to mint your NFT to our smart contract through our website on our initial sale.

        At the time of purchase, a randomly selected NFT will be minted on the blockchain and delivered to your wallet and OpenSea account.
        
        Once the public sale is closed, you can get a Otter on the secondary market (on OpenSea)..
        "
        />
        <CardText
          title="How to purchase one ?"
          text="The easiest way is to install a MetaMask extension in your Chrome browser and link your Ethereum wallet to it.

        Ensure you have enough ETH in your wallet to cover the cost of a NFT plus the associated transaction (gas) fees.
        
        Approve the transaction on MetaMask and you are all set.
        
        The Otters Society will be available to mint on our official website."
        />
        <CardText
          title="What is the total supply?"
          text="10,000 unique Otters will be created"
        />
        <CardText
          title="How much does it cost to mint an NFT?"
          text="The Price of Minting for Public Sales will be announced soon."
        />
        <CardText
          title="Where can I View my NFT ?"
          text="Once minted, you'll just need to login into your OpenSea account to view your NFTs."
        />
      </div>
    </div>
  );
}

export default Cards;
