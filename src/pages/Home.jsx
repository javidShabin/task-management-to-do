import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <header className="w-full max-w-md bg-violet-700 text-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Task Manager</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Stay organized and manage your tasks effectively!
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 mt-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="vehicle"
            className="block text-gray-700 font-medium mb-2"
          >
            Vehicle
          </label>
          <input
            id="vehicle"
            type="text"
            placeholder="Enter vehicle"
            {...register("vehicle", { required: "Vehicle is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              errors.vehicle ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.vehicle && (
            <span className="text-red-500 text-sm mt-1">
              {errors.vehicle.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="item" className="block text-gray-700 font-medium mb-2">
            Item
          </label>
          <input
            id="item"
            type="text"
            placeholder="Enter item"
            {...register("item", { required: "Item is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              errors.item ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.item && (
            <span className="text-red-500 text-sm mt-1">
              {errors.item.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 px-4 rounded-md font-medium hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
