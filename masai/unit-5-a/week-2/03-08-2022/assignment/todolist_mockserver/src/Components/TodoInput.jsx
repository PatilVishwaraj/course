import React from 'react'

function TodoInput({ handleAddprops }) {
  const [query, setQuery] = React.useState("");

  return (
    <div>
      <input
        placeholder="Add items"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => { handleAddprops(query); setQuery("") }}>Add</button>
    </div>
  );
}

export default TodoInput