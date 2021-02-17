import React , {Component} from 'react';

import Header     from '../components/header/Header'
import Nav     from '../components/nav/Nav'
import Home      from '../components/home/Home'
import Properties      from '../components/properties/Properties'
import Forsale from '../components/forsale/Forsale'
import Faq   from '../components/faq/Faq'
import Numbers     from '../components/numbers/Numbers'
import Qoutes   from '../components/qoutes/Qoutes'
import Agents    from '../components/agents/Agents'
import Add    from '../components/add/Add'
import Footer from '../components/footer/Footer'


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
