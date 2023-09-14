


const Cart = ({selectedCourse}) => {

    return (
        <div>
          {
            selectedCourse.map((course) =>{
                <li className="text-black">{course.courseName}</li>
            })
          }
              <h1>Credit Hour Remaining:</h1>
                    <hr />
                    <h1 className="font-bold text-xl pb-4">Course Name:{}</h1>
                    <hr />
                    <h1>Total Credit Hour:</h1>
                    <hr />
                    <h1>Total Price:</h1>
        </div>
    );
};

export default Cart;