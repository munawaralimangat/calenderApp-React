import { useState } from "react";

const AddEventForm = ()=>{
    return (
        // <div>

        // </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-75">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Add Event</h2>
        <form>
          <input
            type="text"
            placeholder="Enter event description..."
            className="w-full border rounded py-2 px-3 mb-2"
          />
          <div className="flex justify-end">
            <button type="button" className="mr-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default AddEventForm;