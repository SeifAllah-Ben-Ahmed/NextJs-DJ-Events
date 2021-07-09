import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function EventPage({ event }) {
    const deleteEvent = (e) => {
        console.log("delete");
    };
    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/event/edit/${event.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Event
                        </a>
                    </Link>
                    <a className={styles.delete} onClick={deleteEvent}>
                        <FaTimes /> Delete Event
                    </a>
                </div>
            </div>
            <span>
                {event.date} at {event.time}
            </span>
            <h1>{event.name}</h1>

            {event.image && (
                <div classname={styles.image}>
                    <Image src={event.image} width={960} height={600} />
                </div>
            )}
            <h3>Performers :</h3>
            <p>{event.performers}</p>
            <h3>Description:</h3>
            <p> {event.description} </p>
            <h3> Venue:</h3>
            <p> {event.venue} </p>
            <p> {event.address} </p>
            <Link href="/events">
                <a className={styles.back}>{"<"} Go Back</a>
            </Link>
        </Layout>
    );
}
// export async function getServerSideProps({ query: { slug } }) {
//     const res = await fetch(`${API_URL}/api/events/${slug}`);
//     const event = await res.json();
//     return {
//         props: { event: event[0] },
//     };
// }

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();
    const paths = events.map((event) => ({
        params: { slug: event.slug },
    }));
    return {
        paths,
        fallback: true, //false : if notFound redirect to 404page
    };
}
export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const event = await res.json();

    return {
        props: { event: event[0] },
        revalidate: 1,
    };
}
