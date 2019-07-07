import React from 'react'
import { GridColumn } from 'semantic-ui-react'

import { StyledGrid, StyledGridColumn } from './style'

export function DefaultLayout({ children }) {
  return (
    <StyledGrid columns="2" padded={false} relaxed={false}>
      <StyledGridColumn computer={3} stretched>
        Testing
      </StyledGridColumn>
      <GridColumn computer={13}>{children}</GridColumn>
    </StyledGrid>
  )
}
