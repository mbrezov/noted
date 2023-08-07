"use client";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import CreateNote from "./notes/CreateNote";
import CreateCategory from "./CreateCategory";
import PocketBase from "pocketbase";

const Sidebar = () => {
  const pb = new PocketBase("https://noted.pockethost.io");

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://noted.pockethost.io/api/collections/Category/records/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
      });
  }, []);

  const deleteCategory = async (recordId) => {
    try {
      await pb.collection("Category").delete(recordId);
      // You may need to update the state or refresh the data here
      setData(data.filter((cat) => cat.id !== recordId));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Kategorije</h1>
      <div className={styles.category_container}>
        {data &&
          data.map((cat) => (
            <div key={cat.id} className={styles.category}>
              <div
                className={styles.category_color}
                style={{ backgroundColor: cat.color }}
              ></div>
              {cat.name}
              <button onClick={() => deleteCategory(cat.id)}>Delete</button>
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
