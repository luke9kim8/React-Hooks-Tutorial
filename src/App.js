import React, {useState} from 'react'
import ComponentA from './components/ComponentA'
import './App.css'

export const UsernameContext = React.createContext()
export const MajorContext = React.createContext()

const App = () => {
	const [username, setUsername] = useState("")
	const [major, setMajor] = useState("")
	

	return (
		<div className="App">
			<h1>App component</h1>
			<h3>username: {username}</h3>
			<h3>major: {major}</h3>
			<input type="text" onChange={e => setUsername(e.target.value)} placeholder="Your Name" />
			<input type="text" onChange={e => setMajor(e.target.value)} placeholder="Your Major" />
			{/* <ComponentA props={username}/> */}
			<UsernameContext.Provider value={username}>
				<MajorContext.Provider value={major}>
					<ComponentA />
				</MajorContext.Provider>
			</UsernameContext.Provider>
		</div>
	)
}

export default App;
