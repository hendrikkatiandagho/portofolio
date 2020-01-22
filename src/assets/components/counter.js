import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 0
        }
    //bind
        this.Tambah=this.Tambah.bind(this)
        this.Kurang =this.Kurang.bind(this)
        this.Reset=this.Reset.bind(this)
    }

    // fungsi
    Tambah() {
        this.setState({number:this.state.number +1});
    }
    Kurang () {
        if(this.state.number > 0){
            this.setState({ number:this.state.number - 1 });
        }else{
            this.setState({ number:this.state.number + 0 });
    }
    }

    Reset () {
        this.setState({number:this.state.number = 0});
    }
    //yang akan di tampilkan ke layar
    render() {
        return (
            <div>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.Tambah}>Increase</button>
                <button onClick={this.Kurang}>Decrease</button>
                <button onClick={this.Reset}>reset</button>
            </div>
        )
    }
}
