import React from 'react'

import './pictures.css'

const PicturesT = props => {
	const style = {
		backgroundImage: `url("${props.src}")`,
	}
	return (
		<div onClick={() => props.handleClick(props.id)} className='marcoCar'>
			<div className='marcoPic'>
				<div className='picIn' style={style} alt='' />
			</div>
			<h4 className='fLM'>{props.name}</h4>
		</div>
	)
}

export default PicturesT
