import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import * as style from './style'

const BsButtonRoot = styled.button(props => ({
	// sort of yanked from BS3
	display: 'inline-block',
    cursor: 'pointer',
	backgroundImage: 'none',
	border: '1px solid transparent',
	whiteSpace: 'nowrap',
	padding: '6px 12px',
	fontSize: '14px',
	userSelect: 'none',

	borderRadius: style.borderRadius,
	backgroundColor: style.color[props.backgroundColor] || style.color.boringGrey,
	color: 'white',
	outline: 'none',

	'&:hover': {
		color: '#ddd',
	}
}))

const BsButton = React.memo(props => (
	<BsButtonRoot
		backgroundColor={props.color}
		className={props.className}
		onClick={props.onClick}
	>
		<FontAwesomeIcon icon={props.icon} />
		&nbsp;&nbsp;
		{props.children || 'Button!'}
	</BsButtonRoot>
))

export default BsButton
