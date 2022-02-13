import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  //Filter
  const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filterText.toLocaleLowerCase())
		);
	});
  return (
    <>
      <input
        type="text"
        placeholder="Ara"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((c, id) => (
          <li key={id}>
            <span>{c.fullname}</span>
            <span>{c.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Toplam kişi: ({filtered.length})</p>
    </>
  );
}

export default List;
