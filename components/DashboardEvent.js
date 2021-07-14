import Link from "next/link";
import styles from "@/styles/DashboardEvent.module.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function DashboardEvent({ event, handleDelete }) {
    return (
        <div className={styles.event}>
            <h4>
                <Link href={`/events/${event.slug}`}>
                    <a> {event.name} </a>
                </Link>
            </h4>
            <Link href={`/events/edit/${event.id}`}>
                <a className={styles.edit}>
                    <FaPencilAlt /> <span>Edit Event</span>
                </a>
            </Link>
            <a className={styles.delete} onClick={() => handleDelete(event.id)}>
                <FaTimes /> <span>Delete Event</span>
            </a>
        </div>
    );
}
