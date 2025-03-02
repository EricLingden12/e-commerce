import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const mockOrders = [
      {
        id: 123,
        createAt: new Date(),
        shippingAddress: { city: "Birtamode", country: "Nepal" },
        orderItems: [
          {
            name: "product 1",
            image: "https://picsum.photos/600/600?random=1",
          },
        ],
        totalPrice: 50,
        isDelivered: true,
      },
      {
        id: 1234,
        createAt: new Date(),
        shippingAddress: { city: "Damak", country: "Nepal" },
        orderItems: [
          {
            name: "product 1",
            image: "https://picsum.photos/600/600?random=2",
          },
        ],
        totalPrice: 70,
        isDelivered: true,
      },
      {
        id: 12345,
        createAt: new Date(),
        shippingAddress: { city: "Kathmandu", country: "Nepal" },
        orderItems: [
          {
            name: "product 1",
            image: "https://picsum.photos/600/600?random=3",
          },
        ],
        totalPrice: 100,
        isDelivered: false,
      },
    ];
    setOrder(mockOrders);
  }, []);

  return (
    <div className="bg-gray-200 w-full box-shadow px-5 rounded-lg">
      <h1 className="text-center text-2xl font-bold py-3">My Order</h1>
      <div className="w-full py-5">
        <table className="w-full bg-gray-700 rounded-lg">
          <thead className="uppercase text-gray-300">
            <tr>
              <th className="text-md font-semibold py-2">Image</th>
              <th className="text-md font-semibold py-2">Order ID</th>
              <th className="text-md font-semibold py-2">Created</th>
              <th className="text-md font-semibold py-2">Shipping Address</th>
              <th className="text-md font-semibold py-2">Item</th>
              <th className="text-md font-semibold py-2">Price</th>
              <th className="text-md font-semibold py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((order) => (
                <tr key={order.id} className="text-center text-gray-300">
                  <td className="py-2">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-16 h-16 object-cover mx-auto rounded-md"
                    />
                  </td>
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">
                    {order.createAt.toLocaleDateString()}
                  </td>
                  <td className="py-2">
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country}
                  </td>
                  <td className="py-2">{order.orderItems.length}</td>
                  <td className="py-2">${order.totalPrice}</td>
                  <td className="py-2">
                    {order.isDelivered ? (
                      <span className="text-green-500">Paid</span>
                    ) : (
                      <span className="text-red-500">Pending</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  You have no orders.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
