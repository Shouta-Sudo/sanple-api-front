import React from 'react'

const Home = ({user}: {user: any}) => {

    let message;
    if (user) {
        message = `${user.first_name} ${user.last_name}`
    } else {
        message = 'you are not logged in!'
    }
    return (
        <>
            <h1>
                {message}
            </h1>
        </>
    )
}

export default Home