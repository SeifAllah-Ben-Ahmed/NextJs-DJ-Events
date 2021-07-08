import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Event 2021</p>
            <Link href="/about">About This Project</Link>
        </footer>
    );
}
