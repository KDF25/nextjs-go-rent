import { CreditCard, Edit, Mail } from "lucide-react";

export const PaymentMethod = () => {
  return (
    <div className="flex-1 p-6 mt-10 overflow-hidden bg-white shadow-md rounded-xl md:mt-0">
      <h2 className="mb-4 text-2xl font-bold">Payment method</h2>
      <p className="mb-4">Change how you pay for your plan.</p>
      <div className="p-6 border rounded-lg">
        <div>
          {/* Card Info */}
          <div className="flex gap-10">
            <div className="flex items-center justify-center h-20 bg-blue-600 rounded-md w-36">
              <span className="text-2xl font-bold text-white">VISA</span>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-5">
                  <h3 className="text-lg font-semibold">Visa ending in 2024</h3>
                  <span className="px-3 py-1 text-sm font-medium border rounded-full border-primary-700 text-primary-700">
                    Default
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CreditCard className="w-4 h-4 mr-1" />
                  <span>Expiry • 26/06/2024</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="w-4 h-4 mr-1" />
                <span>billing@baseclub.com</span>
              </div>
            </div>
          </div>

          <hr className="my-4" />
          <div className="flex justify-end">
            <button className="flex items-center justify-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-primary-700 hover:text-primary-50">
              <Edit className="w-5 h-5 mr-2" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
