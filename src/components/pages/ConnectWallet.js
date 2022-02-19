import '../../styles/App.css';



async function ConnectWallet() {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("No crypto wallet has been detected.");
      return;
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected", accounts[0]);
  } catch (error) {
    console.log(error)
  }
}

export default ConnectWallet;