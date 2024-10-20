import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/item/addItems", // Corrected typo
        data,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Item addition failed");
    }
  };

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
        className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Vehicle"
            {...register("vehicle", { required: true })}
            className={`w-full px-4 py-2 border ${
              errors.vehicle ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm`}
          />
          {errors.vehicle && (
            <span className="text-red-600 text-sm sm:text-base">
              Vehicle is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Item"
            {...register("item", { required: true })}
            className={`w-full px-4 py-2 border ${
              errors.item ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm`}
          />
          {errors.item && (
            <span className="text-red-600 text-sm sm:text-base">
              Item is required
            </span>
          )}
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-full bg-violet-700 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-violet-800 focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm"
        />
      </form>
    </div>
  );
}
