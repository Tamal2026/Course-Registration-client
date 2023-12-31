import { useState, useEffect } from "react";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiDollarSign} from 'react-icons/fi';
import { BsBook} from 'react-icons/bs';


const Home = () => {
 
    const [allCourse, setallCourse] = useState([]);
    const [selectedCourse, setselectedCourse] = useState([]);
    const [remaining,setremaining] = useState(20);
    const [totalCredit,settotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch("./info.json")
        .then(res => res.json())
        .then((data) => setallCourse(data))
    }, []);
    const handleCourse = (course) => {
        const isExist = selectedCourse.find((item) => item.id === course.id);
        let count = course.credit;
        let countPrice = course.price;
      
        if (isExist) {
          couseSelectNotify();
        } else {
          if (totalCredit + count > 20) {
            maxCredit();
            return;
          }
      
          setselectedCourse([...selectedCourse, course]);
      
          selectedCourse.forEach((item) => {
            count += item.credit;
            countPrice += item.price;
          });
      
          settotalCredit(count);
          setTotalPrice(countPrice);
          const totalRemaining = 20 - count;
          setremaining(totalRemaining);
        }
      };
      
const couseSelectNotify = () => toast.error("You already select this course");
const maxCredit = () => toast.warn("You reached maximum credit of courses");

    return (
        <>
            <div className="container flex ml-6 mt-8">
                <div className="flex flex-wrap mx-4">
                    {allCourse.map(course => (
                        <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-6">
                            <div className="w-[350px] h-[400px] bg-white shadow-2xl rounded-xl">
                                <img className="p-6" src={course.img} alt="" style={{ width: '400px', height: '250px' }} />
                                <h1 className="font-bold pl-5">{course.courseName}</h1>
                                <p className="font-extralight text-gray-400 pl-3">{course.courseDetails}</p>
                                <div className="flex justify-around">
                                    <h1 className="flex items-center gap-2"><FiDollarSign></FiDollarSign>Price: {course.price}</h1>
                                    <h1 className="flex items-center gap-2"><BsBook></BsBook>Credit: {course.credit} Hr</h1>
                                </div>
                                <button className="bg-blue-500 text-white font-semibold w-10/12 text-center rounded-lg ml-7 my-3 py-1" onClick={()=>handleCourse(course)}>Select</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-container w-[950px] h-[380px] px-4 bg-white shadow-2xl rounded-xl">
                    <Cart totalPrice = {totalPrice} selectedCourse ={selectedCourse} remaining = {remaining} totalCredit ={totalCredit}></Cart>
                  
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Home;
