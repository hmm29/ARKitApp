// index.ios.js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import ARKit from 'react-native-arkit';

export default class App extends Component {
  componentDidMount() {
    this.arkit.addBox({ x: 0, y: 0, z: 0, width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 });
    this.arkit.addSphere({ x: 0.2, y: 0, z: 0, radius: 0.05 });
    this.arkit.addCylinder({ x: 0.4, y: 0, z: 0, radius: 0.05, height: 0.1 });
    this.arkit.addCone({ x: 0, y: 0.2, z: 0, topR: 0, bottomR: 0.05, height: 0.1 });
    this.arkit.addPyramid({ x: 0.2, y: 0.15, z: 0, width: 0.1, height: 0.1, length: 0.1 });
    this.arkit.addTube({ x: 0.4, y: 0.2, z: 0, innerR: 0.03, outerR: 0.05, height: 0.1 });
    this.arkit.addTorus({ x: 0, y: 0.4, z: 0, ringR: 0.06, pipeR: 0.02 });
    this.arkit.addCapsule({ x: 0.2, y: 0.4, z: 0, capR: 0.02, height: 0.06 });
    this.arkit.addPlane({ x: 0.4, y: 0.4, z: 0, width: 0.1, height: 0.1 });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          ref={arkit => this.arkit = arkit}
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('ARKitApp', () => App);
