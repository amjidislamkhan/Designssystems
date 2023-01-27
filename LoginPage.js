import React, { useState } from 'react';
import { useWeb3 } from 'web3-react';
import { ethers } from 'ethers';

import './LoginPage.css';

const LoginPage = () => {
  const [walletType, setWalletType] = useState(null);
  const { active, connect } = useWeb3();

  const handleConnect = async () => {
    if (!active) {
      const provider = await ethers.getDefaultProvider('ropsten');
      connect(provider, walletType);
    }
  };

  return (
    <div className="login-page">
      <header>
        <h1>My Dapp</h1>
      </header>
      {active ? (
        <div>
          <h2>Connected to {walletType}</h2>
          <button onClick={() => setWalletType(null)}>Disconnect</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setWalletType('metamask')}>Connect with Metamask</button>
          <button onClick={() => setWalletType('phantom')}>Connect with Phantom</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
