import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CryptoJs from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const PaymentMethod = () => {
  const location = useLocation();
  const { totalPrice, shippingAddress = {} } = location.state || {
    totalPrice: "0",
    shippingAddress: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phoneNumber: "",
    },
  };

  const [formData, setFormData] = useState({
    amount: totalPrice,
    tax_amount: "0",
    total_amount: totalPrice,
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/paymentsuccess",
    failure_url: "http://localhost:5173/paymentfailure",
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
    const hash = CryptoJs.HmacSHA256(hashString, secret);
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
    <>
      <div className="flex items-start justify-center gap-10 my-[150px]">
        <div className="w-[50%] bg-gray-200 rounded-md p-5">
          <div className="flex justify-between border-b-1 border-black">
            <h1 className="text-xl pb-3">Shipping Address</h1>
            <p className="text-lg text-blue-400 cursor-pointer">Edit</p>
          </div>
          <div className="mt-3">
            <p>
              {shippingAddress.firstName} {shippingAddress.lastName}
            </p>
            <p>{shippingAddress.phoneNumber}</p>
            <p>
              {shippingAddress.address}, {shippingAddress.city}
            </p>
          </div>
        </div>

        <div className=" bg-gray-200 text-gray-800 w-[350px] py-5 px-10 rounded-lg">
          <h1 className="text-xl pb-3">Order Summary</h1>
          <form
            action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
            method="POST"
          >
            <div className="flex w-[90%]">
              <p className="w-[70%] grow">Total Amount</p>
              <p className="w-30%">
                $
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  className=" w-[30%]"
                  onChange={({ target }) =>
                    setFormData({
                      ...formData,
                      amount: target.value,
                      total_amount: target.value,
                    })
                  }
                  readOnly
                />
              </p>
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

            <input
              className="text-center text-xl font-semibold bg-green-950 text-gray-300 w-full mt-3 rounded-md py-2 hover:bg-green-700 cursor-pointer"
              value="Pay Via E-Sewa"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
