import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

const Span = styled.span`
margin:12px 10px 0 0;
margin-left: 0;
padding: 1px 10px 4px;
background-color: ${colors.grey};
`

const SpanContent = ({children}) => {
  return (
    <Span>
      {children}
    </Span>
  )
}

export default SpanContent
