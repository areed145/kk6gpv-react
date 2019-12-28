import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">
                        <div className="footer-copyright text-center py-1">© 2019 Copyright
                            <a href="/about"> Adam Reeder</a>
                        </div>
                    </span>
                </footer>
            </div>
        );
    }
}

export default Footer