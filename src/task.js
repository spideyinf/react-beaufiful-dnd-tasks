import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  ${({ isDragging, isDragDisabled }) =>
    isDragDisabled
      ? `background-color: lightgrey;
        color: gray;
      `
      : isDragging &&
        `
        background-color: orange;
        border-color: orange;
        color: white;
        `};
`

class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1'
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task
