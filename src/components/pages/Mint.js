
import React, { useEffect, useState } from "react";

//Assets
import otterPic from '../../assets/resized_otter_demo.gif';
//Web 3
import Web3 from "web3";
import contract from '../../contracts/contract.json';
const initialInfoState = {
  connected: false,
  status: null,
  account: null,
  web3: null,
  contract: null,
  address: null,
  contractJSON: null,
};

const initialMintState = {
  loading: false,
  status: `Mint your ${contract.name}`,
  amount: 1,
  supply: "0",
  cost: "0",
};

export default function Mint() {
  //#region JS

  const [info, setInfo] = useState(initialInfoState);
  const [mintInfo, setMintInfo] = useState(initialMintState);

  console.log(info);

  const init = async (_request, _contractJSON) => {
    if (window.ethereum.isMetaMask) {
      try {
        const accounts = await window.ethereum.request({
          method: _request,
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        if (networkId == _contractJSON.chain_id) {
          let web3 = new Web3(window.ethereum);
          setInfo((prevState) => ({
            ...prevState,
            connected: true,
            status: null,
            account: accounts[0],
            web3: web3,
            contract: new web3.eth.Contract(
              _contractJSON.abi,
              _contractJSON.address
            ),
            contractJSON: _contractJSON,
          }));
        } else {
          setInfo(() => ({
            ...initialInfoState,
            status: `Change network to ${_contractJSON.chain}.`,
          }));
        }
      } catch (err) {
        console.log(err.message);
        setInfo(() => ({
          ...initialInfoState,
        }));
      }
    } else {
      setInfo(() => ({
        ...initialInfoState,
        status: "Please install metamask.",
      }));
    }
  };

  const initListeners = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  };

  const getSupply = async () => {
    const params = {
      to: info.contractJSON.address,
      from: info.account,
      data: info.contract.methods.totalSupply().encodeABI(),
    };
    try {
      const result = await window.ethereum.request({
        method: "eth_call",
        params: [params],
      });
      //console.log(info.web3.utils.hexToNumberString(result));
      setMintInfo((prevState) => ({
        ...prevState,
        supply: info.web3.utils.hexToNumberString(result),
      }));
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        supply: 0,
      }));
    }
  };

  const getCost = async () => {
    const params = {
      to: info.contractJSON.address,
      from: info.account,
      data: info.contract.methods.cost().encodeABI(),
    };
    try {
      const result = await window.ethereum.request({
        method: "eth_call",
        params: [params],
      });
      //console.log(info.web3.utils.hexToNumberString(result));
      setMintInfo((prevState) => ({
        ...prevState,
        cost: info.web3.utils.hexToNumberString(result),
      }));
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        cost: "0",
      }));
    }
  };

  const mint = async () => {
    const params = {
      to: info.contractJSON.address,
      from: info.account,
      value: String(
        info.web3.utils.toHex(Number(mintInfo.cost) * mintInfo.amount)
      ),
      data: info.contract.methods
        .mint(mintInfo.amount)
        .encodeABI(),
    };
    try {
      setMintInfo((prevState) => ({
        ...prevState,
        loading: true,
        status: `Minting ${mintInfo.amount}...`,
      }));
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [params],
      });
      setMintInfo((prevState) => ({
        ...prevState,
        loading: false,
        status:
          "Nice! Your NFT will show up on Opensea, once the transaction is successful.",
      }));
      getSupply();
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        loading: false,
        status: err.message,
      }));
    }
  };

  const updateAmount = (newAmount) => {
    if (newAmount <= 5 && newAmount >= 1) {
      setMintInfo((prevState) => ({
        ...prevState,
        amount: newAmount,
      }));
    }
  };

  const connectToContract = (_contractJSON) => {
    init("eth_requestAccounts", _contractJSON);
  };

  useEffect(() => {
    connectToContract(contract);
    initListeners();
  }, []);

  useEffect(() => {
    if (info.connected) {
      getSupply();
      //console.log("getSupply worked correctly");
      getCost();
      //console.log("getCost worked correctly");
    }
  }, [info.connected]);
  //#endregion
  return (
    <section id="mint" className="mint-bg">
      <h1 className='reveal gradient-text h1-page' ><i className='fa-solid fa-otter' />   Mint</h1>
      <div className="page-mint reveal">
        <div className="card-mint reveal">
          <div className="card-mint_header colorGradient-mint">
            <img className="card-mint_header_image selector ns" alt={"banner"} src={otterPic} />
          </div>
          {mintInfo.supply < contract.total_supply ? (
            <div className="card-mint_body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  disabled={!info.connected || mintInfo.cost === "0"}
                  className="small_button"
                  onClick={() => updateAmount(mintInfo.amount - 1)}
                >
                  -
                </button>
                <div style={{ width: 10 }}></div>
                <button
                  disabled={!info.connected || mintInfo.cost === "0"}
                  className="button"
                  onClick={() => mint()}
                >
                  Mint {mintInfo.amount}
                </button>
                <div style={{ width: 10 }}></div>
                <button
                  disabled={!info.connected || mintInfo.cost === "0"}
                  className="small_button"
                  onClick={() => updateAmount(mintInfo.amount + 1)}
                >
                  +
                </button>
              </div>
              {info.connected ? (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ color: "var(--statusText)", textAlign: "center" }}>
                    {info.web3?.utils.fromWei(mintInfo.cost, "ether") *
                      mintInfo.amount}{" "}
                    {contract.chain_symbol}
                  </p>
                  <div style={{ width: 20 }}></div>
                  <p style={{ color: "var(--statusText)", textAlign: "center" }}>
                    |
                  </p>
                  <div style={{ width: 20 }}></div>
                  <p style={{ color: "var(--statusText)", textAlign: "center" }}>
                    {mintInfo.supply}/{contract.total_supply}
                  </p>
                </div>
              ) : null}
              {mintInfo.status ? (
                <p className="statusText">{mintInfo.status}</p>
              ) : null}
              {info.status ? (
                <p className="statusText" style={{ color: "var(--error)" }}>
                  {info.status}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="card-mint_body">
              <p style={{ color: "var(--statusText)", textAlign: "center" }}>
                {mintInfo.supply}/{contract.total_supply}
              </p>
              <p className="statusText">
                We've sold out! .You can still buy and trade the {contract.name}{" "}
                on marketplaces such as Opensea.
              </p>
            </div>
          )}
          <div className="card-mint_footer colorGradient">
            <button
              className="button"
              style={{
                backgroundColor: info.connected
                  ? "var(--success)"
                  : "var(--warning)",
              }}
              onClick={() => connectToContract(contract)}
            >
              {info.account ? "Connected" : "Connect Wallet"}
            </button>
            {info.connected ? (
              <span className="accountText">
                {String(info.account).substring(0, 6) +
                  "..." +
                  String(info.account).substring(38)}
              </span>
            ) : null}
          </div>
          <a
            style={{
              position: "absolute",
              bottom: 55,
              left: -75,
            }}
            className="_90 gradient-text"
            target="_blank"
            href="https://testnet.snowtrace.io/address/0xEFf24E460983C9C581B184F6b8947FBdfA31544C"
            rel="noopener noreferrer"
          >
            View Contract
          </a>
        </div>
      </div>

      {/* <div className="flat-horizontal-line gradient-text"></div> */}
    </section>
  );
}
//FUJI https://testnet.snowtrace.io/address/0x02666F88BC8782E177b17acE004093018cE38938
//Kovan new https://kovan.etherscan.io/tx/0xa0558b4d3262898af7c42862bc6e9bd3728698cf5c9cc1d8b3e3ff17c9c79985
//Old demo contract
//href="https://mumbai.polygonscan.com/address/0x2011Cb2fBB787752d95E369A63629567a013fD8F"