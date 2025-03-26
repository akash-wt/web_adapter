
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,

} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';

function App() {


  return (
    <ConnectionProvider endpoint="https://solana-devnet.core.chainstack.com/819be5176eed5a5d9249ab2905cd89ba">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>

          <WalletMultiButton />
          <WalletDisconnectButton />
         
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
