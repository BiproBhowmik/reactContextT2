import React, { useContext } from "react";

import { InputObj } from './formSection';

class ClasComp extends React.Component {

        state = {
            getPeople: {
                data: []
            },
            edit: {
                isEdit: false,
                name: "",
                email: "",
                title: "",
                image: "",
            }
        };

    componentDidMount() {
        console.log("Mounted");
    }

    componentWillUnmount() {
        console.log("Destroyed");
    }

    


    render() {
        
        
        return (
            <>
            <div className="_react_card_wrapper">
                <div className="_react_card_wrap">
                    <div className="container">
                        {/* { this.state.edit.isEdit &&

                        
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.edit.name} onChange={handleChange} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={this.state.edit.email} onChange={handleChange} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name="title" value={this.state.edit.title} onChange={handleChange} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="image" className="form-label">Image URL</label>
                                <input type="text" className="form-control" name="image" value={this.state.edit.image} onChange={handleChange} />
                            </div>
                            <div className="col-3 mx-auto">
                                <button type="submit" className="btn btn-primary d-block w-100 py-2" onClick={handleClickUpdate}>Update</button>
                            </div>
                        </div>

                        } */}



                        <div className="_react_card_content_wrap">
                            <div className="row">

                                {/* {showPeople} */}

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
        );
    }

}

export default ClasComp