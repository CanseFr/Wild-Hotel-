"use client"

import {useReservation} from "@/app/_context/Reservation";

export default function ReservationForm({cabin}: any) {

    const {range} = useReservation();
    const {maxCapacity} = cabin;

    return (
        <div className='scale-[1.01]'>
            <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>
                <p>Connecté en tant que</p>

                {/* <div className='flex gap-4 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div> */}
            </div>

            <div>
                {String(range.from)} à {String(range.to)}
            </div>

            <form className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='numGuests'>Combien d&#39;invités ?</label>
                    <select
                        name='numGuests'
                        id='numGuests'
                        className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
                        required
                    >
                        <option value='' key=''>
                            Selectionner le nombre d&#39;invités ...
                        </option>
                        {Array.from({length: maxCapacity}, (_, i) => i + 1).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? 'invité' : 'invités'}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='observations'>
                        Tous ce que vous devez savoir sur votre séjour
                    </label>
                    <textarea
                        name='observations'
                        id='observations'
                        className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
                        placeholder='Animaux, allergie, demande spécial, etc.?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    <p className='text-primary-300 text-base'>Commencez par selectionner une date</p>

                    <button
                        className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
                        Reserver maintenant
                    </button>
                </div>
            </form>
        </div>
    );
}

