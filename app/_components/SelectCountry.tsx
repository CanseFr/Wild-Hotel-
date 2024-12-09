"use server"

import {getCountries} from "@/app/_lib/data-service";

export default async function SelectCountry({ defaultCountry, name, id, className }: any) {

  const countries = await getCountries();
  const flag = countries.find((country: any) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((c: any) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
