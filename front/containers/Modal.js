import React, { Component } from 'react'

class Modal extends Component {
  render(){
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div style={this.props.isOpen ? backdropStyle : null}>
        { this.props.isOpen &&
          (
            <div style={modalStyle} key={this.props.isOpen}>
              { this.props.children }
              <div>
                <button onClick={this.props.onClose}>
                  Close 
                </button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Modal
