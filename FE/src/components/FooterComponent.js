import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

export default class FooterComponent extends React.Component {
	render() {
		return(
			<Footer id="footer">
		      <div className="row">
		        <div className="col-8 col-md footmargin">
		          <h5>Frontend Shop<small className="d-block mb-4 text-muted">&copy;2021</small></h5>
		         
		        </div>
		        <div className="col-2 col-md">
		          <br/>
		          
		        </div>
		        <div className="col-2 col-md">
		          
		        </div>
		        <div className="col-2 col-md">
		          <ul className="list-unstyled text-small">
		          	<br/>
		            
		          </ul>
		        </div>
		      </div>
		    </Footer>
		);
	}
}