import { useState } from 'react';

function BtnLikes() {
    const [likes, setLikes] = useState(0);

    return (
        <>
            <label>{likes}</label>
            <button type='button' className='btn' onClick={() => setLikes(likes + 1)}></button>
        </>
    )
}

export default BtnLikes;