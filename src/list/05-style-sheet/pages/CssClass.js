import React from "react";
import '../assets/css/mystyle.css';

const CssClass = () => {
    return (
        <div>
            <h2>CssClass</h2>
            {/* class name이 그대로 노출된다는 단점이 있다. */}
            <div className="my-css-box"></div>
        </div>
    )
}

export default CssClass;