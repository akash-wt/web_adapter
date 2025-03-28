import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [amount, setAmount] = useState<number>(0);

    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            setAmount(balance / LAMPORTS_PER_SOL);
        }

    }
    useEffect(() => {
        getBalance();
    }, [wallet.publicKey, connection]);

    return <div>
        SOL Balance : {amount}
    </div>
}