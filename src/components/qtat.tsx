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
  container: {
    padding: theme.spacing(0),
  },
  answerSelected: {
    minHeight: '100px',
    margin: theme.spacing(3,0,3,0),
    padding: theme.spacing(3,0,3,0),
    backgroundColor: green[500],
  },
  title: {
    textAlign: 'center' as 'center',
  },
  question: {
    padding: theme.spacing(3) ,
  },
  answer: {
    minHeight: '100px',
    margin: theme.spacing(3,0,3,0),
    padding: theme.spacing(3,0,3,0),
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
      selected: current.id,
    }, this.onSubmit)
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

        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.question} elevation={3}>
              <Typography variant="h3" gutterBottom className={classes.title}>
                { data.question }
              </Typography>
            </Paper>
          </Grid>
          {this.renderAnswers()}
        </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(QTATComponent);
