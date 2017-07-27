import React from 'react';
import './Transition.scss';

class Transition extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          entering: true,
          leaving: false
        };
    }

    componentWillAppear(cb) {
      console.log('componentWillAppear');
      setTimeout(cb, 0);
    }

    // componentDidAppear() {
    //     //do stuff on appear
    // }

    componentWillEnter(cb) {
      console.log('componentWillEnter');
      setTimeout(cb, 0);
    }

    componentDidEnter() {
        //do stuff on enter
        console.log('componentDidEnter');
    }

    componentWillLeave(cb) {
      console.log('componentWillLeave');
      // if(this.mounted)

      setTimeout(cb, 0);
    }

    componentDidLeave() {
      console.log('componentDidLeave');
        //do stuff on leave
    }

    render() {
        return (
            <div className="example-app__transition">{this.props.children}</div>
        );
    }

}

export default Transition;
