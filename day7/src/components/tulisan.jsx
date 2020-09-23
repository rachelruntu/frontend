import React, {Component} from "react";

class Tulisan extends Component {
    state ={ }
    render() {
        if(this.props.red){
            return(
                <h3 style={{color:'red'}}>{this.props.konten}</h3>
            )
        }
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

export default Tulisan

