import React, {useState} from 'react';



function MyComponents(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmpoyed] = useState(false);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const updateName = () => {
        setName("Naman");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployementStatus = () => {
        setIsEmpoyed(!isEmployed);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }




    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name : {name}</p>
            
            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increase Age</button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployementStatus}>Toggle Status</button><br/>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder='Enter Delivery Instructions'/>
            <p>Comment: {comment}</p><br/>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="GiftCard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label><input type='radio' value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange}/>Pick Up</label><br/>

            <label><input type='radio' value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>Delivery</label>
                    <p>Shipping: {shipping}</p>

        </div>
    );

}
export default MyComponents