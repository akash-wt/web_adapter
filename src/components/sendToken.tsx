import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";


export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [to, setTo] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    async function sendTokens() {


        const transaction = new Transaction();
        if (!wallet.publicKey) return
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (

        <div>

            <input type="text" onChange={(e) => (setTo(String(e.target.value)))} placeholder="To" />
            <input type="text" onChange={(e) => (setAmount(Number(e.target.value)))} placeholder="Enter amount" />
            <button onClick={sendTokens}>Send</button>
        </div>
    )
}
