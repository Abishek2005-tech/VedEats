  import { useEffect, useState } from "react";
  import { useSearchParams } from "react-router-dom";
  import axios from "axios";
  import { Download, XCircle } from "lucide-react";
  import { CartItem } from "@/types/cartType";

  interface DeliveryDetails {
    name: string;
    email: string;
    address: string;
    city: string;
    contact: string;
    country: string;
  }

  interface OrderDetails {
    _id: string;
    totalAmount: number;
    status: string;
    paymentId: string;
    paymentMode: string;
    paidAt: string;
    deliveryDetails: DeliveryDetails;
    cartItems: CartItem[];
  }

  interface ApiResponse {
    success: boolean;
    data: {
      order: OrderDetails;
    };
    message: string;
  }

  const Success = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
      const fetchOrderDetails = async () => {
        const orderId = searchParams.get("orderId");
        if (!orderId) {
          setError("No order ID found.");
          setLoading(false);
          return;
        }

        try {
          const response = await axios.get<ApiResponse>(
            `http://localhost:8000/api/v1/order/fetch-order-details/${orderId}`
          );
          console.log(response)
          
          if (response.data.data.order) {
            setOrderDetails(response.data.data.order);
          } else {
            throw new Error(response.data.message || "Failed to fetch order details");
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : "Failed to fetch order details.";
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
      };

      fetchOrderDetails();
    }, [searchParams]);

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen text-lg text-gray-700">
          Loading...
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-screen text-red-500 text-lg">
          Error: {error}
        </div>
      );
    }

    return (
      <div className="container mx-auto lg:px-80 px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/success-delivery.gif"
              alt="Delivery on the way"
              className="w-48 h-48 object-contain mb-6"
            />
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Your delicious order is being prepared and will reach you soon. 🛵
            </p>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <div className="mt-8 space-y-6">
              {/* Order Summary */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
                  <Download className="text-blue-500" /> Order Summary
                </h2>
                <p className="text-gray-700 mt-2">
                  <strong>Order ID:</strong> {orderDetails._id}
                </p>
                <p className="text-gray-700">
                  <strong>Total Amount:</strong> Rs {(orderDetails.totalAmount / 100).toFixed(2)}
                </p>
                <p className="text-gray-700">
                  <strong>Status:</strong> {orderDetails.status}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>PayId:</strong> {orderDetails.paymentId}
                </p>
                <p className="text-gray-700">
                  <strong>Payment Mode:</strong> {orderDetails.paymentMode}
                </p>
                <p className="text-gray-700">
                  <strong>Paid At:</strong> {new Date(orderDetails.paidAt).toLocaleString()}
                </p>
              </div>

              {/* Delivery Details */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
                  <XCircle className="text-red-500" /> Delivery Details
                </h2>
                <p className="text-gray-700 mt-2">
                  <strong>Name:</strong> {orderDetails.deliveryDetails.name}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {orderDetails.deliveryDetails.email}
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> {orderDetails.deliveryDetails.address}
                </p>
                <p className="text-gray-700">
                  <strong>City:</strong> {orderDetails.deliveryDetails.city}
                </p>
                <p className="text-gray-700">
                  <strong>Contact:</strong> {orderDetails.deliveryDetails.contact}
                </p>
              </div>

              {/* Cart Items */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  Items Ordered
                </h3>
                <ul className="divide-y divide-gray-300">
                  {orderDetails.cartItems.map((item) => (
                    <li
                      key={item.menuId}
                      className="py-3 flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <span className="text-gray-700">
                          {item.name} (x{item.quantity})
                        </span>
                      </div>
                      <span className="text-gray-800 font-semibold">
                        Rs {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Success;