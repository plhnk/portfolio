import React from 'react'
import Button from './Button'
import Search from './Search'
import Snippets from './Snippets'
import smoothScroll from '../../helpers/scroll'

import './style.css'

class Wiki extends React.Component {
	componentDidMount() {
       smoothScroll(document.getElementById("wikiContainer"))
	}
	render() {
		return (
			<div id="wikiContainer"
				style={{marginBottom: '500px'}} >
				<Button />
				<Search />
				<Snippets />
			</div>
		)
	}
}

export default Wiki
