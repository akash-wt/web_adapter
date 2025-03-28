
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,

} from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import { ShowBalance } from './components/ShowSolBalance';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { SignMessage } from './components/signMessage';
import { SendTokens } from './components/sendToken';
function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <WalletMultiButton />
            <WalletDisconnectButton />

          </div>
          <hr />
          <Airdrop></Airdrop>
          <hr />
          <ShowBalance />
          <hr />
          <SignMessage />
          <hr />
          <SendTokens />
          <hr />

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
