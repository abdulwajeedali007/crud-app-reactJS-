import React from 'react'
import './App.scss'

import Form from './Components/Form'

const App = () => {
    return (
        <div className="container__fluid">
            <div className="container">
                <h2>Task Manger</h2>
                <Form/> 
            </div>
        </div>
    )
}

export default App;