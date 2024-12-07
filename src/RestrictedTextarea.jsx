import {useState} from "react";
import "./RestrictedTextarea.css"

export default function RestrictedTextarea() {
    const maxCount = 250;

    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        setCount(e.target.value.length);
    }


    return (
        <div className={`restricted-textarea ${count === maxCount ? 'restricted-textarea--error' : ''}`}>
            <textarea placeholder="Start typing ..."
                      className={`restricted-textarea__textarea ${count === maxCount ? 'restricted-textarea__textarea--error' : 'restricted-textarea__textarea--success'}`}
                      onChange={handleChange} maxLength={maxCount}/>
            <span className="restricted-textarea__count">{count} / {maxCount}</span>
        </div>
    )
}