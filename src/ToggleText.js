import { useState } from 'react';
import './index.css';

function ToggleText({text}) {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <button type='button' className='toggleBtn' onClick={() => setVisible(!visible)}>{visible ? 'hide' : 'show'}</button>
            <p className={`paraphraf ${visible ? 'block' : 'hidden'}`}>{text}</p>
            
        </>
    )
}

export default ToggleText;