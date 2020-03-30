import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { QTAIComponent } from 'react-mui-quiz-component'
import { QTATComponent } from 'react-mui-quiz-component'
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const styles = () => ({
  root: {
    width:'50%',
  },
});

const qd = {
  id: "1",
  type: "qtat",
  title: "What kind of sentence is this?",
  text: "Sabrina is completely soaked!",
  answers: [{
      id: "1",
      text: "Exclamatory",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg",
      correct: true
    },{
      id: "2",
      text: "False",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg",
      correct: false
    }
  ]
}

class App extends Component {
  onSubmit = () => {
    console.log("in main submit")
  }

  render () {
    const { classes } = this.props
    return (
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <QTATComponent data = {qd} onSubmit={this.onSubmit}/>
          </Grid>
          <Grid item xs={12}>
            <QTAIComponent data = {qd} onSubmit={this.onSubmit}/>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(App);
