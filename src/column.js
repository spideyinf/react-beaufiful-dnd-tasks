import React from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;

  flex: 1 0 220px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  padding: 8px;
  background-color: white;
`

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'papayawhip' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false
    }
    return true
  }

  render() {
    {
      this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)
    }
  }
}

class Column extends React.Component {
  render() {
    return (
      <Draggable draggabledId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} innerRef={provided.innerRef}>
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              type="task"
            >
              {(provided, snapshot) => (
                <TaskList
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Column
