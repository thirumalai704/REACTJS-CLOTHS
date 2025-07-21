import { useNavigate } from "react-router-dom";
import { useUploadContext } from "../context/ProductContext";

function Stocks() {
  const navigate = useNavigate();

  const { state } = useUploadContext();
  const result = state?.stocks || [];

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl text-primary font-semibold">Stocks</h1>

        <button
          onClick={() => navigate("/AddStocks")}
          className="bg-primary px-3 py-1 text-end rounded ml-8 text-white font-medium"
        >
          Add Product
        </button>
      </div>

      <div className="bg-bgclr">
        <div className="p-4 pb-0 rounded-2xl">
          <table className="table-auto w-full p-3">
            <thead>
              <tr className="border-b text-text">
                <th className="px-4 py-5 text-left">S.No</th>
                <th className="px-4 text-left">Product Code</th>
                <th className="px-4 text-left">Category</th>
                <th className="px-4 text-left">Sub Category</th>
                <th className="px-4 text-left">Product</th>
                <th className="px-4 text-left">Updated Date</th>
                <th className="px-4 text-left">Availble Quntity</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx !== result.length - 1 ? "border-b" : ""}
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4">{item.code}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4">{item.subCategory}</td>
                  <td className="px-4">{item.productName}</td>
                  <td className="px-4">{item.date}</td>
                  <td className={"px-4"}>{item.quantity}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate("/AddStocks", {
                          state: { stock: item, index: idx },
                        })
                      }
                      className="px-4 ring ring-primary rounded cursor-pointer"
                    >
                      Add More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
