"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("https://noted.pockethost.io/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        category,
      }),
    });

    setContent("");
    setTitle("");
    setCategory("");

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select
        id="category"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Kategorija:</option>
        {props.category &&
          props.category.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
      <button type="submit">Create note</button>
    </form>
  );
}
