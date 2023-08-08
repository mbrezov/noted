"use client";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import CreateNote from "./notes/CreateNote";
import CreateCategory from "./CreateCategory";
import PocketBase from "pocketbase";
import Navbar from "./notes/Navbar";

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
              <button
                className={styles.delete_button}
                onClick={() => deleteCategory(cat.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M14 16H20M21 10V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H5C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13H11"
                    stroke="#F8F8F8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
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
