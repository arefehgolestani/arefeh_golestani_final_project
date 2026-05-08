"use client";

import Image from "next/image";
import { DatePicker } from "zaman";
import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Search({ tours, onSearch }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const [date, setDate] = useState({ from: "", to: "" });

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      originId: "",
      destinationId: "",
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    setValue("originId", originId);
  }, [originId, setValue]);

  useEffect(() => {
    setValue("destinationId", destinationId);
  }, [destinationId, setValue]);

  useEffect(() => {
    setValue("startDate", date?.from ?? "");
    setValue("endDate", date?.to ?? "");
  }, [date, setValue]);

  const origins = Array.isArray(tours)
    ? tours
        .filter((t) => t?.origin?.id && t?.origin?.name)
        .map((t) => ({
          id: t.origin.id,
          title: t.origin.name,
        }))
    : [];

  const destinations = Array.isArray(tours)
    ? tours
        .filter((t) => t?.destination?.id && t?.destination?.name)
        .map((t) => ({
          id: t.destination.id,
          title: t.destination.name,
        }))
    : [];

  const uniqOrigins = Array.from(
    new Map(origins.map((o) => [String(o.id), o])).values(),
  );

  const uniqDestinations = Array.from(
    new Map(destinations.map((d) => [String(d.id), d])).values(),
  );

  const cityNameFaById = {
    1: "تهران",
    2: "سنندج",
    3: "مادرید",
    4: "اصفهان",
    5: "سلیمانیه",
    6: "هولر",
    7: "مازندران",
    8: "آفرود",
    9: "ایتالیا",
  };

  const submitHandler = (formData) => {
    onSearch?.(formData);
  };

  useEffect(() => {
    setOrigin("");
    setDestination("");
    setOriginId("");
    setDestinationId("");
    setShowOriginDropdown(false);
    setShowDestinationDropdown(false);
  }, [tours]);

  useEffect(() => {
    setValue("originId", "");
    setValue("destinationId", "");
  }, [tours, setValue]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.search}>
        <div className={styles.inputWrapper}>
          <Image src="/images/location.png" width={20} height={20} alt="icon" />
          <input
            type="text"
            placeholder="مبدا"
            value={origin}
            readOnly
            onClick={() => setShowOriginDropdown((prev) => !prev)}
          />

          {showOriginDropdown && (
            <ul className={styles.dropdown}>
              {uniqOrigins.map((city) => {
                const label = cityNameFaById[String(city.id)] ?? "—";

                return (
                  <li
                    key={city.id}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setOrigin(label);

                      setOriginId(String(city.id));

                      setShowOriginDropdown(false);
                    }}
                  >
                    <Image
                      src="/images/location.png"
                      width={16}
                      height={16}
                      alt="city icon"
                      className={styles.cityIcon}
                    />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.inputWrapper}>
          <Image
            src="/images/global-search.png"
            width={20}
            height={20}
            alt="icon"
          />
          <input
            type="text"
            placeholder="مقصد"
            value={destination}
            readOnly
            onClick={() => setShowDestinationDropdown((prev) => !prev)}
          />

          {showDestinationDropdown && (
            <ul className={styles.dropdown}>
              {uniqDestinations.map((city) => {
                const label = cityNameFaById[String(city.id)] ?? "—";

                return (
                  <li
                    key={city.id}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setDestination(label);

                      setDestinationId(String(city.id));

                      setShowDestinationDropdown(false);
                    }}
                  >
                    <Image
                      src="/images/location.png"
                      width={16}
                      height={16}
                      alt="city icon"
                      className={styles.cityIcon}
                    />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.datepickerInput}>
          <Image
            src="/images/calendar.png"
            width={20}
            height={20}
            alt="calendar icon"
          />
          <label>تاریخ</label>

          <DatePicker
            className="myDatePicker"
            round="x2"
            accentColor="#28A745"
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

        <input type="hidden" {...register("originId")} />
        <input type="hidden" {...register("destinationId")} />
        <input type="hidden" {...register("startDate")} />
        <input type="hidden" {...register("endDate")} />

        <div className={styles.button}>
          <button type="submit">جستجو</button>
        </div>
      </div>
    </form>
  );
}

export default Search;
