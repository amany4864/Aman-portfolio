import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">

      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aman Yadav
        </motion.span>
        <div className="social">
          <a href="https://drive.usercontent.google.com/u/0/uc?id=1l6iTY1RdOTOA-FvKIe3bEOgIiGQGUEIl&export=download">
          <img src="/approved.png" alt="" width= "40 px" />
          </a>
          <a href="https://www.linkedin.com/in/aman4864y/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/amany4864">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
