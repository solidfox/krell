/**
 * Generated by Krell, do not edit by hand
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import '$KRELL_OUTPUT_DIR/krell_repl.js';
import '$KRELL_OUTPUT_TO';

var App = function () {
    return createReactClass({
        getInitialState: function () {
            return {loaded: false}
        },
        render: function () {
            if (!this.state.loaded) {
                var plainStyle = {flex: 1, alignItems: 'center', justifyContent: 'center'};
                return (
                    <ReactNative.View style={plainStyle}>
                    <ReactNative.Text>Waiting for Krell to load files.</ReactNative.Text>
                </ReactNative.View>
            );
            }
            return this.state.root;
        },
        componentDidMount: function () {
            var app = this;
        }
    })
};

AppRegistry.registerComponent(appName, () => App);
