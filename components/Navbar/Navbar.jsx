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
          <a href="https://drive.google.com/file/d/1dp4DJcE6LlGzSG-ZeW8S7pYJsZncxlt6/view?usp=sharing">
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
