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
    <div className="bg-gray-200 w-full box-shadow px-2 sm:px-5 rounded-lg">
      <h1 className="text-center text-xl sm:text-2xl font-bold py-3">
        My Order
      </h1>
      <div className="w-full py-3 sm:py-5 overflow-x-auto">
        <table className="w-full bg-gray-700 rounded-lg">
          <thead className="uppercase text-gray-300">
            <tr>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Image
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Order ID
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Created
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Shipping
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Items
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Price
              </th>
              <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((order) => (
                <tr key={order.id} className="text-center text-gray-300">
                  <td className="py-1 sm:py-2 px-1">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover mx-auto rounded-md"
                    />
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                    {order.id}
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                    {order.createAt.toLocaleDateString()}
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                    <span className="block">{order.shippingAddress.city}</span>
                    <span className="block">
                      {order.shippingAddress.country}
                    </span>
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                    {order.orderItems.length}
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
                    ${order.totalPrice}
                  </td>
                  <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1">
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
