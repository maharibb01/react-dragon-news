import { useEffect, useState } from "react";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h2>Left side</h2>
        </div>
    );
};

export default LeftSideNav;