import ReservationCard from "@/app/_components/ReservationCard";

export default function Page() {
    // fecth dans la fake api ou creer object plus tard
    const bookings = [];

    return (
        <div>

            {bookings.length === 0 ? (
                <p className="text-lg">
                    Vous n&#39;avez pas encore de réservation. Consultez notre{" "}
                    <a className="underline text-accent-500" href="/cabins">
                        cabines de luxe &rarr;
                    </a>
                </p>
            ) : (
                <ul className="space-y-6">
                    {bookings.map((booking) => (
                        <ReservationCard booking={booking} key={booking.id} />
                    ))}
                </ul>
            )}
        </div>
    );
}
