import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function ShowBal() {
    const [balance, setBalance] = useState<number | null>(null);
    const { publicKey } = useWallet();
    const { connection } = useConnection();

    useEffect(() => {
        async function fetchBalance() {
            if (!publicKey) {
                setBalance(null);
                return;
            }
            try {
                const lamports = await connection.getBalance(publicKey);
                setBalance(lamports / LAMPORTS_PER_SOL); 
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        }
        fetchBalance();
    }, [publicKey, connection]);

    return (
        <div>
            {publicKey ? (
                <p>Balance: {balance !== null ? `${balance} SOL` : "Loading..."}</p>
            ) : (
                <p>Connect your wallet to see balance</p>
            )}
        </div>
    );
}
