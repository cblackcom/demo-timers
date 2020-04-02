import styled from '@emotion/styled'
import * as style from '../misc/style'
import ViewTimerContainer from '../timer/ViewTimerContainer'

export const Box = styled.div({
	borderWidth: 5,
	borderStyle: 'solid',
	borderColor: style.color.notQuiteBlack,
	borderRadius: style.borderRadius,
	padding: 20,
	overflow: 'hidden',
})

export const BoxTitle = styled.div({
	borderBottomWidth: 2,
	borderBottomStyle: 'solid',
	borderBottomColor: style.color.notQuiteBlack,
	marginBottom: 10,
})

// NOTE
// You can create a restyled React component from any component that accepts
// the `className` prop, like ViewTimerContainer

export const BoxViewTimerContainer = styled(ViewTimerContainer)({
	marginBottom: 10,
})
