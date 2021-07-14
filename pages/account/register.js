import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/AuthForm.module.css";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const { register, error } = useContext(AuthContext);

    useEffect(() => {
        error && toast.error(error);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            toast.error("Passwords Do Not Match!");
            return;
        }
        register({ username, email, password });
    };
    return (
        <Layout title="User Registration">
            <div className={styles.auth}>
                <h1>
                    <FaUser /> Register
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">User Name </label>
                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Adress </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password </label>
                        <input
                            // autoComplete="current-password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">
                            Confirm Password
                        </label>
                        <input
                            // autoComplete="current-password"
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Register" className="btn" />
                </form>
                <p>
                    Already have an account
                    <Link href="/account/login"> Log In</Link>
                </p>
            </div>
        </Layout>
    );
}
