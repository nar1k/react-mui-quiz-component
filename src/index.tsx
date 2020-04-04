/**
 * @class QuizComponent
 */

import * as React from 'react'
import { withStyles } from '@material-ui/styles';
import QTAIComponent from './components/qtai'
import QTATComponent from './components/qtat'
import QTSATComponent from './components/qtsat'

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

export { QTAIComponent, QTATComponent, QTSATComponent };
export default withStyles(styles)(QuizComponent);
