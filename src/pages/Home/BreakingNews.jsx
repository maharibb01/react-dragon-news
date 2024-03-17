import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-5 bg-gray-100 p-2">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-20" to="/">I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mr-20" to="/">I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mr-20" to="/">I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mr-20" to="/">I can be a React component, multiple React components, or just some text...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;