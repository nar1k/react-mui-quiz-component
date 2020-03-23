import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
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
  answer: {
    padding: theme.spacing(1),
    margin: theme.spacing(3,0,0,0),
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
  },
  question: {
    padding: theme.spacing(3) ,
  },
  container: {
    margin: theme.spacing(0),
  },
});

class QTAIComponent extends React.Component<Props, State> {
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

  onOptionClick = (event:React.MouseEvent<HTMLDivElement>) => {
    let current = event.currentTarget as HTMLDivElement;
    this.setState({
      selected: current.id
    }, this.onSubmit)

  }

  renderAnswers(){
    const {
      classes,
      data
    } = this.props

    let answers: JSX.Element[] = []
    data.answers.map((answer:AnswerData) => {
      answers.push(<Grid item xs={3}>

        <Paper id={answer.id} className={classes.answer} onClick={this.onOptionClick}>
          <Image  src={answer.image ? answer.image : ""} aspectRatio={(3/4)}/>
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

        <Grid container spacing={3} className={classes.container1}>
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

export default withStyles(styles)(QTAIComponent);
