import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const desgContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'baiz'}>
        <desgContext.Provider value={'developer'}>
					<ComponentC />
				</desgContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App