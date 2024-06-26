import { useEffect, useState } from "react"
const EditEventModal = ({isOpen,onClose,eventData,onSave})=>{
    console.log(eventData)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    useEffect(()=>{
        if(eventData){
            setTitle(eventData.title)
            setDescription(eventData.description)
        }
    },[eventData]);

    const handleSave = ()=>{
        onSave({
            ...eventData,
            title:title,
            description:description
        })
        onClose()
    }
    
    if(!isOpen) return null
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Edit Event</h2>
        
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded-md p-2"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-300 rounded-md p-2"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Save
          </button>
          <button onClick={onClose} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Cancel
          </button>
        
      </div>
    </div>
    )
}

export default EditEventModal;