import React from "react";
import Layout from "../components/Layout";
import '../styles/contact.css'


const Contact = () => {
    return(
        <Layout>
            <h1 id="contact-header">Contact Us</h1>
            <div id="contact-form">
                <div id="contact-card">
                    <label className="form-title">First Name
                        <input></input>
                    </label>
                    <br/>
                    <label className="form-title">Last Name
                        <input></input>
                    </label>
                    <br/>
                    <label className="form-title">Email
                        <input></input>
                    </label>
                    <br/>
                    <label className="form-title">Message
                        <textarea></textarea>
                    </label>
                    <br/>
                    <button>Submit</button>
                </div>
            </div>
        </Layout>
    )
}

export default Contact