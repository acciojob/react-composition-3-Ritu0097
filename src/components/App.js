import React from 'react'
import Tooltip from './Tooltip'
import './App.css'
const App = () => {
	return (
		<div>
			<h2 class="tooltip">
				<Tooltip text="This is a tooltip">Hover over me</Tooltip>
			</h2>
			<br />
			<p class="tooltip">
				<Tooltip text="This is another tooltip">
					Hover over me to see another tooltip
				</Tooltip>
			</p>
		</div>
	)
}

export default App
