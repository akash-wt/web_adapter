import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useState } from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [msg, setMsg] = useState<string>("");
    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');


        const encodedMessage = new TextEncoder().encode(msg);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success' + `Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div>
            <input type="text" onChange={(e) => (setMsg(String(e.target.value)))} placeholder="To" />
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
    );
};