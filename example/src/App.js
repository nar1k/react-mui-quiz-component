import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { QuestionComponent } from 'react-mui-quiz-component'
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const styles = () => ({
  root: {
    width:'50%',
  },
});

const qd = {
  id: "1",
  qType: "text",
  title: "Which book is this quote from?",
  question: "Adding manpower to a late software project, makes it later.",
  answers: [{
      id: "1",
      title: "Mythical Man Month",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg"
    },{
      id: "2",
      title: "Code Complete",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg"
    },{
      id: "3",
      title: "Pragmatic Programmer",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg"
    },{
      id: "4",
      title: "Clean Code",
      image: "https://images-na.ssl-images-amazon.com/images/I/51J1VwsSv1L._SX334_BO1,204,203,200_.jpg"
    }
  ],
  correctAnswers: ["1"]
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
            <QuestionComponent data = {qd} onSubmit={this.onSubmit}/>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(App);
