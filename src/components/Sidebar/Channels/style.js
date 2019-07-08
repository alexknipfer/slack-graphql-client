import styled from 'styled-components/macro'
import { Icon } from 'semantic-ui-react'

export const AddChannelSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ChannelHeader = styled.div`
  font-size: 16px;
  color: rgb(197, 183, 198);
`

export const StyledPlusIcon = styled(Icon)`
  color: rgb(197, 183, 198);
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`
