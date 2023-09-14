/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [allCourse, setallCourse] = useState([]);
    useEffect(()=>{
        fetch("./info.json")
        .then(res => res.json())
        .then((data) => setallCourse(data))
    } ,[]);
    console.log(allCourse);
    return (
       <>
        <div className="container ml-6 flex justify-between">
            
       {
        allCourse.map(course =>( <div className="card-container ">
        <div className="w-[350px] h-[380x] bg-white shadow-2xl rounded-xl">
            <img className="p-6" src={course.img} alt="" />
            <h1 className="font-bold pl-5">{course.courseName}</h1>

            <p className="font-extralight text-gray-400 pl-3">{course.courseDetails}</p>
            <div className="flex justify-around">
            <h1>Price:{course.price}</h1>
            <h1>Credit:{course.credit}Hr</h1>
            </div>
            <button className="bg-blue-500 text-white font-semibold w-10/12 text-center rounded-lg ml-7 my-3 py-1">Select</button>
        </div>
       

        </div>))
       }
        <div className="cart-container w-[250px] h-[380px] px-4 bg-white shadow-2xl rounded-xl">

        <h1>Credit Hour Remaining:</h1>
        <hr />
        <h1 className="font-bold text-xl pb-4"> Course Name:</h1>
        <hr />
        <h1>Total Credit Hour:</h1>
        <hr />
        <h1>Total Price:</h1>

        </div>
            </div>
       
       
       
       </>
    );
};

export default Home;