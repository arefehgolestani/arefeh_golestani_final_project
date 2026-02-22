import Image from "next/image";

import styles from "./TourDetails.module.css";
import { formattedDate, calculateDuration } from "../../services/convertDate";

function TourDetails({ data }) {
  const {
    id,
    title,
    price,
    image,
    origin,
    startDate,
    endDate,
    fleetVehicle,
    capacity,
    insurance,
  } = data;

  const { days, nights } = calculateDuration(
  data.startDate,
  data.endDate
);

  
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.tourTitle}>
          <div className={styles.image}>
            <Image src={image} width={397} height={265} alt="tour image" />
          </div>
          <div className={styles.tourDesc}>
            <h2>{title}</h2>
            <p className="vazirFont">{days} روز و {nights} شب </p>
            <div className={styles.option}>
              <div>
                <Image
                  src="/images/user-tick.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
                <span>تور لیدر از مبدا</span>
              </div>
              <div>
                <Image
                  src="/images/map.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
                <span>برنامه سفر</span>
              </div>
              <div>
                <Image
                  src="/images/medal-star.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
                <span>تضمین کیفیت</span>
              </div>
            </div>
            <div className={styles.tourPrice}>
              <div className="vazirFont">
                <span> {price.toLocaleString("fa-IR")} </span>
                <p>تومان</p>
              </div>
              <button>رزرو و خرید</button>
            </div>
          </div>
        </div>
        <div className={styles.tourInfo}>
          <div>
            <div>
              <Image
                src="/images/routing-2.png"
                width={20}
                height={20}
                alt="tour image"
              />
              <span>مبدا</span>
            </div>
            {origin.id === "1" && <h5 className="vazirFont">تهران</h5>}
            {origin.id === "2" && <h5 className="vazirFont">سنندج</h5>}
            {origin.id === "4" && <h5 className="vazirFont">اصفهان</h5>}
          </div>
          <div className={styles.divider}></div>
          <div>
            <div>
              <Image
                src="/images/calendar-1.png"
                width={20}
                height={20}
                alt="tour image"
              />
              <span>تاریخ رفت </span>
            </div>
            <h5 className="vazirFont">{formattedDate(startDate)}</h5>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div>
              <Image
                src="/images/calendar-2.png"
                width={20}
                height={20}
                alt="tour image"
              />
              <span>تاریخ برگشت</span>
            </div>
            <h5 className="vazirFont">{formattedDate(endDate)}</h5>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div>
              {fleetVehicle === "bus" && (
                <Image
                  src="/images/bus.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
              )}
              {fleetVehicle === "ship" && (
                <Image
                  src="/images/ship.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
              )}
              {fleetVehicle === "train" && (
                <Image
                  src="/images/bus1.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
              )}
              {fleetVehicle === "airplane" && (
                <Image
                  src="/images/airplane.png"
                  width={24}
                  height={24}
                  alt="tour image"
                />
              )}

              <span>حمل و نقل</span>
            </div>
            {fleetVehicle === "ship" && <h5 className="vazirFont">کشتی</h5>}
            {fleetVehicle === "bus" && <h5 className="vazirFont">اتوبوس</h5>}
            {fleetVehicle === "airplane" && (
              <h5 className="vazirFont">هواپیما</h5>
            )}
            {fleetVehicle === "train" && <h5 className="vazirFont">قطار</h5>}
            {fleetVehicle === "SUV" && <h5 className="vazirFont">SUV</h5>}
          </div>
          <div className={styles.divider}></div>
          <div>
            <div>
              <Image
                src="/images/profile-2user.png"
                width={20}
                height={20}
                alt="tour image"
              />
              <span>ظرفیت</span>
            </div>
            <h5 className="vazirFont"> حداکثر {capacity} نفر</h5>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div>
              <Image
                src="/images/security.png"
                width={20}
                height={20}
                alt="tour image"
              />
              <span>بیمه</span>
            </div>
            {insurance ? (
              <h5 className="vazirFont">بیمه 50 هزار دیناری</h5>
            ) : (
              <h5>ندارد</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
