import Link from "next/link";
import { useContext } from "react";
import Search from "./Search";
import styles from "@/styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";

export default function Header() {
    const { user, logout } = useContext(AuthContext);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">DJ Event</Link>
            </div>
            <Search />
            <nav>
                <ul>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>

                    {user ? (
                        <>
                            <li>
                                <Link href="/events/add">Add Events</Link>
                            </li>
                            <li>
                                <Link href="/account/dashboard">Dashboard</Link>
                            </li>
                            <button
                                className="btn-secondary btn-icon"
                                onClick={() => logout()}
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/account/login">
                                    <a className="btn-secondary btn-icon">
                                        <FaSignInAlt /> Login
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
