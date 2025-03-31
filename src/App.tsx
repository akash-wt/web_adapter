import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './componenets/RequestAirdrop';
import SendToken from './componenets/sendToken';
import SignMsg from './componenets/SignMsg';


function App() {


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/6AmDWOqyYR46J3sGghnHIkg_04v5YzZb"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ width: "100vh", display: "flex", justifyContent: "space-around", alignItems: "center" }} >

            <WalletMultiButton />
            <WalletDisconnectButton />

          </div>
          <br /><br />
          <RequestAirdrop />
          <SendToken />
          <SignMsg />


        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
