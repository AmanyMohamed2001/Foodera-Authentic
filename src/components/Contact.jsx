import {Link, useNavigate } from "react-router-dom";
import React,{useEffect, useState} from "react";



function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false); 
                navigate("/"); 
            }, 3000);

            return () => clearTimeout(timer); 
        }
    }, [showSuccessMessage, navigate]);

    const handleOnlyLetters = (e) => {
        const inputVal = e.target.value;
        const cleanVal = inputVal.replace(/[0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~-]/g, '');
        setClientName(cleanVal);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate("/")
        }, 3000);
    }
    return(<>
    <div className="container mt-5 mb-5" style={{ minHeight: "60vh" }}>
         {showSuccessMessage && (<div className="alert alert-success text-center py-3 mb-4 shadow-sm animate__animated animate__fadeIn">
            <h4 className="m-0 text-success fw-bold">The order was processed successfully.</h4> </div>)}       
             <div className="row justify-content-center">
             <div className="col-lg-6 col-md-6">
               <div className="section-contact text-center">
                 <form onSubmit={handleSubmit} action="">
                  <label className="d-block text-start text-white mb-1 fw-bold">Full Name (Letters Only):</label>
                  <input type="text" className="form-control mb-3 p-3" 
                    placeholder="Enter Your Name Here" value={clientName} 
                    onChange={handleOnlyLetters} autoComplete="none" name="new_unique_name_field" required/>                
                 <label className="d-block text-white text-start mb-1 fw-bold">Email Address:</label>
                  <input type="email" className="form-control mb-3 p-3" placeholder="name@example.com"
                    value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} 
                    autoComplete="none" name="new_unique_email_field" required />                 
                  <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                 <textarea name="text" class="form-control" placeholder="What is the problem we are facing?" aria-label="Password" aria-describedby="basic-addon1"></textarea>
                 <button type="submit" onSubmit={handleSubmit} style={{fontSize:"20px"}} className="btn btn-success btn-md w-100 mt-2">Send the request</button>
                </form>
               </div>
            </div>
        </div>
    </div>
    </>);
}

export default Contact;