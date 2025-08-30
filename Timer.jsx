import React, { useEffect } from 'react'
import { useState } from 'react';
export const Timer = () => {
    const[currentTime,setCurrentTime]=useState(new Date());
    useEffect(()=>
    {
      const timer=setInterval(()=>
      {
        setCurrentTime(new Date())
      },1000);
      return()=>clearInterval(timer); 
    },[])

    const fromatTimeWithLeadingZero=(num)=>
    {
      return num<10 ? `0${num}`:num;
    }
    const formatHour=(hour)=>
    {
      return hour===0?12:hour>12?hour-12:hour;
    }

    const formateDate=(date)=>{
      const options={weekday:"long",year:"numeric",month:"long",day:"numeric"}
      return date.toLocaleDateString(undefined,options);
    }
  return (
    <>
    <div className="digital-clock">
        <h1>Digital-Clock</h1>
        <div className="Time">{fromatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :
          {fromatTimeWithLeadingZero(currentTime.getMinutes())}  : 
             {fromatTimeWithLeadingZero(currentTime.getSeconds())}
             {currentTime.getHours()>=12? " PM " : " AM " }
        </div>
        <div className="Date">{formateDate(currentTime)}</div>
    </div>
    </>
  )
}
