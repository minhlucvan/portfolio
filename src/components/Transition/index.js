import React from 'react';
import classNames from 'classnames';
import getAnimation from './animations';
import randomColor from 'randomcolor';

import './Transition.scss';

const DURATION = 1000;

class Transition extends React.Component {

    constructor(props) {
        super(props);

        const transition = getAnimation();

        this.state = {
          current: true,  
          entering: true,
          leaving: false,
          inClass: transition.in,
          outClass: transition.out,
          bg: randomColor()
        };
    }

    componentWillAppear(cb) {
    //   console.log('componentWillAppear');
      setTimeout(cb, 0);
    }

    // componentDidAppear() {
    //     //do stuff on appear
    // }

    componentWillEnter(cb) {
    //   console.log('componentWillEnter');
      this.setState(() => ({ entering: true}));
      setTimeout(cb, DURATION);
    }

    componentDidEnter() {
        //do stuff on enter
        this.setState(() => ({ entering: false, current: true}));
        // console.log('componentDidEnter');
    }

    componentWillLeave(cb) {
        // console.log('componentWillLeave');
        this.setState(() => ({ leaving: true }));
        setTimeout(cb, DURATION);
    }

    componentDidLeave() {
    //   console.log('componentDidLeave');
      //do stuff on leave
      this.setState(() => ({ leaving: false, current: false}));
    }

    render() {
        return (
            <div className={classNames({
                'pt-page': true,
                'pt-page-current': this.state.current,
                [this.state.inClass]: this.state.entering,
                [this.state.outClass]: this.state.leaving
            })}>
                {this.props.children}
            </div>
        );
    }

}

export default Transition;
