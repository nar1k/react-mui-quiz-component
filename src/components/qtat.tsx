import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import { QuestionData, AnswerData } from '../types'

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
  answerSelected: {
    minHeight: '90px',
    backgroundColor: green[500],
  },
  title: {
    textAlign: 'center' as 'center',
    margin: theme.spacing(1,3,1,3),
  },
  question: {
    padding: theme.spacing(1,3,1,3) ,
  },
  answers: {
    padding: theme.spacing(2,3,2,3),
  },
  answer: {
    minHeight: '90px',
    "&:hover": {
      backgroundColor: green[500]
    }
  },
  submit: {
    padding: theme.spacing(1,1,1,1),
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
});

class QTATComponent extends React.Component<Props, State> {
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
    if(this.props.onSubmit){
      const correct = this.state.selected == this.props.data.correctAnswers[0]
      this.props.onSubmit(correct)
    }
  }

  onOptionClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    let current = event.currentTarget ;
    this.setState({
      selected: current.id
    })

    this.onSubmit()
  }

  renderAnswers(){
    const {
      classes,
      data
    } = this.props

    let answers: JSX.Element[] = []
    data.answers.map((answer: AnswerData) => {
      answers.push(<Grid item xs={3}>
        <Button id={answer.id} onClick={this.onOptionClick} fullWidth className={this.state.selected === answer.id ? classes.answerSelected : classes.answer} variant="contained" disableFocusRipple  disableRipple>{answer.title}</Button>
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

      </div>
    )
  }
}

export default withStyles(styles)(QTATComponent);
