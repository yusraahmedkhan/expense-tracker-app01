import React from "react";


export const AddTracsaction = ()=>{
    return(
        <div>
            <h5>Add new transaction <hr /></h5>
            <form className="transaction-form">
                <label>
                    Text <br />
                    <input type="text" required/> <br />
                </label>

                <label>
                    Amount <br /> negative - expense positive-income
                    <input type="number" required /> <br/>

                </label>
                <input type='submit' value='Add Transaction'/>
            </form>
        </div>
    )
}