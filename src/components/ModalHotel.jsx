import React from 'react'

const ModalHotel = (props) => {
    return (
        <div className="fade modal" id="modalHotel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {props.name}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <img src={props.url} alt="Not Found" style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalHotel
