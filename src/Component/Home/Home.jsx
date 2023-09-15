import { useState, useEffect } from "react";
import Cart from "./Cart";

const Home = () => {
    const [allCourse, setallCourse] = useState([]);
    const [selectedCourse, setselectedCourse] = useState([]);
    cosnt [remaining,setremaining]
    useEffect(() => {
        fetch("./info.json")
        .then(res => res.json())
        .then((data) => setallCourse(data))
    }, []);
const handleCourse=(course)=>{
    const isExist = selectedCourse.find(item=>item.id == course.id);
    let count =course.credit;
   if(isExist){
    return alert("Already Complete");
   }
   else{
    setselectedCourse([...selectedCourse,course])
    selectedCourse.forEach(item=>{
        count = count+item.credit;
    });
const totalRemaining = 20 - count;

   }
   

};

    return (
        <>
            <div className="container flex ml-6">
                <div className="flex flex-wrap mx-4">
                    {allCourse.map(course => (
                        <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-6">
                            <div className="w-[350px] h-[400px] bg-white shadow-2xl rounded-xl">
                                <img className="p-6" src={course.img} alt="" style={{ width: '400px', height: '250px' }} />
                                <h1 className="font-bold pl-5">{course.courseName}</h1>
                                <p className="font-extralight text-gray-400 pl-3">{course.courseDetails}</p>
                                <div className="flex justify-around">
                                    <h1>Price: {course.price}</h1>
                                    <h1>Credit: {course.credit} Hr</h1>
                                </div>
                                <button className="bg-blue-500 text-white font-semibold w-10/12 text-center rounded-lg ml-7 my-3 py-1" onClick={()=>handleCourse(course)}>Select</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-container w-[950px] h-[380px] px-4 bg-white shadow-2xl rounded-xl">
                    <Cart selectedCourse ={selectedCourse}></Cart>
                  
                </div>
            </div>
        </>
    );
};

export default Home;
