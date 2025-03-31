import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import { useState } from "react";

export default function SendToken() {

    const [amount, setAmount] = useState<number>();
    const [toPublicKey, setToPublicKey] = useState<string>(null);

    const wallet = useWallet();
    const { connection } = useConnection();
    async function send() {


        const transcation = new Transaction();
        transcation.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(toPublicKey),
            lamports: amount * LAMPORTS_PER_SOL,
        }))

        await wallet.sendTransaction(transcation, connection);
        alert("send amount " + amount + "Sol to " + toPublicKey);


    }
    return (

        <div style={{ width: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          
            <input type="number" name="amount" id="amount" value={amount} onChange={(e) => { setAmount(Number(e.target.value)) }} placeholder="amount" />
            <input type="text" name="toPublicKey" id="toPublicKey" value={toPublicKey} onChange={(e) => { setToPublicKey(String(e.target.value)) }} placeholder="To" />
            <br />
            <button onClick={send}>Send token</button>
        </div>



    )
}