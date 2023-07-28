"use client";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const AddNoteHandler = () => {
    alert("stisno si me");
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchbar_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M17.9667 19.25L12.1917 13.475C11.7333 13.8417 11.2063 14.1319 10.6104 14.3458C10.0146 14.5597 9.38056 14.6667 8.70833 14.6667C7.04306 14.6667 5.63383 14.0898 4.48067 12.936C3.3275 11.7822 2.75061 10.373 2.75 8.70833C2.75 7.04306 3.32689 5.63383 4.48067 4.48067C5.63444 3.3275 7.04367 2.75061 8.70833 2.75C10.3736 2.75 11.7828 3.32689 12.936 4.48067C14.0892 5.63444 14.6661 7.04367 14.6667 8.70833C14.6667 9.38056 14.5597 10.0146 14.3458 10.6104C14.1319 11.2063 13.8417 11.7333 13.475 12.1917L19.25 17.9667L17.9667 19.25ZM8.70833 12.8333C9.85417 12.8333 10.8283 12.4321 11.6307 11.6298C12.4331 10.8274 12.8339 9.85356 12.8333 8.70833C12.8333 7.5625 12.4321 6.58839 11.6298 5.786C10.8274 4.98361 9.85356 4.58272 8.70833 4.58333C7.5625 4.58333 6.58839 4.98453 5.786 5.78692C4.98361 6.58931 4.58272 7.56311 4.58333 8.70833C4.58333 9.85417 4.98453 10.8283 5.78692 11.6307C6.58931 12.4331 7.56311 12.8339 8.70833 12.8333Z"
            fill="white"
          />
        </svg>
        <input
          type="search"
          placeholder="Pretraži"
          className={styles.searchbar}
        />
      </div>
      <button className={styles.add_note} onClick={AddNoteHandler}>
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
        <p>Nova Bilješka</p>
      </button>
      <a href="https://ispravi.me/" target="_blank" className={styles.hasek}>
        HAŠEK
      </a>
    </div>
  );
};

export default Navbar;
