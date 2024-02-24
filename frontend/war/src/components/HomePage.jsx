import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const connectedUser = useSelector(state => state.user.connectedUser);

    useEffect(() => {
        console.log(connectedUser);
    }, []);

    return (
        <>
            {connectedUser !== null && <h2>hello {connectedUser.name}</h2>}
            <div>HomePage</div>
        </>
    )
}

export default HomePage