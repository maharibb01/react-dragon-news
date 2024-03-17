import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-5">Find Us On</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub />
                    Github
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;