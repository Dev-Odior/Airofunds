import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../state/modals/modalsReducer";

const NavTable = ({ title, sub }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (route) => {
    navigate(route);
    dispatch(toggleModal());
  };

  return (
    <div className="capitalize inline-block min-w-max">
      <h4 className="font-normal mb-3 ">{title}</h4>
      <motion.ul>
        {sub.map((item, index) => {
          return (
            <motion.li
              onClick={() => onClickHandler(item?.route)}
              key={index}
              whileHover={{ x: 2 }}
              className="text-[10px] mb-2  "
            >
              {item?.title}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
export default NavTable;
