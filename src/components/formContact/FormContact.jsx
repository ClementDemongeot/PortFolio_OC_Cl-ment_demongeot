import { useState } from "react";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col justify-center p-4 sm:p-9 items-center mt-4 sm:mt-9">
      <h2 className=" text-neutral-700 text-3xl sm:text-4xl font-bold ">
        Contact
      </h2>
      <div
        className="w-full sm:w-[500px] p-4 sm:p-6 bg-zinc-300 rounded shadow-md mt-4 sm:mt-8 mb-4 sm:mb-8"
        id="contact"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
          Contactez-moi
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-400 hover:bg-blue-500 text-gray-700 hover:text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
