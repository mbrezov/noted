"use client";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import CreateNote from "./notes/CreateNote";
import CreateCategory from "./CreateCategory";

const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://noted.pockethost.io/api/collections/Category/records/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Kategorije</h1>
      <div className={styles.category_container}>
        {data &&
          data.map((cat) => (
            <div key={cat.id} className={styles.category}>
              <div className={styles.category_color}></div>
              {cat.name}
            </div>
          ))}
      </div>
      <div>
        <CreateCategory />
      </div>
      {/* <CreateNote category={data} /> */}
    </div>
  );
};

export default Sidebar;
