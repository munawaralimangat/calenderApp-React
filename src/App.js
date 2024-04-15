import React, { useEffect, useState } from "react";
import { generateDate, months } from "./util/Calender";
import { GrNext, GrPrevious } from "react-icons/gr";

import "./App.css";
import cn from "./util/cn";
import dayjs from "dayjs";
import EventsField from "./EventsField";
import Header from "./Header";

function App() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setTody] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [markedDates,setMarkedDates] = useState([])
  console.log(markedDates,'markedDates')

  useEffect(()=>{
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if(storedEvents){
      const events = storedEvents;
      const dates = events.map(event=>event.date)
      setMarkedDates(dates)
    }
  },[markedDates])

  const handleClick = (date) => {
    setSelectDate(date);
  };



  return (
  <div>
    <Header/>
    <div className="flex mt-20 flex-wrap justify-center w-full max-w-screen-lg mx-auto gap-10 h-screen items-start p-5 border">
      <div className="w-96 h-96 ">
        <div className="flex justify-between m-2">
          <div>
            <h1 className="font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <GrPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setTody(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setTody(currentDate);
              }}
            >
              Today
            </h1>
            <GrNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setTody(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-7 text-gray-500">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 border-t grid place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              const isMarked = markedDates.includes(date.toDate().toDateString())
              console.log(isMarked)
              return (
                <div className="h-14 border-t grid place-content-center">
                  <h1
                      key={index}
                      className={cn(
                      currentMonth ? "" : "text-gray-400 text-sm",
                      today
                        ? "bg-red-500 text-white rounded-full font-extrabold hover:bg-black"
                        : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                        isMarked ? "text-blue-600 font-extrabold" : "",
                      "h-10 w-10 grid place-content-center hover:bg-black hover:text-white rounded-full transition-all cursor-pointer"
                    )}
                    onClick={() => {
                      handleClick(date);
                    }}
                  >
                    {" "}
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 px-5 mt-10">
        <h1 className="font-semibold">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>
        <EventsField date={selectDate} />
      </div>
    </div>
  </div>
  );
}

export default App;
