import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

import './AddService.css'

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();

    const [event, setEvent] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newEventInfo = { ...event };
        newEventInfo[e.target.name] = e.target.value;
        setEvent(newEventInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', event.title);
        formData.append('description', event.description);

        fetch('https://enigmatic-springs-04841.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                history.push('/')
            })
            .catch(error => {
                console.error(error)
            })
    }





    return (

        <div className="addService container-fluid pr-0">
            <div className="addService row pt-4">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="header-option ml-5">
                    <h4 className=" text-brand ">  Add Service </h4>
                        <div className="d-flex align-items-center pt-3 ml-auto">
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>
                    </div>
                    <div className="rightOption">
                    
                            <form onSubmit={handleSubmit} className="form" action="" >
                                <div className="formLeft">
                                    <h5>Event Title </h5>
                                    <input type="text" name="title"

                                        placeholder="Enter title" id=""
                                        onBlur={handleBlur}
                                    />

                                    <h5> Description </h5>
                                    <textarea type="text-area" name="description"
                                        placeholder="Enter Description " id=""
                                        onBlur={handleBlur}
                                        rows="4" cols="28"
                                    />
                                </div>

                                <div className="formRight">
                                    <div className="uploadFile">
                                        <label>Upload a image</label>
                                        <input
                                            type="file"
                                            className="from-control py-5"
                                            onChange={handleFileChange}
                                        />
                                       
                                    </div>

                                    <div className="ml-auto mr-5" style={{ width: " 140px", }}>
                                        <input
                                            className="submit-button "
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>

                                </div>

                            </form>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
