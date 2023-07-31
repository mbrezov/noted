"use client";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://noted.pockethost.io/api/collections/Category/records/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
      });
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      <h1>Kategorije</h1>
      {data &&
        data.map((cat) => (
          <div key={cat.id} className={styles.category}>
            <div className={styles.category_color}></div>
            {cat.name}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
