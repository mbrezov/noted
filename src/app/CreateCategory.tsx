"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

import styles from "./CreateCategory.module.scss";

export default function CreateCategory(props: any) {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const router = useRouter();

  // const createCategory = async () => {
  //   await fetch(
  //     "https://noted.pockethost.io/api/collections/category/records",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //       }),
  //     }
  //   );

  //   setName("");
  //   setShow(false);

  //   router.refresh();
  // };

  const pb = new PocketBase("https://noted.pockethost.io");

  const create = async () => {
    try {
      const data = {
        name: name,
      };

      const record = await pb.collection("Category").create(data);

      setName("");
      setShow(false);
      router.refresh();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const showCreateCategory = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      {show ? (
        <form onSubmit={create} className={styles.create_form}>
          <input
            type="text"
            placeholder="Naziv"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Dodaj</button>
        </form>
      ) : null}
      <button className={styles.add_note} onClick={showCreateCategory}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect
            x="12.5"
            y="40"
            width="40"
            height="15"
            transform="rotate(-90 12.5 40)"
            fill="#067087"
          />
          <rect
            x="40"
            y="27.5"
            width="40"
            height="15"
            transform="rotate(180 40 27.5)"
            fill="#067087"
          />
        </svg>
        {show ? <p>Odustani</p> : <p>Dodaj kategoriju</p>}
      </button>
    </div>
  );
}
