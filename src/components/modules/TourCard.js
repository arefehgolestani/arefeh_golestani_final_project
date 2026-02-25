import Image from "next/image";

import styles from "./TourCard.module.css";

function TourCard() {
  return (
    <>
     <div className={styles.userTour}>
      <div className={styles.first}>
        <div>
          <Image
            src="/images/sun-fog.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>تور اقلیم کردستان</span>
        </div>
        <div>
          <Image
            src="/images/airplane.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>سفر با هواپیما</span>
        </div>
        <button>به اتمام رسیده</button>
      </div>
      <div className={styles.second}>
        <div>
          <h4>تهران به سلیمانیه</h4>
          <span className="vazirFont">دوشنبه 15 شهریور 1402</span>
        </div>
        <div>
          <h4>تاریخ برگشت</h4>
          <span className="vazirFont">جمعه 19 شهریور 1402</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.cost}>
        <div>
          <p>شماره تور </p>
          <h4 className="vazirFont">102095404</h4>
        </div>
        <div className={styles.divider1}></div>
        <div>
          <p>مبلغ پرداخت شده</p>
          <h4 className="vazirFont">18000000<span>تومان</span></h4>
        </div>
      </div>
    </div>
     <div className={styles.userTour}>
      <div className={styles.first}>
        <div>
          <Image
            src="/images/sun-fog.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>تور اقلیم کردستان</span>
        </div>
        <div>
          <Image
            src="/images/airplane.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>سفر با هواپیما</span>
        </div>
        <button>به اتمام رسیده</button>
      </div>
      <div className={styles.second}>
        <div>
          <h4>تهران به سلیمانیه</h4>
          <span className="vazirFont">دوشنبه 15 شهریور 1402</span>
        </div>
        <div>
          <h4>تاریخ برگشت</h4>
          <span className="vazirFont">جمعه 19 شهریور 1402</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.cost}>
        <div>
          <p>شماره تور </p>
          <h4 className="vazirFont">102095404</h4>
        </div>
        <div className={styles.divider1}></div>
        <div>
          <p>مبلغ پرداخت شده</p>
          <h4 className="vazirFont">18000000<span>تومان</span></h4>
        </div>
      </div>
    </div>
     <div className={styles.userTour}>
      <div className={styles.first}>
        <div>
          <Image
            src="/images/sun-fog.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>تور اقلیم کردستان</span>
        </div>
        <div>
          <Image
            src="/images/airplane.png"
            width={20}
            height={20}
            alt="login icon"
          />
          <span>سفر با هواپیما</span>
        </div>
        <button className={styles.yellow}>درحال برگزاری</button>
      </div>
      <div className={styles.second}>
        <div>
          <h4>تهران به سلیمانیه</h4>
          <span className="vazirFont">دوشنبه 15 شهریور 1402</span>
        </div>
        <div>
          <h4>تاریخ برگشت</h4>
          <span className="vazirFont">جمعه 19 شهریور 1402</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.cost}>
        <div>
          <p>شماره تور </p>
          <h4 className="vazirFont">102095404</h4>
        </div>
        <div className={styles.divider1}></div>
        <div>
          <p>مبلغ پرداخت شده</p>
          <h4 className="vazirFont">18000000<span>تومان</span></h4>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default TourCard;
