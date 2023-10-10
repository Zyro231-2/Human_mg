import { toast } from "react-toastify";

export default function Filter({filterData, category, setCategory }) {
  function clickHandler(title) {
    toast.dismiss();
    toast.success("Moved to " + title);
    setCategory(title);
  }

  return (
    <div className="py-4 text-center">
      {filterData.map((data) => {
        const isSelected = data.tittle === category; // Check if the button is selected

        return (
          <button
            onClick={() => clickHandler(data.tittle)}
            key={data.id}
            className={`ml-8 px-2 py-1 rounded-md ${
              isSelected ? "bg-blue-500 text-white" : "bg-gray-800 text-white"
            }`}>
            {data.tittle}
          </button>
        );
      })}
    </div>
  );
}
