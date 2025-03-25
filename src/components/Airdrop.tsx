import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';


export default function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState<number>(0);
    async function sendAirdrop() {
        if (!wallet.publicKey) {
            console.log("no public key");

            return;
        }

        try {

            const res = await connection.requestAirdrop(wallet.publicKey, amount * 10 ** 9);
            console.log("res :", res);
            alert("airdrop " + amount)

        } catch (e) {

            console.error(e);
        }
    }

    return (
        <div>
            <input type="number" onChange={(e) => (setAmount(Number(e.target.value)))} placeholder="Enter amount" />
            <button type="submit" onClick={sendAirdrop} > Send Airdrop</button>
 

        </div>
    )
}