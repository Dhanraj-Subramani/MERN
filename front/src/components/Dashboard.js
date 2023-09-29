import React from 'react'

function Dashboard(props) {
    console.log(props)
    return (

        <div>Welcome back {props.data.fname}!</div>
    )
}

export default Dashboard