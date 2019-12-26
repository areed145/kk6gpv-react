import React, {PureComponent} from 'react';

export default class WellInfo extends PureComponent {

    render() {

        const {info} = this.props;

        return (
            <div style={{margin:"5px",marginTop:"0px",marginBottom:"0px"}}>
                {info.lease} {info.well} <br />
                {info.operator} <br />
                <a target="_new" href={`/oilgas/details/${info.api}`}>{info.api}</a><br />
                {info.field}
            </div>
        );
    }
}