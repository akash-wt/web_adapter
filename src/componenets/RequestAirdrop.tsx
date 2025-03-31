import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react"
import ShowBal from "./ShowBal";


export default function RequestAirdrop() {
    const [amount, setAmount] = useState<number>();
    const wallet = useWallet();
    const { connection } = useConnection();
    async function Airdrop() {
        console.log(`Requesting airdrop for ${wallet.publicKey.toBase58()}`);

        const signature = await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);

        console.log(`Airdrop requested: https://solscan.io/tx/${signature}`);
        alert("Airdrop successful! Check Solscan for details.");

    }
    return (
        <>
            <div style={{ width: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <input type="number" name="amount" id="amount" value={amount} onChange={(e) => { setAmount(Number(e.target.value)) }} />
                <br />
                <button onClick={Airdrop}>Request Airdrop</button>
            </div>

            Balance : {<ShowBal />
            }</>

    )
}