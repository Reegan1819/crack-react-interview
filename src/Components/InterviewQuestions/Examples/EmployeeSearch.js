import React, { useMemo, useState } from "react";

// outside the component so the array keeps the same reference on every render
export const employees = [
  { id: 1, name: "Asha Patel", role: "Engineer" },
  { id: 2, name: "Ravi Kumar", role: "Designer" },
  { id: 3, name: "Meena Iyer", role: "Manager" },
  { id: 4, name: "John Smith", role: "QA Engineer" },
];

const EmployeeSearch = () => {
  const [query, setQuery] = useState("");

  // derived state: computed during render, not stored in state + useEffect
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return employees;
    return employees.filter(
      (e) =>
        e.name.toLowerCase().includes(search) ||
        e.role.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search employees"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No matching employees found</p>
      ) : (
        <ul>
          {filtered.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeSearch;
