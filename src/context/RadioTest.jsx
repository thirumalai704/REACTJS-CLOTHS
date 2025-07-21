import React, { useState } from "react";

function RadioTest() {
  const [selectedStatus, setSelectedStatus] = useState("paid");

  return (
    <div className="flex gap-8 p-10">
      {/* Paid */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setSelectedStatus("paid")}
      >
        <div className="w-5 h-5 border-2 border-green-600 rounded-full flex items-center justify-center">
          <div
            className={`w-3 h-3 rounded-full bg-green-600 ${
              selectedStatus === "paid" ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <span className="text-green-600 font-medium">Paid</span>
      </div>

      {/* Unpaid */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setSelectedStatus("unpaid")}
      >
        <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
          <div
            className={`w-3 h-3 rounded-full bg-red-600 ${
              selectedStatus === "unpaid" ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <span className="text-red-600 font-medium">Unpaid</span>
      </div>
    </div>
  );
}

export default RadioTest;
