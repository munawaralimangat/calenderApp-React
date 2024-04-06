import { useState } from "react";

const AddEventModal = ({isOpen,onClose,onCreateEvent})=>{

    const [newEvent,setNewEvent] = useState({
        title:"",
        description:""
    })

    //on change for each charector to be stored in the state variable
    const handleInputChange = (e)=>{
        const {name,value}=e.target;
        setNewEvent({
            ...newEvent,
            [name]:value
        })
    }
    
    const handleCreateEvent = ()=>{
        if(newEvent.title.trim() !==""){
            onCreateEvent(newEvent)
            setNewEvent({
                title:"",
                description:""
            })
        }
    }
    if(!isOpen) return null  // <====ths manags to open and close the modal  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-semibold mb-4">Add Event</h2>
            <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            placeholder="Event Title"
            className="block w-full rounded-md border-gray-300 mb-4 p-2"
            />
            <textarea
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            placeholder="Event Description"
            className="block w-full rounded-md border-gray-300 mb-4 p-2"
            />
            <div className="flex justify-end">
            <button
            onClick={handleCreateEvent}
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
          >
            Add Event
            </button>
            <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
            </div>
            </div>
        </div>
    )
}



export default AddEventModal;