import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import {useFonts} from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Button
} from 'react-native';

import Mole from './components/Mole';
import Images from './assets/Images';
import SpriteSheet from 'rn-sprite-sheet';
import Constants from './components/Constants';
import GameOver from './components/GameOver';
import Clear from './components/Clear';
import Pause from './components/Pause';

const DEFAULT_TIME = 25;
const DEFAULT_STATE = {
  level: 1,
  score: 0,
  time: DEFAULT_TIME,
  cleared: false,
  paused: false,
  gameover: false,
  health: 100
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  componentDidMount = () => {

  }
  reset = () => {

  }
  pause = () => {

  }
  resume = () => {

  }
  nextLevel = () => {

  }
  render() {
    let healthBarWidth = (Constants.MAX_WIDTH - Constants.XR * 100 - Constants.XR * 60 - Constants.XR * 6) * this.state.health / 100;
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={Images.background} />
        <View style={styles.topPanel}>
          <SafeAreaView>
            <View style={styles.statsContainer}>
              <View style={styles.stats}>
                <View style={styles.levelContainer}>
                  <Text style={styles.levelTitle}>Level</Text>
                  <Text style={styles.levelNumber}>{this.state.level}</Text>
                </View>
              </View>
              <View style={styles.stats}>
                <View style={styles.timeBar}>
                  <Text style={styles.timeNumber}>{this.state.time}</Text>
                </View>
                <Image style={styles.timeIcon} resizeMode="stretch" source={Images.timeIcon} />
              </View>
              <View style={styles.stats}>
                <View style={styles.scoreBar}>
                  <Text style={styles.scoreNumber}>{this.state.score}</Text>
                </View>
                <Image style={styles.scoreIcon} resizeMode="stretch" source={Images.scoreIcon} />
              </View>
              <View style={styles.stats}>
                <TouchableWithoutFeedback onPress={this.pause}>
                  <View style={styles.pauseButton}>
                    <Image style={styles.pauseButtonIcon} resizeMode="stretch" source={Images.pauseIcon} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={styles.healthBarContainer}>
              <View style={styles.healthBar}>
                <View style={[styles.healthBarInner, { width: healthBarWidth }]} />
              </View>
              <Image style={styles.healthIcon} resizeMode="stretch" source={Images.healthIcon} />
            </View>
          </SafeAreaView>
        </View>
        <View style={styles.playArea}>
          {/* {Array.apply(null, Array(4)).map((el, rowIdx) => {
            
            return (
              <View style={styles.playRow} key={rowIdx}>
                  {
                    Array.apply(null, Array(3)).map((el, colIdx) => {
                      let moleIdx = (rowIdx * 3) + colIdx;

                      return (
                        <View style={styles.playCell} key={colIdx}>
                          <Mole
                          index={moleIdx}
                          ref={(ref) => {this.moles[moleIdx] = ref}}
                          />
                        </View>
                      )
                    })
                  }
              </View>
            )
          })} */}

        </View>
        {this.state.cleared && <Clear onReset={this.reset} onNextLevel={this.nextLevel} level={this.state.level} score={this.state.score} />}
        {this.state.gameover && <GameOver onReset={this.reset} level={this.state.level} score={this.state.score} />}
        {this.state.paused && <Pause onReset={this.reset} onResume={this.resume} />}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGTH,
    position: 'absolute'
  },
  topPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.YR * 250,
    flexDirection: 'column'
  },
  statsContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.YR * 120,
    flexDirection: 'row'
  },
  stats: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pauseButton: {
    width: Constants.YR * 50,
    height: Constants.YR * 50,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pauseButtonIcon: {
    width: Constants.YR * 25,
    height: Constants.YR * 25
  },
  levelContainer: {
    width: Constants.YR * 90,
    height: Constants.YR * 80,
    backgroundColor: '#ff1a1a',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelTitle: {
    fontSize: 11,
    color: 'white',
    fontFamily:'monospace'
  },
  levelNumber: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'monospace'
  },
  scoreIcon: {
    position: 'absolute',
    left: 0,
    width: Constants.YR * 40,
    height: Constants.YR * 40
  },
  scoreBar: {
    height: Constants.YR * 25,
    position: 'absolute',
    left: 20,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreNumber: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'monospace',
  },
  timeBar: {
    height: Constants.YR * 25,
    position: 'absolute',
    left: 20,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeNumber: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'monospace',
  },
  healthBarContainer: {
    height: Constants.YR * 40,
    width: Constants.MAX_WIDTH - Constants.XR * 120,
    marginLeft: Constants.XR * 60
  },
  healthIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Constants.YR * 46,
    height: Constants.YR * 40,
  },
  healthBar: {
    height: Constants.YR * 20,
    width: Constants.MAX_WIDTH - Constants.XR * 100 - Constants.XR * 60,
    marginLeft: Constants.XR * 40,
    marginTop: Constants.YR * 10,
    backgroundColor: 'white',
    borderRadius: Constants.YR * 10
  },
  healthBarInner: {
    position: 'absolute',
    backgroundColor: '#ff1a1a',
    left: Constants.XR * 3,

    top: Constants.YR * 3,
    bottom: Constants.YR * 3,
    borderRadius: Constants.YR * 8
  },
  playArea: {
    width: Constants.MAX_WIDTH,
    marginTop: Constants.YR * 250,
    height: 50,
    flexDirection: 'column',
  },
  playRow: {
    height: 60,
    width: Constants.MAX_WIDTH,
    flexDirection: 'row',
  },
  playCell: {
    width: Constants.MAX_WIDTH / 3,
    height: Constants.MAX_HEIGHT * 0.2,
    alignItems: 'center'
  }

})