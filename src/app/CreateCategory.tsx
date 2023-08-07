"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { CirclePicker } from "react-color";

import styles from "./CreateCategory.module.scss";

export default function CreateCategory(props: any) {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");

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
        color: color,
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
        <div>
          <CirclePicker
            width="170px"
            circleSize={20}
            circleSpacing={8}
            onChangeComplete={(color: any) => {
              setColor(color.hex);
            }}
            className={styles.colorpicker}
          />
          <form
            onSubmit={create}
            className={styles.create_form}
            style={{ backgroundColor: `${color}20` }}
          >
            <input
              type="text"
              placeholder="Naziv"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" style={{ backgroundColor: `${color}90` }}>
              Dodaj
            </button>
          </form>
        </div>
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
            fill="#2F8706"
          />
          <rect
            x="40"
            y="27.5"
            width="40"
            height="15"
            transform="rotate(180 40 27.5)"
            fill="#2F8706"
          />
        </svg>
        {show ? <p>Odustani</p> : <p>Dodaj kategoriju</p>}
      </button>
    </div>
  );
}
