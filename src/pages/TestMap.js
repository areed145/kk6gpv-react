import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { setActiveOption } from '../redux/action-creators'
import Map from '../components/Map'
import Toggle from '../components/Toggle'
import Legend from '../components/Legend'

class TestMap extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Map />
                    <Toggle onChange={setActiveOption} />
                    <Legend />
                </div>
            </Provider>
        );
    }
}

export default TestMap;