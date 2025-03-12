import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [search] = useSearchParams();
  const dataQueary = search.get("data");
  const [data, setData] = useState({});

  useEffect(() => {
    if (dataQueary) {
      try {
        const resObject = JSON.parse(dataQueary);
        setData(resObject);
      } catch (error) {
        console.error("Error parsing dataQueary:", error);
      }
    }
  }, [dataQueary]);

  return (
    <div className="mt-[100px]">
      <p>$ {data.total_amount}</p>
      <p>Payment Successful</p>
    </div>
  );
};

export default PaymentSuccess;
