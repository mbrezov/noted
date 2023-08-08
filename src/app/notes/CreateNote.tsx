"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./CreateNote.module.scss";

export default function CreateNote(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "" || category === "") {
      alert("Naslov, sadržaj i kategorija moraju biti ispunjeni");
      return;
    }
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
    <form onSubmit={create} className={styles.container}>
      <div className={styles.input_container}>
        <input
          className={styles.title}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.content}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <select
          className={styles.category}
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Odaberi kategoriju:</option>
          {props.category &&
            props.category.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit" className={styles.create_button}>
          Kreiraj
        </button>
      </div>
    </form>
  );
}
