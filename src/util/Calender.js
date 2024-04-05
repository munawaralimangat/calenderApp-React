import dayjs from "dayjs";

export const generateDate = ( month=dayjs().month(), year=dayjs().year() )=>{

    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lasttDateOfMonth = dayjs().year(year).month(month).endOf("month");
    console.log("dayjs",dayjs().toDate())

    const arrayOfDate = []

    //create prefix
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

    //generate current date
    for (let i = firstDateOfMonth.date(); i <= lasttDateOfMonth.date(); i++) {
        
        arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
    }

    //create suffix
    const remaining = 42-arrayOfDate.length
    
    for(let i=lasttDateOfMonth.date()+1;i<=lasttDateOfMonth.date()+remaining;i++){
        arrayOfDate.push({currentMonth:false,date:firstDateOfMonth.date(i)})
    }

    return arrayOfDate
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June", 
    "July",
    "August", 
    "September", 
    "October",
    "November",
    "December"
  ];
  