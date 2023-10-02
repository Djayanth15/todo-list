import React from "react";
import { useState } from "react";
import "./style.css";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim().length === 0) return;
    onSubmit(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
