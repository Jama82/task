import React, { useState } from 'react';
import {  InputGroup } from 'react-bootstrap';
import   './Receipts.css'
import Ingredients from './Ingredients';



const Receipts = () => {
    
    const [meal, setMeal] = useState();
    
    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('radio2');
    const isRadioSelected =(value)  =>selectedRadioBtn === value;
    const handleRadioClick = (e) =>setSelectedRadioBtn(e.currentTarget.value);



    return (
        <div className='receipts'>
            <div >
                
                <InputGroup.Radio aria-label="Checkbox for following text input"
                
                checked={isRadioSelected('burger')}
                onChange={handleRadioClick}
                id="burger"
                name="meal"
                value="burger"
                onClick={(e)=>setMeal(e.target.value)}
                
                />  <p>Big Burger</p>  
                </div>
            <div >
                <InputGroup.Radio aria-label="Radio button for following text input" 
                value='fish'
                 checked={isRadioSelected('fish')}
                 onChange={handleRadioClick}
                 id="fish"
                 name="meal"
                onClick={(e)=>setMeal(e.target.value)}

                 />  <p>Fried Fish</p> 
                  </div>
            <div >
                <InputGroup.Radio aria-label="Radio button for following text input" 
                value='stake'
                 checked={isRadioSelected('stake')}
                 onChange={handleRadioClick}
                 id="stake"
                 name="meal"
                onClick={(e)=>setMeal(e.target.value)}
                

                 />  <p>Stake</p>   
                 
                   </div>     
<Ingredients meal={meal} />
                
        </div>
    );
};

export default Receipts;

