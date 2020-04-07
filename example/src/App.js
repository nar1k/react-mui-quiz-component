import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { QTAIComponent } from 'react-mui-quiz-component'
import { QTATComponent } from 'react-mui-quiz-component'
import { QTSATComponent } from 'react-mui-quiz-component'
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
  text: "<u>&nbsp;&nbsp;&nbsp;</u> is completely soaked!",
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


const qdf = {
  id: "1",
  type: "qtat",
  title: "Add",
  text: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.872ex" height="6.509ex" style="vertical-align: -3.005ex;" viewBox="0 -1508.9 3820 2802.6" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">
<title id="MathJax-SVG-1-Title">StartLayout 1st Row 1st Column 123 2nd Column Blank 2nd Row 1st Column plus 4323 2nd Column Blank EndLayout underbar</title>
<defs aria-hidden="true">
<path stroke-width="1" id="E1-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
<path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
<path stroke-width="1" id="E1-MJMAIN-33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
<path stroke-width="1" id="E1-MJMAIN-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
<path stroke-width="1" id="E1-MJMAIN-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
</defs>
<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">
<g transform="translate(275,0)">
<g transform="translate(-11,0)">
<g transform="translate(1779,600)">
 <use xlink:href="#E1-MJMAIN-31"></use>
 <use xlink:href="#E1-MJMAIN-32" x="500" y="0"></use>
 <use xlink:href="#E1-MJMAIN-33" x="1001" y="0"></use>
</g>
<g transform="translate(0,-700)">
 <use xlink:href="#E1-MJMAIN-2B" x="0" y="0"></use>
<g transform="translate(1278,0)">
 <use xlink:href="#E1-MJMAIN-34"></use>
 <use xlink:href="#E1-MJMAIN-33" x="500" y="0"></use>
 <use xlink:href="#E1-MJMAIN-32" x="1001" y="0"></use>
 <use xlink:href="#E1-MJMAIN-33" x="1501" y="0"></use>
</g>
</g>
</g>
</g>
<line stroke-linecap="square" stroke-width="75" y2="37" y1="37" x1="37" x2="3782" transform="translate(0,-1175)"></line>
</g>
</svg>`,
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

const qds = {
  id: "1",
  type: "qtsat",
  title: "Find the missing number",
  text: "AAA,BBB,?,DDD,EEE",
  answers: [{
      id: "1",
      text: "CCC",
      image: "",
      correct: true
    },{
      id: "2",
      text: "FFF",
      image: "",
      correct: false
    },{
      id: "3",
      text: "GGG",
      image: "",
      correct: false
    },{
      id: "4",
      text: "HHH",
      image: "",
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
            <QTSATComponent data = {qds} onSubmit={this.onSubmit}/>
          </Grid>
          <Grid item xs={12}>
            <QTATComponent data = {qd} onSubmit={this.onSubmit}/>
          </Grid>
          <Grid item xs={12}>
            <QTAIComponent data = {qd} onSubmit={this.onSubmit}/>
          </Grid>
          <Grid item xs={12}>
            <QTATComponent data = {qdf} centered={true} onSubmit={this.onSubmit}/>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(App);
