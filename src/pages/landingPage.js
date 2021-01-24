import React , {Component} from 'react';

import Header     from '../components/header'
import Nav     from '../components/nav'
import Home      from '../components/home'
import Properties      from '../components/properties'
import Forsale from '../components/forsale'
import Faq   from '../components/faq'
import Numbers     from '../components/numbers'
import Qoutes   from '../components/qoutes'
import Agents    from '../components/agents'
import Add    from '../components/add'
import Footer from '../components/footer'


class LandingPage extends Component {
  render() {
    return (

      <>
        <Header />

        <Nav />
        <Home />

        <Properties />
        <Forsale />
        <Faq />
        <Numbers />
        <Qoutes />
        <Agents />
        <Add />
        <Footer />

      </>

    );
  }
}

export default LandingPage;
