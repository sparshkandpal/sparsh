import React , {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render()
    {
        return(
    <div className="Footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <div class="address">
		              Chamunda Vihar Phase 1<br />
		              Kashipur, Uttrakhand<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 1234567890<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 9876543210<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         sparsh@movies.net</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2021 Movies</p>
                </div>
            </div>
        </div>
    </div>
    )
}
}
export default Footer;