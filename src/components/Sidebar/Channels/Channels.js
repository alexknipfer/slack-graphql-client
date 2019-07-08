import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Input
} from 'semantic-ui-react'

import { AddChannelSection, ChannelHeader, StyledPlusIcon } from './style'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'

const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannel($name: String!, $public: Boolean!) {
    createChannel(name: $name, public: $public) {
      id
    }
  }
`

export function Channels() {
  const [modalVisible, setModalVisible] = useState(false)
  const [channelName, setChannelName] = useState('')
  const createChannel = useMutation(CREATE_CHANNEL_MUTATION)

  const handleCreateChannel = async () => {
    await createChannel({
      variables: { name: channelName, public: true }
    })

    setModalVisible(false)
  }

  return (
    <div>
      <AddChannelSection>
        <ChannelHeader>Channels</ChannelHeader>
        <StyledPlusIcon
          name="plus square outline"
          onClick={() => setModalVisible(true)}
        />
      </AddChannelSection>
      {modalVisible && (
        <Modal size="tiny" open={modalVisible}>
          <ModalHeader>Create a channel</ModalHeader>
          <ModalContent>
            <Input
              type="text"
              value={channelName}
              onChange={e => setChannelName(e.target.value)}
              placeholder="e.g. marketing"
              icon="hashtag"
              iconPosition="left"
              style={{ width: '100%' }}
            />
          </ModalContent>
          <ModalActions>
            <Button negative onClick={() => setModalVisible(false)}>
              Cancel
            </Button>
            <Button
              positive
              content="Create channel"
              onClick={handleCreateChannel}
            />
          </ModalActions>
        </Modal>
      )}
    </div>
  )
}
