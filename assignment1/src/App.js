import LoginForm from './components/LoginForm'
import Home from './views/Home'
import { useState } from 'react'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleSubmit = (bool) => {
        setIsLoggedIn(bool)
    }

    return (
        <div className="App">
            {
                isLoggedIn
                ? <>
                <Home/>
                </>
                : <LoginForm handleSubmit={handleSubmit}/>
            }
        </div>
    );
}

export default App;
