"use client";

import { useState } from "react";
import Todo from "./Components/Todo";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
    console.log(formData);
  };


  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try{
      //api code
      toast.success('Success')

    }catch(error)
    {
      toast.error("Error");
    }

  }
  return (
    <div>
      <ToastContainer theme= "dark"/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form
          onSubmit={onSubmitHandler}
          className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
        >
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={onChangeHandler}
            placeholder="Enter Title"
            className="px-3 py-2 border-2 w-full"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={onChangeHandler}
            placeholder="Enter Description"
            className="px-3 py-2 border-2 w-full"
          ></textarea>

          <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
            Add Todo
          </button>
        </form>

        <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <Todo />
              <Todo />
              <Todo />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
