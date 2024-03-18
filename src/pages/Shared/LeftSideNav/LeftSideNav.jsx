import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setCategories(data);
            })
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold mb-10">All Category</h2>
            <div className="space-y-8">
                {
                    categories.map(category => {
                        return <Link to={`/category/${category.id}`} className="block font-semibold" key={category.id}>{category.name}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default LeftSideNav;