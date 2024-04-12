import "./navbar.scss"

const Navbar = ()=> {
    return (
    
        <div className="navbar">
        {/* {sidebar} */}
        <div className="wrapper">
            <span>Aman Yadav</span>
            <div className="social">
                <a href="#"><img src="/public/facebook.png" alt=""></img></a>
                <a href="#"><img src="/public/instagram.png" alt=""></img></a>
                <a href="#"><img src="/public/youtube.png" alt=""></img></a>
                <a href="#"><img src="public/dribbble.png" alt=""/></a>

            </div>
        </div>
        </div>



    )
}

export default Navbar