import Image from "next/image";

import styles from "./Search.module.css";

function Search() {
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
      <div>
        <Image
          src="/images/calendar.png"
          width={20}
          height={20}
          alt="torino icon"
        />
        <input type="date" placeholder="تاریخ" />
      </div>
      <div>
        <button>جستجو</button>
      </div>
    </div>
  );
}

export default Search;
