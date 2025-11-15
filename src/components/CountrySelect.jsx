import { useState } from "react";
import "./CountrySelect.css";

const countries = [
  {
    code: "+51",
    name: "Perú",
    flag: "/peru_flag.png", // imagen en public/
    emoji: "🇵🇪",
  },
//   {
//     code: "+34",
//     name: "España",
//     emoji: "🇪🇸",
//   },
//   {
//     code: "+1",
//     name: "EE.UU",
//     emoji: "🇺🇸",
//   }
];

export default function CountrySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const selected = countries.find((c) => c.code === value) || countries[0];

  return (
    <div className="country-select">
      
      <div className="selected" onClick={() => setOpen(!open)}>
        {selected.flag ? (
          <img src={selected.flag} alt={selected.name} className="flag-icon" />
        ) : (
          <span>{selected.emoji}</span>
        )}
        <span>{selected.code}</span>
      </div>

      {open && (
        <ul className="dropdown">
          {countries.map((c) => (
            <li
              key={c.code}
              onClick={() => {
                onChange(c.code);
                setOpen(false);
              }}
            >
              {c.flag ? (
                <img src={c.flag} alt={c.name} className="flag-icon" />
              ) : (
                <span>{c.emoji}</span>
              )}
              <span>{c.name} ({c.code})</span>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
