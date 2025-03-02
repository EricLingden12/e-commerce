import React, { useEffect, useState } from "react";
import CryptoJs from "crypto-js"; // Import CryptoJs
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigation = useNavigate();
  const handlenavigate = () => {
    navigation("/paymentsuccess");
  };
  const [formData, setFormData] = useState({
    amount: "10",
    tax_amount: "0",
    total_amount: "10",
    transaction_uuid: 0,
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "https://localhost:5173/paymentsuccess",
    failure_url: "https://localhost:5173/paymentfailure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJs.HmacSHA256(hashString, secret); // Correct method name
    const hashedSignature = CryptoJs.enc.Base64.stringify(hash);
    return hashedSignature;
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      signature: hashedSignature,
    }));
  }, [
    formData.total_amount,
    formData.transaction_uuid,
    formData.product_code,
    formData.secret,
  ]);

  return (
    <div className="my-[150px] bg-gray-300 text-gray-800 w-[350px] mx-auto py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-semibold text-center">Check Out</h1>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <div className="grid w-[100%] my-3">
          <label className="text-md font-semibold">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            className="text-lg font-bold "
            value={formData.amount}
            onChange={({ target }) =>
              setFormData({
                ...formData,
                amount: target.value,
                total_amount: target.value,
              })
            }
            required
          />
        </div>

        <input
          type="hidden"
          id="tax_amount"
          name="tax_amount"
          value={formData.tax_amount}
          required
        />
        <input
          type="hidden"
          id="total_amount"
          name="total_amount"
          value={formData.total_amount}
          required
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={formData.transaction_uuid}
          required
        />
        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value={formData.product_code}
          required
        />
        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value={formData.product_service_charge}
          required
        />
        <input
          type="hidden"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value={formData.product_delivery_charge}
          required
        />
        <input
          type="hidden"
          id="success_url"
          name="success_url"
          value={formData.success_url}
          required
        />
        <input
          type="hidden"
          id="failure_url"
          name="failure_url"
          value={formData.failure_url}
          required
        />
        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value={formData.signed_field_names}
          required
        />
        <input
          type="hidden"
          id="signature"
          name="signature"
          value={formData.signature}
          required
        />
        <div className="grid w-[100%]">
          <label htmlFor="firstName" className="text-md font-semibold">
            First name
          </label>
          <input
            id="firstName"
            className="border border-black rounded-md"
            type="text"
          />
        </div>
        <div className="grid w-[100%] my-3">
          <label htmlFor="lastName" className="text-md font-semibold">
            Last name
          </label>
          <input
            id="lastName"
            className="border border-black rounded-md"
            type="text"
          />
        </div>
        <input
          className="text-center text-xl font-semibold bg-green-950 text-gray-300 w-full mt-3 rounded-md py-2 hover:bg-green-700 cursor-pointer"
          value="Pay Via E-Sewa"
          onClick={handlenavigate}
          type="submit"
        />
      </form>
    </div>
  );
};

export default PaymentMethod;
