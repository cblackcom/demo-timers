import styled from '@emotion/styled'
import * as style from './style'

export const UtilityFloat = styled.div({
	backgroundColor: 'white',
	boxShadow: '0px 3px 6px rgba(0,0,0,.16)',
  	borderRadius: style.borderRadius,
})

export const UtilityFloatAbsolute = styled(UtilityFloat)({
	position: 'absolute',
  	minWidth: '100%',
  	zIndex: 999,
})
