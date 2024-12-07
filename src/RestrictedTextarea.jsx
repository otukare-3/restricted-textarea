import {useState} from "react";

export default function RestrictedTextarea() {
    const[count, setCount] = useState(0);

    const handleChange = (e) => {
        setCount(e.target.value.length);
    }

    return (
        <div>
            <textarea onChange={handleChange} />
            <span>{count}</span>
        </div>
    )
}