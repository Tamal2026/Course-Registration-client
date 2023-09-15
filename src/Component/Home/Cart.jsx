import PropTypes from "prop-types";

const Cart = ({ selectedCourse, remaining, totalCredit, totalPrice }) => {
  console.log(selectedCourse);

  return (
    <div className="overflow-hidden">
      <h1 className="mb-3">Credit Hour Remaining: {remaining}hr</h1>
      <hr />
      <h1 className="font-bold text-xl pb-4">Course Name:</h1>
      <ul className="list-disc pl-8">
        {selectedCourse.map((course) => (
          <li className="text-black font-extralight" key={course.id}>
            {course.courseName}
          </li>
        ))}
      </ul>
      <hr className="mt-2" />
      <h1 className="text-black pt-3 pb-1">Total Credit Hour: {totalCredit}</h1>
      <hr />
      <h1 className="pt-3">Total Price: {totalPrice} USD</h1>
    </div>
  );
};

Cart.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  remaining: PropTypes.number.isRequired, 
  totalCredit:PropTypes.func,
  totalPrice: PropTypes.number.isRequired
};

export default Cart;
