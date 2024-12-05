import Link from "next/link";

export default function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <h1 className='text-3xl font-semibold'>
                La cabine cherché est introuvable &#129497;
            </h1>
            <Link
                href='/cabins'
                className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
            >
                Retourner à la page des cabines
            </Link>
        </main>
    );
}
