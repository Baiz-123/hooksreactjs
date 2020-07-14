import React from 'react'
import { UserContext, desgContext } from '../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{user => {
					return (
						<desgContext.Consumer>
							{desg => {
                return <div>User context value {user}, channel context value {desg}</div>
							}}
						</desgContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF