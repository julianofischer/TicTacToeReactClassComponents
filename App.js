import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class BoardCell extends Component {
  state = { mark: '' }

  render() {
    return (
      <TouchableOpacity
        style={[styles.boardcell, this.props.addStyle]}
        onPress={() => {
          if (this.state.mark === '') {
            this.setState({ mark: this.props.cell[2] });
            this.props.cellPressed(this.props.cell);
          }
        }
        }
      >
        <Text style={{ fontSize: '29vmin' }}>{this.state.mark}</Text>
      </TouchableOpacity>
    );
  }
}

class Board extends Component {
  state = {
    turn: 'X',
    winner: '',
    columns: [0, 0, 0],
    lines: [0, 0, 0],
    diags: [0, 0],
    ongoing: true,
    draw: false,
    nrMoves: 0,
  }

  restartGame = () => {
    this.setState(
      {
        turn: 'X',
        winner: '',
        columns: [0, 0, 0],
        lines: [0, 0, 0],
        diags: [0, 0],
        ongoing: true,
        draw: false,
        nrMoves: 0,
      }
    );
  }

  handleCellPressed = (cell) => {
    if (this.state.ongoing) {
      if (this.state.turn === 'X') {
        this.state.lines[cell[0]] = this.state.lines[cell[0]] + 1;
        if (this.state.lines[cell[0]] === 3) {
          this.setState({ ongoing: false, winner: 'X' });
        }

        this.state.columns[cell[1]] = this.state.columns[cell[1]] + 1;
        if (this.state.columns[cell[1]] === 3) {
          this.setState({ ongoing: false, winner: 'X' });
        }
        //diagonal principal
        if (cell[0] == cell[1]) {
          this.state.diags[0] = this.state.diags[0] + 1
        }

        //diagonal secundária
        if (cell[0] === 1 && cell[1] === 1 || cell[0] === 0 && cell[1] === 2 || cell[0] === 2 && cell[1] === 0) {
          this.state.diags[1] = this.state.diags[1] + 1
        }

        if (this.state.diags[0] === 3 || this.state.diags[1] === 3) {
          this.setState({ ongoing: false, winner: 'X' });
        }
        this.setState({ turn: 'O' });
      } else {
        this.state.lines[cell[0]] = this.state.lines[cell[0]] - 1;
        if (this.state.lines[cell[0]] === -3) {
          this.setState({ ongoing: false, winner: 'O' });
        }

        this.state.columns[cell[1]] = this.state.columns[cell[1]] - 1;
        if (this.state.columns[cell[1]] === -3) {
          this.setState({ ongoing: false, winner: 'O' });
        }

        if (cell[0] === cell[1]) {
          this.state.diags[0] = this.state.diags[0] - 1
        }

        //centro da diagonal secundária ou pontas
        if (cell[0] === 1 && cell[1] === 1 || cell[0] === 0 && cell[1] === 2 || cell[0] === 2 && cell[1] === 0) {
          this.state.diags[1] = this.state.diags[1] - 1
        }

        if (this.state.diags[0] === -3 || this.state.diags[1] === -3) {
          this.setState({ ongoing: false, winner: 'O' });
        }

        this.setState({ turn: 'X' });
      }

      this.setState({ nrMoves: this.state.nrMoves + 1 }, () => {
        if (this.state.nrMoves === 9 && this.state.winner === '') {
          console.log('its a draw')
          this.setState({ ongoing: false, draw: true });
        }
      });
    }
  }//handleCellPressed

  ongoingComponent = () => {
    return (
      <View style={styles.outside}>
        <Text style={styles.txtOngoing}>Player {this.state.turn} turn</Text>
        <View style={styles.board}>
          <View style={styles.containerrow}>
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[0, 0, this.state.turn]}
            />
            <BoardCell
              addStyle={styles.vert}
              cellPressed={this.handleCellPressed}
              cell={[0, 1, this.state.turn]}
            />
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[0, 2, this.state.turn]}
            />
          </View>
          <View style={[styles.containerrow, styles.hori]}>
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[1, 0, this.state.turn]}
            />
            <BoardCell
              addStyle={styles.vert}
              cellPressed={this.handleCellPressed}
              cell={[1, 1, this.state.turn]}
            />
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[1, 2, this.state.turn]}
            />
          </View>
          <View style={styles.containerrow}>
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[2, 0, this.state.turn]}
            />
            <BoardCell
              addStyle={styles.vert}
              cellPressed={this.handleCellPressed}
              cell={[2, 1, this.state.turn]}
            />
            <BoardCell
              cellPressed={this.handleCellPressed}
              cell={[2, 2, this.state.turn]}
            />
          </View>
        </View>
      </View>
    );
  }

  gameOverComponent = () => {
    let text;
    if (this.state.draw) {
      text = <Text style={styles.txtOngoing}>It's a draw!</Text>
    } else {
      text = <Text style={styles.txtOngoing}>Game over - player {this.state.winner} won!</Text>
    }

    return (
      <View style={styles.outside}>
        {text}
        <Button
          onPress={this.restartGame}
          title='Play again'
        />
      </View>);
  }

  render(){
    if(this.state.ongoing){
      return this.ongoingComponent();
    }else{
      return this.gameOverComponent();
    }
  }
}

class App extends Component {
  render(){
    return (
      <>
        <Board/>
      </>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  outside: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  board: {
    flex: 1,
    flexDirection: 'column',
    width: '100vw',
    maxHeight: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0px',
  },
  containerrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '80vw',
  },
  boardcell: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '30vmin',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vert: {
    borderLeftColor: 'black',
    borderLeftWidth: '1px',
    borderRightColor: 'black',
    borderRightWidth: '1px',
  },
  hori: {
    borderTopColor: 'black',
    borderTopWidth: '1px',
    borderBottomColor: 'black',
    borderBottomWidth: '1px',
  },
  txtOngoing: {
    fontSize: '8vmin',
    fontFamily: 'Roboto',
  }
});
