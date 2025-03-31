import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { useState } from "react";

export default function SignMsg() {
    const [msg, setMsg] = useState<string>("");
    const { publicKey, signMessage } = useWallet();
    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connceted!')
        if (!signMessage) throw new Error('Wallet does not support message signing!')

        const encodeMsg = new TextEncoder().encode(msg);
        console.log("encodemsg " + encodeMsg);

        const signature = await signMessage(encodeMsg);
        console.log("signature " + signature);

        if (!ed25519.verify(signature, encodeMsg, publicKey.toBytes())) throw new Error('Message signature Invalid!')

        alert('success' + `Message signature ${bs58.encode(signature)}`)



    }
    return (

        <div style={{ width: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

            <input type="text" value={msg} onChange={(e) => (setMsg(String(e.target.value)))} placeholder="Message" />
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
    )
}