import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const Create = () => {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate('/read');
    };


    return (
        <div>
            <Row>


                <Col className='w-40 mx-auto my-5 form-control border border-0 ms-4'>
                    <h3>Welcome To Marathon</h3>
                    <p id='p1'>Are you ready to challenge yourself and run for a cause? Join us for the Marathon 2023,
                        the largest and most prestigious running event in India. The Marathon 2023 will take place on January 15, 2023, in New Delhi,
                        the capital city of India. The event will feature four categories: full marathon (42.195 km), half marathon (21.097 km), 10K run (10 km), and 5K run (5 km).
                        The event will also support various social causes such as education, health, environment, and women empowerment.
                        You can register online for the event and choose the category and cause that suits you best.
                        The registration deadline is December 31, 2022. The event will start at 6:00 am from the Jawaharlal Nehru Stadium and end at the same venue.
                        The event will be attended by thousands of runners, celebrities, and dignitaries. The event will also offer prizes, medals, certificates, and refreshments to all the participants.
                        The event will be broadcast live on various media channels and platforms. The Marathon 2023 is a great opportunity to test your endurance, enjoy the scenic beauty of New Delhi, and make a difference in the society.
                        Don’t miss this chance to be a part of history and register now! For more details, visit the official website of the Marathon 2023.</p>
                      
                </Col>

                <Col sm={12}>
                <p className='ms-4'>Fill your details in form below.</p>
                    <form style={{ backgroundColor: 'lightblue' }} className='w-50 ms-4 form-control mt-1' onSubmit={handleSubmit}>
                        <h4 className='mx-auto'>Fill Details Here:-</h4>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" class="form-control" onChange={getUserData} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" onChange={getUserData} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone Number</label>
                            <input type="text" name="num" class="form-control" onChange={getUserData} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Age</label>
                            <input type="number" name="age" class="form-control" onChange={getUserData} />
                        </div>
                        <div class="mb-3">
                            <h6>Gender</h6>
                            <input
                                class="form-check-input"
                                name="gender"
                                value="Male"
                                type="radio"
                                onChange={getUserData} />
                            <label class="form-check-label">Male</label>
                        </div>
                        <div class="mb-3">
                            <input
                                class="form-check-input"
                                name="gender"
                                value="Female"
                                type="radio"
                                onChange={getUserData} />
                            <label class="form-check-label" >
                                Female
                            </label>
                        </div>
                        <h6>Categories</h6>
                        <div class="form-check">
                            <input class="form-check-input" name="category"
                             type="checkbox" value="full marathon (42.195 km)" onChange={getUserData} />
                                <label class="form-check-label">
                                full marathon (42.195 km)
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="category" 
                             type="checkbox" value="half marathon (21.097 km)" onChange={getUserData}/>
                                <label class="form-check-label">
                                half marathon (21.097 km)
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="category"
                             type="checkbox" value="10K run (10 km)" onChange={getUserData} />
                                <label class="form-check-label">
                                10K run (10 km)
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="category" 
                             type="checkbox" value="5K run (5 km)" onChange={getUserData}/>
                                <label class="form-check-label" >
                                5K run (5 km)
                                </label>
                        </div>
                        <br />
                        

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>


                </Col></Row>   
                <br /><br /><br /> <br /><br /><br />

                     </div>
    )
}

export default Create