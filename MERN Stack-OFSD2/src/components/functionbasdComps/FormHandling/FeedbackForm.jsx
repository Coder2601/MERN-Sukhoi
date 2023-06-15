// 3 input fields : Name, Designation, Rating
// update these fields in an object (userDetail)
// when submitted then add this object into an array (users)


// map method in Javascript ? => arrays

import React, { useState } from 'react'

const FeedbackForm = () => {
    const[userDetail, setuserDetail] = useState({
        name:'',
        designation:'',
        rating:''
    });

    const[users,setUsers] = useState([]);

    const handleChange=(e)=>{
        setuserDetail((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleSubmit=(e)=>{
        //synchronously
        e.preventDefault();

        setUsers([...users,userDetail]);
    }

  return (
    <div>
        <h2>FeedbackForm</h2>
        <form>
            <label>Name</label>
            <input type="text" placeholder='name' id='name' onChange={handleChange} />

            <br /> <br />
            <label>Designation</label>
            <input type="text" placeholder='designation' id="designation" onChange={handleChange} />

            <br /><br />
            <label>Rating</label>
            <input type="text" placeholder='rating' id='rating' onChange={handleChange} />

            <br /><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        <br /><hr />
        <h2>Outputs: </h2>
        {users.map((item,index)=>{
            return(
                <div key={index}>
                    <p>S.No : {index+1}</p>
                    <p>Name: <b>{item.name}</b></p>
                    <p>Designation : <b>{item.designation}</b></p>
                    <p>Rating : <b>{item.rating}</b></p>
                    <hr />
                </div>
            )
        })}
        {console.log(users)}
    </div>
  )
}

export default FeedbackForm