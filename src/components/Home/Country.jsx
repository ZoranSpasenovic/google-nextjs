"use client";

import { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState("World");
  useEffect(() => {
    const getLocation = async () => {
      const responseIp = await fetch("https://api.ipify.org");
      const ip = await responseIp.text();
      if (!responseIp) {
        return;
      }

      const response = await fetch(
        `https://apiip.net/api/check?ip=${ip}&accessKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (!response.ok) {
        return;
      }

      const resData = await response.json();
      setCountry(resData.countryName);
    };
    getLocation();
  }, []);
  return <div>{country}</div>;
}
