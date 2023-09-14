
import React from "react";
const Home = () => {
    return (
       <>
        <div className="container ml-6">
            
        <div className="card-container">
        <div className="w-[350px] h-[380x] bg-white shadow-2xl rounded-xl">
            <img className="p-6" src="https://i.ibb.co/SRmBNqC/js-f.jpg" alt="" />
            <h1 className="font-bold pl-5">A beginners guide to JavaScript</h1>

            <p className="font-extralight text-gray-400 pl-3">Learn the basics of JavaScript programming in this beginners guide.</p>
            <div className="flex justify-around">
            <h1>Price:15000</h1>
            <h1>Credit:1hr</h1>
            </div>
            <button className="bg-blue-500 text-white font-semibold w-10/12 text-center rounded-lg ml-7 my-3 py-1">Select</button>
        </div>
       

        </div>
        <div className="cart-container">
        
        </div>
            </div>
       
       
       
       </>
    );
};

export default Home;