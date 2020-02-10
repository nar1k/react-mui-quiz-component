/**
 * @class QuizComponent
 */

import * as React from 'react'
import { withStyles } from '@material-ui/styles';
import QuestionComponent from './components/question'

type Props = {
  classes?: any,
}

const styles = () => ({
  root: {
    width: '100%',
  },
});

class QuizComponent extends React.Component<Props> {
  render() {
    const {
      classes
    } = this.props

    return (
      <div className={classes.root}>
      </div>
    )
  }
}

export { QuestionComponent};
export default withStyles(styles)(QuizComponent);
