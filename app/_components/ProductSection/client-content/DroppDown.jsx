"useClient";

import { updateCategory } from "../../../_RTK/slices/Category";
import { useDispatch } from "react-redux";

function DropDown({ list }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // why this just every drop down we will use will get all products
  //   setCategory("all");
  // }, []);

  console.log(list, "this is liset");

  const upDateCoursesCategory = (e) => {
    dispatch(updateCategory(e.target.value)); //updating useContext
  };

  return (
    <select
      name="category"
      id="category"
      className=" text-primary cursor-pointer rounded sm:px-1 sm:py-[0.4rem] lg:px-3 lg:px-2 text-[13px] md:text-base"
      onInput={(e) => upDateCoursesCategory(e)}
    >
      <option selected disabled>
        Filter Categories
      </option>
      <option>all</option>
      {list?.map((ele, ind) => (
        <option key={ind} value={ele}>
          {ele}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
