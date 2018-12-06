import React, { Component } from 'react'
import {
  Button,
  Paper,
  TextField,
  Typography
} from '@material-ui/core/Paper'

export default class App extends Component {
  state = {
    exercises: [],
    title: ''
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    })

  render() {
    const { title } = this.state
    return <Paper>
      <Typography variant="display1" align="center" gutterBottom>
        Exercises
      </Typography>

      <form>
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
    </Paper>
  }
}
