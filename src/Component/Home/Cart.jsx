
import PropTypes from "prop-types";

const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse);

    return (
        <div>
            <h1>Credit Hour Remaining:</h1>
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
            <h1>Total Credit Hour:</h1>
            <hr />
            <h1>Total Price:</h1>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
};

export default Cart;
