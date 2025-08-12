import { useState } from 'react';

function BtnLikes({initLikes}) {
    const [likes, setLikes] = useState(initLikes);

    return (
        <>
            <label>{likes}</label>
            <button type='button' className='btn' onClick={() => setLikes(likes + 1)}></button>
        </>
    )
}

export default BtnLikes;