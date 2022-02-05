import React, { useEffect, useState } from "react";
import '../../App.css';
import '../Button.css';
import { ethers } from "ethers";
import myEpicNft from '../../utils/MyEpicNFT.json';

export default function Mint() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }

  return <div className="center box gradient-text">
    <p className="header gradient-text">Otter Society</p>
    <p className="sub-text">Each unique. Each beautiful. Discover your NFT today.</p>
    <button className="btn--outline">mint</button>
  </div>
}
