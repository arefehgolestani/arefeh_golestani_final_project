"use client";

import Image from "next/image";
import { DatePicker } from "zaman";

import styles from "./Search.module.css";
import { useState } from "react";

function Search() {
  const [date, setDate] = useState({ from: "", to: "" });
  return (
    <div className={styles.search}>
      <div>
        <Image
          src="/images/location.png"
          width={20}
          height={20}
          alt="torino icon"
        />
        <input type="text" placeholder="مبدا" />
      </div>
      <div className={styles.divider}></div>
      <div>
        <Image
          src="/images/global-search.png"
          width={20}
          height={20}
          alt="torino icon"
        />
        <input type="text" placeholder="مقصد" />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.datepickerInput}>
        <Image
          src="/images/calendar.png"
          width={20}
          height={20}
          alt="torino icon"
        />{" "}
        <label>تاریخ</label>
        <DatePicker
          className="myDatePicker"
          value={date}
          onChange={(value) => {
            setDate({
              from: value?.from || null,
              to: value?.to || null,
            });
          }}
          range
        />
      </div>
      <div>
        <button>جستجو</button>
      </div>
    </div>
  );
}

export default Search;
