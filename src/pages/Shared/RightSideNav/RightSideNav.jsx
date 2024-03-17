import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
import bg from "../../../assets/bg1.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-5">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-5">Find Us On</h2>
                <div className="border rounded-lg">
                    <a href="" className="p-4 flex items-center gap-2 text-lg border-b">
                        <FaFacebook />
                        Facebook
                    </a>
                    <a href="" className="p-4 flex items-center gap-2 text-lg border-b">
                        <FaTwitter />
                        Twitter
                    </a>
                    <a href="" className="p-4 flex items-center gap-2 text-lg">
                        <FaInstagram />
                        Instagram
                    </a>
                </div>
            </div>
            {/* q zone */}
            <div className="mb-12 bg-[#F3F3F3] p-4">
                <h2 className="text-3xl font-semibold mb-5">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div className="w-full h-[509px] mb-5 flex justify-center items-center text-white" style={{ backgroundImage: `url(${bg})`, height: '509px', width: '100%', backgroundRepeat: 'no-repeat' }}>
                <div className="w-2/3">
                    <h1 className="text-center text-3xl font-bold">
                        Create an
                        Amazing
                        Newspaper
                    </h1>
                    <p className="text-center mt-7">
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <div className="w-full flex justify-center mt-7">
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;