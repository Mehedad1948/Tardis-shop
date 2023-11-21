import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import LinkButton from '../atoms/buttons/link-button';
export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const subscribe = async () => {
        setSuccess("");
        setError("");
        try {
            setLoading(true);
            const { data } = await axios.post("/api/newsletter", { email });
            setSuccess(data.message);
            setLoading(false);
            setEmail("");
        } catch (error) {
            setSuccess("");
            setLoading(false);
            setError(error.response.data.message);
        }
    };
    return (
        <div className='mt-2.5 flex flex-col gap-2'>
            <h3>SIGN UP FOR OUR NEWSLETTER</h3>
            <div className='flex items-center gap-4'>
                <input
                    className='rounded-md border w-full max-w-lg'
                    type="text"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LinkButton
                    className={`${loading ? "cursor-not-allowed" : ""}`}
                    disbaled={loading === true}
                    onClick={() => subscribe()}
                >
                    SUBSCRIBE
                </LinkButton>
            </div>
            {loading && <div className="">loading...</div>}
            {error && <div className="text-rose-500">{error}</div>}
            {success && <div className="text-emerald-600">{success}</div>}
            <p>
                By clicking the SUBSCRIBE button, you are agreeing to{" "}
                <Link href="">our Privacy & Cookie Policy</Link>
            </p>
        </div>
    );
}
