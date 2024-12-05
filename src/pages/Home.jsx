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
        url: "/item/addItmes",
        data
      })
      toast.success("Item added")
    } catch (error) {
      console.log(error)
      toast.error("Items added fild")
    }
  }

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
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Item"
        {...register("item", { required: true })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm"
      />
    </div>

    {errors.exampleRequired && (
      <span className="text-red-600 text-sm sm:text-base">
        This field is required
      </span>
    )}

    <input
      type="submit"
      value="Submit"
      className="w-full bg-violet-700 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-violet-800 focus:ring-2 focus:ring-violet-500 focus:outline-none sm:text-base text-sm"
    />
  </form>
</div>


    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  );
}
