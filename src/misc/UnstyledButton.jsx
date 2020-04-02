import React from 'react'
import styled from '@emotion/styled'

const UnstyledButton = styled.button({
	// sort of yanked from BS3
	display: 'inline-block',
    cursor: 'pointer',
	backgroundImage: 'none',
	border: '1px solid transparent',
	whiteSpace: 'nowrap',
	outline: 'none',
})

export default UnstyledButton
