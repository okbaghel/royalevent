import form from "@/components/form//form.module.css";

const Form=()=>{
    return(
        <div className={`${form.con} flex flex-col justify-center items-center `}>
            <p className="text-gray-400" >CONTACT US</p>
            <h1 className="text-4xl">Leave a Feedback or</h1>
            <h1 className="text-3xl mb-9">Ask a Question</h1>

            <div className=" mt-5  W-48 p-4 space-y-3">
  {/* Name and Email Row */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-3">
    <span className="flex-1">
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Enter your name"
      />
    </span>
    <span className="flex-1">
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Enter your email"
      />
    </span>
  </div>

  {/* Message Field */}
  <div>
    <textarea
      rows="4"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      placeholder="Enter your message"
    ></textarea>
  </div>

  {/* Checkbox with Text */}
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <span className="text-gray-700 text-sm">I agree that my submitted data is being collected and stored.</span>
  </div>

  {/* Submit Button */}
  <div>
    <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-blue-500 hover:to-green-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold">
      SEND MESSAGE
    </button>
  </div>
</div>



        </div>
    )
}
export default Form;