import SnackBar from '@material-ui/core/SnackBar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Slide from '@material-ui/core/Slide';
import React, { Component } from 'react'


function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}
export class InvalidMove extends Component{

    render(){
        return (
            <SnackBar
            open = {this.props.snackbaropen}
            anchorOrigin = {{vertical: 'bottom',horizontal: 'center'}}
            autoHideDuration = {1000}
            TransitionComponent={TransitionLeft}
            onClose = {this.props.close}
            >
                <SnackbarContent style={{
                    backgroundColor:'teal',
                    fontSize: 17,
                    textAlign: "right",
                    }}
                    message = "Invalid Move"
                />
            </SnackBar>
            
        )
    }

}