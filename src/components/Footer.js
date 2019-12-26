import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="margin" />
                <footer className="footer fixed-bottom">
                    <div className="container">
                        <span className="text-muted">
                            <div className="footer-copyright text-center py-2">© 2019 Copyright
                                <a href="/about"> Adam Reeder</a>
                            </div>
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer