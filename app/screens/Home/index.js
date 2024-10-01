import React, {Component} from 'react';
import '../../../assets/wds3_js_api.js';
// Uncomment to have succeful console.log(sls) 
//import '../../../assets/wds3_js_api_modified.js';

export default class Home extends Component {
  render() {
    // If sls injected to window, below will log wds3 object.
    console.log(sls);
    return (
      <div>Home App</div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
