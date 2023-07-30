"use client";
import { useState } from "react";
import styles from "./NoteCard.module.scss";

const NoteCard = (props: any) => {
  const [prefix, setPrefix] = useState("Poštovani gospodine XXXXX,");
  const [prefixOn, setPrefixOn] = useState(false);
  const [selected, setSelected] = useState(false);

  const copyContent = () => {
    const textToCopy = `${prefix}\n${props.content}`;
    navigator.clipboard.writeText(textToCopy);
  };

  const prefixChange = () => {
    if (prefixOn) {
      setPrefix("Poštovani gospodine XXXXX,");
      setPrefixOn(false);
    } else {
      setPrefix("Poštovana gospođo XXXXX,");
      setPrefixOn(true);
    }
  };

  const noPrefix = () => {
    setPrefix("");
  };

  const handleSelected = () => {
    setSelected((prevState) => !prevState);
  };

  return (
    <div className={`${styles.notecard} ${selected ? styles.selected : ""}`}>
      <div className={styles.background}></div>
      <div className={styles.title}>{props.title}</div>
      <button className={styles.copy_button} onClick={copyContent}>
        <p>copy</p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_2_151)">
            <path
              d="M0 10.125C0 8.676 1.176 7.5 2.625 7.5H4.875C5.17337 7.5 5.45952 7.61853 5.6705 7.8295C5.88147 8.04048 6 8.32663 6 8.625C6 8.92337 5.88147 9.20952 5.6705 9.4205C5.45952 9.63147 5.17337 9.75 4.875 9.75H2.625C2.52554 9.75 2.43016 9.78951 2.35984 9.85983C2.28951 9.93016 2.25 10.0255 2.25 10.125V21.375C2.25 21.582 2.418 21.75 2.625 21.75H13.875C13.9745 21.75 14.0698 21.7105 14.1402 21.6402C14.2105 21.5698 14.25 21.4745 14.25 21.375V19.125C14.25 18.8266 14.3685 18.5405 14.5795 18.3295C14.7905 18.1185 15.0766 18 15.375 18C15.6734 18 15.9595 18.1185 16.1705 18.3295C16.3815 18.5405 16.5 18.8266 16.5 19.125V21.375C16.5 22.0712 16.2234 22.7389 15.7312 23.2312C15.2389 23.7234 14.5712 24 13.875 24H2.625C1.92881 24 1.26113 23.7234 0.768845 23.2312C0.276562 22.7389 0 22.0712 0 21.375L0 10.125Z"
              fill="#53E86B"
            />
            <path
              d="M7.5 2.625C7.5 1.176 8.676 0 10.125 0H21.375C22.824 0 24 1.176 24 2.625V13.875C24 14.5712 23.7234 15.2389 23.2312 15.7312C22.7389 16.2234 22.0712 16.5 21.375 16.5H10.125C9.42881 16.5 8.76113 16.2234 8.26884 15.7312C7.77656 15.2389 7.5 14.5712 7.5 13.875V2.625ZM10.125 2.25C10.0255 2.25 9.93016 2.28951 9.85983 2.35984C9.78951 2.43016 9.75 2.52554 9.75 2.625V13.875C9.75 14.082 9.918 14.25 10.125 14.25H21.375C21.4745 14.25 21.5698 14.2105 21.6402 14.1402C21.7105 14.0698 21.75 13.9745 21.75 13.875V2.625C21.75 2.52554 21.7105 2.43016 21.6402 2.35984C21.5698 2.28951 21.4745 2.25 21.375 2.25H10.125Z"
              fill="#53E86B"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_151">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg> */}
      </button>
      <button className={styles.select_button} onClick={handleSelected}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M17 23H23M23 23V17M23 23L16 16M8 2H2M2 2V8M2 2L9 9M17 2H23M23 2V8M23 2L16 9M8 23H2M2 23V17M2 23L9 16"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> */}
        {selected ? <p>minimize</p> : <p>maximize</p>}
      </button>
      <div className={styles.content}>
        <div>{prefix}</div>
        {props.content.length > 320 && !selected
          ? `${props.content.slice(0, 320)}...`
          : props.content}
      </div>
      <div className={styles.footer}>
        {prefix ? (
          <button
            className={styles.button_no}
            onClick={noPrefix}
            title="Obriši prefiks"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.333 0C5.523 0 0 5.52 0 12.333C0 19.146 5.523 24.666 12.333 24.666C19.145 24.666 24.666 19.146 24.666 12.333C24.666 5.52 19.146 0 12.333 0ZM12.333 3C14.183 3 15.905 3.548 17.357 4.48L4.48 17.357C3.51364 15.8596 2.99976 14.1152 3 12.333C3 7.187 7.187 3 12.333 3ZM12.333 21.666C10.5509 21.6658 8.80661 21.1519 7.309 20.186L20.185 7.309C21.1514 8.80642 21.6652 10.5508 21.665 12.333C21.665 17.479 17.479 21.666 12.333 21.666Z"
                fill="#F8F8F8"
              />
            </svg>
          </button>
        ) : null}
        {!prefixOn ? (
          <button
            className={styles.button}
            onClick={prefixChange}
            title="Odaberi prefiks gospođa/gospodin"
          >
            <div className={styles.button_circle_male}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M9.39584 11.9167C9.39584 12.0671 9.36621 12.2161 9.30862 12.3552C9.25104 12.4942 9.16664 12.6205 9.06024 12.7269C8.95384 12.8333 8.82752 12.9177 8.6885 12.9753C8.54948 13.0329 8.40048 13.0625 8.25001 13.0625C7.94612 13.0625 7.65467 12.9418 7.43978 12.7269C7.2249 12.512 7.10418 12.2206 7.10418 11.9167C7.10418 11.6128 7.2249 11.3213 7.43978 11.1064C7.65467 10.8916 7.94612 10.7708 8.25001 10.7708C8.40048 10.7708 8.54948 10.8005 8.6885 10.8581C8.82752 10.9156 8.95384 11 9.06024 11.1064C9.16664 11.2128 9.25104 11.3392 9.30862 11.4782C9.36621 11.6172 9.39584 11.7662 9.39584 11.9167ZM13.75 10.7708C13.4461 10.7708 13.1547 10.8916 12.9398 11.1064C12.7249 11.3213 12.6042 11.6128 12.6042 11.9167C12.6042 12.2206 12.7249 12.512 12.9398 12.7269C13.1547 12.9418 13.4461 13.0625 13.75 13.0625C14.0539 13.0625 14.3454 12.9418 14.5602 12.7269C14.7751 12.512 14.8958 12.2206 14.8958 11.9167C14.8958 11.6128 14.7751 11.3213 14.5602 11.1064C14.3454 10.8916 14.0539 10.7708 13.75 10.7708ZM20.1667 11C20.1667 13.4311 19.2009 15.7627 17.4818 17.4818C15.7627 19.2009 13.4312 20.1667 11 20.1667C9.79623 20.1667 8.60423 19.9296 7.49208 19.4689C6.37993 19.0082 5.3694 18.333 4.5182 17.4818C2.79911 15.7627 1.83334 13.4311 1.83334 11C1.83334 8.56884 2.79911 6.23727 4.5182 4.51818C6.23728 2.7991 8.56886 1.83333 11 1.83333C12.2038 1.83333 13.3958 2.07043 14.5079 2.5311C15.6201 2.99177 16.6306 3.66698 17.4818 4.51818C18.333 5.36939 19.0082 6.37991 19.4689 7.49206C19.9296 8.60421 20.1667 9.79621 20.1667 11ZM9.77168 3.77666C11.055 5.90333 13.3833 7.33333 16.0417 7.33333C16.4633 7.33333 16.8758 7.2875 17.27 7.22333C15.9867 5.09666 13.6583 3.66666 11 3.66666C10.5783 3.66666 10.1658 3.71249 9.77168 3.77666ZM4.05168 8.68083C5.63347 7.7841 6.82827 6.33467 7.40668 4.61083C5.82489 5.50756 4.63009 6.95699 4.05168 8.68083ZM18.3333 11C18.3333 10.285 18.2233 9.5975 18.0308 8.94666C17.3892 9.08416 16.7292 9.16666 16.0417 9.16666C14.6791 9.16696 13.3337 8.86351 12.1032 8.27838C10.8727 7.69326 9.7881 6.84119 8.92834 5.78416C8.44702 6.94763 7.73154 7.99966 6.82637 8.87487C5.9212 9.75008 4.84568 10.4298 3.66668 10.8717V11C3.66668 15.0425 6.95751 18.3333 11 18.3333C15.0425 18.3333 18.3333 15.0425 18.3333 11Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        ) : (
          <div>
            <button
              className={styles.button}
              onClick={prefixChange}
              title="Odaberi prefiks gospođa/gospodin"
            >
              <div className={styles.button_circle_female}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9V16.5H16.5V9C16.5 4.875 13.125 1.5 9 1.5ZM9 3C11.175 3 13.08 4.17 14.13 5.91C13.8075 5.9625 13.47 6 13.125 6C10.95 6 9.045 4.83 7.995 3.09C8.3175 3.0375 8.655 3 9 3ZM6.06 3.7725C5.58676 5.18292 4.60919 6.36881 3.315 7.1025C3.78824 5.69208 4.76581 4.50619 6.06 3.7725ZM3 8.895C4.95 8.16 6.5175 6.6525 7.305 4.7325C8.00844 5.59734 8.89583 6.29449 9.9026 6.77323C10.9094 7.25196 12.0102 7.50024 13.125 7.5C13.6875 7.5 14.2275 7.4325 14.7525 7.32C14.91 7.8525 15 8.415 15 9C15 12.3075 12.3075 15 9 15C5.6925 15 3 12.3075 3 9V8.895ZM3 15V13.5C3.4275 14.0625 3.9375 14.5725 4.5 15H3ZM15 15H13.5C14.0625 14.5725 14.5725 14.0625 15 13.5V15ZM10.3125 9.75C10.3125 9.50136 10.4113 9.2629 10.5871 9.08709C10.7629 8.91127 11.0014 8.8125 11.25 8.8125C11.4986 8.8125 11.7371 8.91127 11.9129 9.08709C12.0887 9.2629 12.1875 9.50136 12.1875 9.75C12.1875 9.99864 12.0887 10.2371 11.9129 10.4129C11.7371 10.5887 11.4986 10.6875 11.25 10.6875C11.0014 10.6875 10.7629 10.5887 10.5871 10.4129C10.4113 10.2371 10.3125 9.99864 10.3125 9.75ZM5.8125 9.75C5.8125 9.50136 5.91127 9.2629 6.08709 9.08709C6.2629 8.91127 6.50136 8.8125 6.75 8.8125C6.99864 8.8125 7.2371 8.91127 7.41291 9.08709C7.58873 9.2629 7.6875 9.50136 7.6875 9.75C7.6875 9.99864 7.58873 10.2371 7.41291 10.4129C7.2371 10.5887 6.99864 10.6875 6.75 10.6875C6.50136 10.6875 6.2629 10.5887 6.08709 10.4129C5.91127 10.2371 5.8125 9.99864 5.8125 9.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
