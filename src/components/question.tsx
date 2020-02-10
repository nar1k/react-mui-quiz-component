/**
 * @class QuestionComponent
 */

import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import green from '@material-ui/core/colors/green';

export type QuestionData = {
  id: string,
  type: string,
  title?: string,
  question?: string,
  image?: string,
  audio?: string,
  answers: Answer[],
  correctAnswers: string[]
}

export type Answer = {
  id: string,
  image?: string,
  title?: string
}

export type Props = { 
  data: QuestionData,
  classes?: any,
  onSubmit?: (correct: boolean) => void,
}

type State = {
  selected: string
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative' as 'relative',
    cursor: 'pointer' as 'pointer',
},
  selected: {
    background: green[200],
    height: '100%',
    width: '100%',
    opacity: '0.2',
    top: 0,
    left: 0,
    position: 'absolute' as 'absolute',
    padding: 0,
    transition: 'opacity .5s',
  },
  title: {
    textAlign: 'center' as 'center',
    margin: theme.spacing(3,3,3,3),
  },
  question: {
    padding: theme.spacing(3,3,3,3) ,
  },
  answers: {
    padding: theme.spacing(3,3,3,3),
  },
  submit: {
    padding: theme.spacing(3,3,3,3),
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
});

class QuestionComponent extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      selected: ""
    }
  }

  renderQuestionTitle(){
    const { classes, data } = this.props
    if (data.type == "text"){
      return (
        <Typography variant="h6" gutterBottom className={classes.title}>
          { data.title }
        </Typography>
      )
    }
    return ""
  }
  
  onSubmit = () => {
    console.log("in submit")
    if(this.props.onSubmit){
      const correct = this.state.selected == this.props.data.correctAnswers[0]
      this.props.onSubmit(correct)
    }
  }

  onOptionClick = (event:React.MouseEvent<HTMLDivElement>) => {
    console.log("event - " + event.target);
    let current = event.target as HTMLImageElement;
    console.log(`clicked on id ${current.id}`)
    this.setState({
      selected: current.id
    })
  }

  renderAnswers(){
    const {
      classes,
      data
    } = this.props

    let answers: JSX.Element[] = []
    data.answers.map((answer) => {
      answers.push(<Grid item xs={3}>

        <Paper className={classes.paper} onClick={this.onOptionClick}>
          <Image id={answer.id} src={answer.image ? answer.image : ""} aspectRatio={(3/4)}/>
          { answer.id == this.state.selected && <div className={classes.selected }/> }
        </Paper>
      </Grid>)
    })
    return answers
  }

  render() {
    const {
      classes,
      data
    } = this.props

    return (
      <div className={classes.root}>
        { this.renderQuestionTitle()}
        <Paper className={classes.question} elevation={3}>
          <Typography variant="h3" gutterBottom className={classes.title}>
            { data.question }
          </Typography>
        </Paper>

        <Grid container spacing={3} className={classes.answers}>
          {this.renderAnswers()}
        </Grid>
        <Grid container spacing={3} className={classes.submit}>
          <Grid item >
            <Button size="large" variant="contained" color="primary" onClick={this.onSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(QuestionComponent);
