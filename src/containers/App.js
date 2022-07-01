import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox"
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";


function App() {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }



    const filteredRobots = robots.filter(r => {
        return r.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ?
        <h1>Loading</h1> :
        <div className="tc">
            <h1>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <Searchbox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>

}

export default App;