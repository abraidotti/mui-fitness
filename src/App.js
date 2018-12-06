import React, { Component } from 'react'
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

export default class App extends Component {
  state = {
    exercises: [
      { id: 1, title: 'Bro sweats' },
      { id: 2, title: 'Cheese rinds' },
      { id: 3, title: 'Juice smacks' }
    ],
    title: ''
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    })

  handleCreate = event => {
    event.preventDefault()

    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }))
    }
  }

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(exercise => exercise.id !== id)
    }))

  render() {
    const { title, exercises } = this.state
    return (
      <Paper>
        <Typography variant="display1" align="center" gutterBottom>
          Exercises
        </Typography>

        <form onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            color="primary"
            variant="raised"
          >
            Create
          </Button>
        </form>

        <List>
          {exercises.map(({ id, title }) =>
            <ListItem key={id}>
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton
                  color="primary"
                  onClick={() => this.handleDelete(id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </Paper>
    )
  }
}
