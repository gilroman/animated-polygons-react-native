import React from 'react';
import { ART, Animated, Button, Dimensions, StyleSheet, View } from 'react-native';

const colors = ['rgba(70, 145, 215, 1)', 'rgba(248, 165, 186, 1)', 'rgba(248, 221, 112, 1)', 'rgba(237, 125, 125, 1)'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class CounterDisplayAnimatedNew extends React.Component {
  state = {
    animation1: new Animated.Value(0),
    animation2: new Animated.Value(0)
  };

  polygon1Path = 'M103.7,81.8L287.8,6.7c8.8-3.7,18.7-3.7,27.5,0L499,84.8c8.7,3.7,15.7,10.7,19.2,19.5l75.1,183.8c3.6,8.8,3.6,18.7,0,27.5L515.8,499c-3.7,8.7-10.7,15.7-19.5,19.2l-184.6,75.1c-8.8,3.6-18.6,3.6-27.4,0l-183.3-77.5c-8.8-3.7-15.8-10.7-19.4-19.5L6.8,312c-3.7-8.8-3.7-18.7,0-27.5l77.8-183.4C88.2,92.4,95.1,85.5,103.7,81.8z';

  polygon2Path = 'M129.7,110.7l159.7-65.1c7.6-3.2,16.2-3.2,23.9,0l159.3,67.7c7.6,3.2,13.6,9.3,16.7,16.9l65.1,159.4c3.1,7.6,3.1,16.2,0,23.9l-67.2,159.1c-3.2,7.6-9.3,13.6-16.9,16.7l-160.1,65.1c-7.6,3.1-16.1,3.1-23.7,0l-159-67.2c-7.6-3.2-13.7-9.3-16.8-16.9l-65-159.9c-3.2-7.6-3.2-16.2,0-23.9l67.5-159.1C116.3,119.9,122.2,113.9,129.7,110.7z';

  polygon3Path = 'M148.1,131.2l142.4-58.1c6.8-2.8,14.5-2.8,21.3,0l142.1,60.4c6.8,2.9,12.1,8.3,14.9,15.1l58.1,142.2c2.8,6.8,2.8,14.5,0,21.3L467,453.9c-2.9,6.8-8.3,12.1-15.1,14.9l-142.8,58.1c-6.8,2.8-14.4,2.8-21.2,0L146.1,467c-6.8-2.8-12.2-8.3-15-15.1l-58-142.6c-2.8-6.8-2.8-14.5,0-21.3l60.2-141.9C136.1,139.4,141.4,134,148.1,131.2z';

  polygon4Path = 'M169,154.4l122.8-50.1c5.9-2.4,12.5-2.4,18.3,0l122.5,52.1c5.8,2.5,10.5,7.1,12.8,13L495.7,292c2.4,5.9,2.4,12.5,0,18.3L444,432.7c-2.5,5.8-7.1,10.5-13,12.8l-123.2,50.1c-5.8,2.4-12.4,2.4-18.3,0L167.3,444c-5.9-2.4-10.5-7.1-12.9-13l-50-123c-2.4-5.9-2.4-12.5,0-18.3l51.9-122.4C158.7,161.5,163.3,156.9,169,154.4z';

  handleStartButton = () => {
    Animated.stagger(75, [
      Animated.timing(this.state.animation1, {
        toValue: 2,
        duration: 2500
      }),
      Animated.timing(this.state.animation2, {
        toValue: 2,
        delay: 200,
        duration: 2500
      })
    ]).start(animation => {
      if (animation.finished) {
        this.state.animation1.setValue(0);
        this.state.animation2.setValue(0);
        this.handleStartButton();
      }
    });
  };

  handleStopButton = () => {
    this.state.animation1.stopAnimation(stoppedValue => {
      this.state.animation1.setValue(stoppedValue);
    });
    this.state.animation2.stopAnimation(stoppedValue => {
      this.state.animation1.setValue(stoppedValue);
    });
  };

  render() {
    const { width } = Dimensions.get('window');
    const { Surface, Group, Shape } = ART;
    const AnimatedShape = Animated.createAnimatedComponent(Shape);

    const polygon2Scale = this.state.animation1.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.15, 1]
    });

    const polygon2X = this.state.animation1.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, -45, 0]
    });

    const polygon2Y = this.state.animation1.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, -45, 0]
    });

    const polygon2Fill = this.state.animation1.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [colors[1], 'rgba(255,255,255,1)', colors[1]]
    });

    const polygon3Scale = this.state.animation2.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.15, 1]
    });

    const polygon3X = this.state.animation2.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, -45, 0]
    });

    const polygon3Y = this.state.animation2.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, -45, 0]
    });
    const polygon3Fill = this.state.animation2.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [colors[2], 'rgba(255,255,255,1)', colors[2]]
    });

    return (
      <View style={styles.container}>
        <Button onPress={this.handleStartButton} title="Start" />
        <Button onPress={this.handleStopButton} title="Stop" />
        <Surface width={width - 24} height={width - 24}>
          <Group x={0} y={0} scale={0.588}>
            <AnimatedShape d={this.polygon1Path} opacity={0.16} fill={colors[0]} scale={1} />
            <AnimatedShape
              d={this.polygon2Path}
              opacity={0.44}
              fill={polygon2Fill}
              stroke="#666666"
              strokeWidth={1}
              scale={polygon2Scale}
              x={polygon2X}
              y={polygon2Y}
            />
            <AnimatedShape
              d={this.polygon3Path}
              opacity={0.26}
              fill={polygon3Fill}
              stroke="#666666"
              strokeWidth={1}
              scale={polygon3Scale}
              x={polygon3X}
              y={polygon3Y}
            />
            <AnimatedShape d={this.polygon4Path} fill={colors[3]} scale={1} />
          </Group>
        </Surface>
      </View>
    );
  }
}
