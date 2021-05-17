import React from 'react'

const Main = () => {
    const name = "Theo"
    const loading = true

    return (
        <main>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <h1>Hello World! My name is {name}</h1>
            )}
        </main>
    )
    
    
}

export default Main;