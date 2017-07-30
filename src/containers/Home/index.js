import {connect} from 'react-redux';
import HomeComponent from './Home'

import { scrollParalax } from '../../modules/home';

const Home = connect((state) => ({
    headerBlur: state.home.headerBlur,
    headerBright: state.home.headerBright,
    headerInteractive: state.home.headerInteractive
  }),{
    scrollParalax
  })(HomeComponent);

export default Home;