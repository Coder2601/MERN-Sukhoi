import { useState } from "react";

function Counter() {

    //everythihng stored in useState hook is temporary
    //user can store numbers, strings, array, 0bject, boolean value in useState

    //updating a number
    const [count, setCount] = useState(0);
    //updating a string
    const [title, setTitle] = useState('Welcome to React Session');
    //updating an object
    const [books, setBooks] = useState({
        title: 'Harry Potter',
        author: 'J.K. Rowling'
    })
    //updating an array
    const[carName,setCarName] = useState('');
    const [cars, setCars] = useState(['Verna', 'Ciaz', 'BMW', 'Audi', 'Rubicon']);

    function handleInc(event) {
        console.log(event.target.id);
        setCount(count + 1)
    }
    function handleDec(event) {
        console.log(event.target.id);
        setCount(count - 1)
    }
    function handleChangeTitle(event) {
        console.log(event);
        setTitle('Event Handling in React with useState Hook')
    }
    function handleInputChange(event) {
        setCarName(event.target.value)
        // console.log(event.target.value);
    }
    function handleAddCar(){
        setCars((prev)=>([...prev, carName]))
    }



    const handleChangeBooks = () => {
        //to update an object or an array using useState hook, a callback function is passed that returns a function with an object or an array as parameter respectively.
        setBooks(() => ({
            title: 'Atomic Habits',
            author: 'James Clear'
        }))
    }

    return (
        <>
            {/* JSX Fragments */}
            <h2 onMouseOver={handleChangeTitle}>{title}</h2>
            {/* when I hover on this heading, it should change to "Event Handling in React with useState Hook" */}

            <button id="increaseButton" onClick={(event) => handleInc(event)}>+</button>
            <p>Count : {count} </p>
            <button id="decreaseButton" onClick={(event) => handleDec(event)}>-</button>

            <br /><br />
            <hr />

            {/* <h2 onMouseOver={handleChangeBooks}>Book Objects</h2> */}
            <p><b>Title:</b> {books.title}</p>
            <p><b>Author :</b> {books.author}</p>
            <hr />
            <br />

            <input type="text" placeholder="Enter Car Name" onChange={handleInputChange} />
            <br />
            <button onClick={handleAddCar}>Add Car</button>
            {console.log(cars)}
        </>
    )
}

export default Counter;