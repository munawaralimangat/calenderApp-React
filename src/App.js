import React, { useState } from 'react';
import { generateDate, months } from './util/Calender';
import { GrNext, GrPrevious } from 'react-icons/gr';

import './App.css';
import cn from './util/cn';
import dayjs from 'dayjs';
import AddEventForm from './AddEventForm';

function App() {
  
  const days = ["S","M","T","W","T","F","S"];
  const currentDate = dayjs();
  const [today,setTody] = useState(currentDate);
  const [selectDate,setSelectDate] = useState(currentDate)

  const handleClick = (date)=>{
    setSelectDate(date)
  }
  
  return (
    <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center'>
    <div className='w-96 h-96'>
      <div className='flex justify-between m-2'>
      <div>
        <h1 className='font-semibold'>{months[today.month()]}, {today.year()}</h1>
      </div>
      <div className='flex items-center gap-10'>
        <GrPrevious className='w-5 h-5 cursor-pointer' onClick={()=>{
          setTody(today.month(today.month()-1))
        }}/>
        <h1 className='cursor-pointer' onClick={()=>{
          setTody(currentDate)
        }}>Today</h1>
        <GrNext className='w-5 h-5 cursor-pointer'  onClick={()=>{
          setTody(today.month(today.month()+1))
        }}/>
      </div>
      </div>
      <div className='w-full grid grid-cols-7 text-gray-500'>
        {days.map((day,index)=>{
          return <h1 key={index} className='h-14 border-t grid place-content-center text-sm'>{day}</h1>
        })}
      </div>
      <div className="w-full grid grid-cols-7">
        {generateDate(today.month(),today.year()).map(({date,currentMonth,today},index)=>{
          return(
            <div className='h-14 border-t grid place-content-center'>
              <h1 key={index} className={
                cn(
                currentMonth?"":"text-gray-400 text-sm",
                today?"bg-red-500 text-white rounded-full font-semibold hover:bg-black":"",
                selectDate.toDate().toDateString()===date.toDate().toDateString()?"bg-black text-white":"",
                "h-10 w-10 grid place-content-center hover:bg-black hover:text-white rounded-full transition-all cursor-pointer"
                )
              } onClick={()=>{
                  handleClick(date)
                }} > {date.date()}</h1>
            </div>
          )
        })}
      </div>
    </div>
    <div className='h-96 px-5'>
      <h1 className='font-semibold'>Schedule for {selectDate.toDate().toDateString()}</h1>
      {/* <AddEventForm/> */}
    </div>
    </div>
  );
}

export default App;
