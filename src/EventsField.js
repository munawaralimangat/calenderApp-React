import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"; // Import icons for create, edit, and delete buttons
import AddEventModal from "./AddEventModal";
import EditEventModal from "./EditEventModal";

const EventsField = ({ date }) => {

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)
  const [editEvent,setEditEvent] = useState('')

  useEffect(()=>{
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if(storedEvents){
      setEvents(storedEvents)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('events',JSON.stringify(events))
  },[events])

  //handling creation of event
  const handleCreateEvent = (newEvent)=>{
    const id = events.length+1;
    const newEventWithDate = {
      ...newEvent,
      id,
      date:date.toDate().toDateString()
    }
    setEvents([...events,newEventWithDate])
    setIsModalOpen(false)
  }

  //handling updation of event
  const handleUpdateEvent = (event)=>{
    console.log(event)
    setEditEvent(event)
    setIsEditModalOpen(true)
    console.log(editEvent,"editedvb")
  }
  // Filter events for the selected date
  const eventsForDate = events.filter((event) => event.date === date.toDate().toDateString());

  return (
    <div className=" mt-4 border p-4 rounded-lg shadow-lg w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Events</h2>
        <button
          onClick={()=>setIsModalOpen(true)}
          className="flex items-center text-sm text-gray-700 bg-gray-200 rounded-md px-3 py-1">
          <FaPlus className="mr-1" /> Create
        </button>
      </div>
      {eventsForDate.length === 0 ? (
        <p>No events for this date.</p>
      ) : (
        <ul className="space-y-2">
          {eventsForDate.map((event) => (
            <li key={event.id} className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-2">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>

              <div className="flex space-x-2">

                <button onClick={
                  ()=>handleUpdateEvent(event)

                  } className="text-gray-500 hover:text-gray-700">
                  <FaEdit />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>

              </div>

            </li>
          ))}
        </ul>  
      )}

      <AddEventModal 
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      onCreateEvent={handleCreateEvent}
      />

      <EditEventModal
      isOpen={isEditModalOpen}
      onClose={()=>setIsEditModalOpen(false)}
      eventData={editEvent}
      
      />
    </div>
  );
};

export default EventsField;
