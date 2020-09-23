import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
// import classes from '*.module.css';
// import {nama} from './helper/cobacoba'

// class Button extends Component {
//   // state = {
//   render() {
//     return (
//     <button className={this.props.classname} onClick={this.props.funcpencet}>
//       {/* {
//         this.props.isi?this.props.isi:'+'
//       } */}
//       {this.props.children}
//     </button>    
//     );
//   }
// }


// jika tidak mau buat component diatas, tambahkan react
//class App extends React.Component
class App extends Component {
  state = {
    angka:1
  }
  pencettambah =(tambah)=>{
    if(tambah){
      this.setState({angka:this.state.angka+1})
    }else{
      this.setState({angka:this.state.angka-1})
    }

    //cara satu
    // var angka = this.state.angka
    // angka+=1

    //cara dua
    // this.setState((prevstate)=>{
    //   return {
    //     angka:prevstate.angka+1
    //   }
    // })
    
    //cara tiga
    // this.setState({angka:this.state.angka+1})
  }
 
  render() {
    return (
      <div>
        <div>
          <h1>selamat datang {this.state.angka}</h1>
          <Button classname='btn' funcpencet={()=>this.pencettambah(true)}>
            +
          </Button>
          <Button classname='btn1' funcpencet={()=>this.pencettambah(false)}>
            -
          </Button>
          {/* <button onClick={this.pencettambah}>+</button> */}
          {/* <button onClick={()=>this.setState({angka:this.state.angka+1})}>+</button> */}
        </div>
      </div>
    )
  }
}
export default App;

// export default ()=>{
   

//   const pencettambah =()=>{
//     nama1+=1
//     console.log(nama1)
//   }
//   return (
//     <div>
//       <div>
//       <h1>selamat datang {nama1}</h1>
//       <button onClick={pencettambah}>+</button>
//       </div>
//     </div>
//   );
// };
