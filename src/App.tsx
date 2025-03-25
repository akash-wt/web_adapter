import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';

function App() {


  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/-HbMyyXskgweOHG97L3XM2Xx2zObO-Bz">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>

          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>
            hi there
          </div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
