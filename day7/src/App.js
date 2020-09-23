import React, {createRef} from 'react';
import Tulisan from "./components/tulisan"
// import logo from './logo.svg';
import './App.css';

var data = [
  {nama:'budi',usia:5,alamat:'jl.Sukahari'},
  {nama:'andi',usia:4,alamat:'jl.Sukaminggu'},
  {nama:'santi',usia:3,alamat:'jl.Sukabulan'},

]

class App extends React.Component {
  state = {
    angka:0,
    datamurid:[]
  }
  namaref=createRef() //React.createRef()
  usiaref=createRef()
  alamatref=createRef()

  componentWillMount(){
    console.log('willmount')
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({datamurid:data})
    }, 1000);
    console.log('didmount') //(addeventlistener,onscroll- pd saat discroll,onload- pd saat loading) biasanya untuk ngeload data dr backend
  }
  
  componentDidUpdate(){
    // if(this.state.angka > 5){
    //   this.setState({angka:-5})
    // }
    console.log('didupdate')
  }

  componentWillUnmount(){
    console.log('unmount')
  }

  onclickaja=()=>{
    var nama=this.namaref.current.value
    var usia=this.usiaref.current.value
    this.setState({nama:nama,usia})
    console.log(nama,usia)
  }

  onTambahClick=(e)=>{
    e.preventDevault()
    var nama=this.namaref.current.value
    var usia=this.usiaref.current.value
    var alamat=this.alamatref.current.value
    var datamurid=this.state.datamurid
    datamurid.push({nama,usia,alamat:alamat})
    this.setState({datamurid})
    this.namaref.current.value=""
    this.usiaref.current.value=""
    this.alamatref.current.value=""
  }

  renderDatamurid=()=>{
    var jsx=this.state.datamurid.map((val,index)=>{
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{val.nama}</td>
          <td>{val.usia}</td>
          <td>{val.alamat}</td>
        </tr>
      )
    })
    return jsx
  }

  render() { 
    console.log('masuk render')
    if(this.state.datamurid.length!=0){
      return (
        <div style={{height:"100vh"}} className=' mt-3 d-flex justify-content-center flex-column align-items-center'>
          <h1>Murid Tk Sukamaju</h1>
          <div>
            <form onSubmit={this.onTambahClick}>

            </form>
            <div><input type="text" className="form-control" placeholder="masukkan nama" ref={this.namaref}/></div>
            <div><input type="text" className="form-control" placeholder="masukkan usia" ref={this.usiaref}/></div>
            <div><textarea type="text" className="form-control" cols="23" rows="1" placeholder="masukkan alamat" ref={this.alamatref}/></div>
            <button onClick="submit" className="btn btn-primary mt-2">tambahkan</button>
          </div>
          
          
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Alamat</th>

              </tr>
            </thead>
            <tbody>
              {this.renderDatamurid()}
            </tbody>
          </table>


            {/* <input 
            type="text" 
            placeholder="username" 
            ref={this.namaref}
            />
            <input 
            type="number" 
            placeholder="usia" 
            ref={this.usiaref}
            />
            <br/> 
            <button onClick={this.onclickaja}>klik</button>   
            <Tulisan konten={'brewmaster'} red/>
            <Tulisan>
              {this.state.nama}
            </Tulisan>      */}
          {/* <h1>rachel {this.state.angka}</h1>
          <button onClick={()=>this.setState({angka:this.state.angka+1})}  >+</button> */}
        </div>
      );  
    }else{
      return(
        <h1>loading</h1>
      )
    }
  }
}

export default App;
