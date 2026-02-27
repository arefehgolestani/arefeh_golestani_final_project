"use client";

import Image from "next/image";

import { formattedDateWithDay, getTourStatus } from "@/services/convertDate";

import styles from "./TourCard.module.css";

function TourCard({ data }) {
  const {
    id,
    title,
    price,
    origin,
    startDate,
    endDate,
    fleetVehicle,
    destination,
  } = data;

  const status = getTourStatus(startDate, endDate);

  const vehicleMap = {
    bus: { icon: "/images/bus.png", text: "سفر با اتوبوس" },
    ship: { icon: "/images/ship.png", text: "سفر با کشتی" },
    airplane: { icon: "/images/airplane.png", text: "سفر با هواپیما" },
    train: { icon: "/images/bus1.png", text: "سفر با قطار" },
    suv: { icon: "/images/suv1.png", text: "سفر با suv" },
    van: { icon: "/images/bus1.png", text: "سفر با Van" },
  };
  const vehicle = fleetVehicle?.trim().toLowerCase();
  const vehicleData = vehicleMap[vehicle];

  const cityMap = {
    1: "تهران",
    2: "سنندج",
    3: "مادرید",
    4: "اصفهان",
    5: "سلیمانیه",
    6: "هولر",
    7: "مازندارن",
    8: "آفرود",
    9: "ایتالیا",
    7: "مازندارن",
  };
  const originName = cityMap[origin?.id];
  const destinationName = cityMap[destination?.id];

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
            <span>{title}</span>
          </div>
          <div>
            {vehicleData && (
              <>
                <Image
                  src={vehicleData.icon}
                  width={24}
                  height={24}
                  alt="vehicle"
                />
                <span>{vehicleData.text}</span>
              </>
            )}
          </div>
          {status === "در حال برگزاری" && <button>{status}</button>}
          {status === "در انتظار برگزاری" && <button>{status}</button>}
          {status === "به اتمام رسیده" && (
            <button className={styles.yellow}>{status}</button>
          )}
        </div>
        <div className={styles.second}>
          <div>
            <h4>
              {originName} به {destinationName}
            </h4>
            <span className="vazirFont">{formattedDateWithDay(startDate)}</span>
          </div>
          <div>
            <h4>تاریخ برگشت</h4>
            <span className="vazirFont">{formattedDateWithDay(endDate)}</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.cost}>
          <div>
            <p>شماره تور </p>
            <h4 className="vazirFont">{id.split("-", 1)}</h4>
          </div>
          <div className={styles.divider1}></div>
          <div>
            <p>مبلغ پرداخت شده</p>
            <h4 className="vazirFont">
              {price}
              <span>تومان</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourCard;
