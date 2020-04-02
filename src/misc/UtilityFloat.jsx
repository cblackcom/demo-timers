import styled from '@emotion/styled'
import * as style from './style'

export const UtilityFloat = styled.div({
	backgroundColor: 'white',
	boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
  	borderRadius: `0 ${style.borderRadius}px ${style.borderRadius}px ${style.borderRadius}px`,
})

export const UtilityFloatAbsolute = styled(UtilityFloat)({
	position: 'absolute',
	zIndex: 2,
  	minWidth: '100%',
})
