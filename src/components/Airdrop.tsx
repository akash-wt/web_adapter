import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState<number>(0);

    async function requestAirdrop() {
        if (!wallet.publicKey) {
            console.log("no public key");

            return;
        }
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL)
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());

    }

    return (
        <div>
            <input type="number" onChange={(e) => (setAmount(Number(e.target.value)))} placeholder="Enter amount" />
            <button type="submit" onClick={requestAirdrop} > Request Airdrop</button>


        </div>
    )
}