import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-2xl font-bold">Dragon News</h2>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3"></div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;