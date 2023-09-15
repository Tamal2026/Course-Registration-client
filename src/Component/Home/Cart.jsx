
import PropTypes from "prop-types";

const Cart = ({ selectedCourse,remaining,totalCredit }) => {
    console.log(selectedCourse);

    return (
        <div>
            <h1 className="mb-3">Credit Hour Remaining{remaining}</h1>
            <hr />
            <h1 className="font-bold text-xl pb-4">Course Name:
                <ul>
                    {selectedCourse.map((course) => (
                        <li className="text-black font-extralight" key={course.id}>
                            {course.courseName}
                        </li>
                    ))}
                </ul>
            </h1>
            <hr />
            <h1 className="text-black">Total Credit Hour: {totalCredit}</h1>
            <hr />
            <h1>Total Price:</h1>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    remaining:PropTypes.func,
    totalCredit:PropTypes.func

};

export default Cart;
