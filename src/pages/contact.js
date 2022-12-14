import React from "react";
import { useForm, ValidationError } from "@formspree/react"
import Layout from "../components/Layout";
import '../styles/contact.css'


const Contact = () => {
    const [state, handleSubmit] = useForm('xwkzgbyw')
    if (state.succeeded){
        return <Layout><p id="email-alert">Message sent! <br/>We will get back to you.</p><a href="/">Back home</a></Layout>
    }

    return(
        <Layout>
            <h1 id="contact-header">Contact Us</h1>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                <div id="contact-card">
                    <label className="form-title">First Name</label>
                        <input className="input-field"
                            name="first name"
                            type="name"
                            placeholder="Required"
                        ></input>
                    <br/>
                    <label className="form-title">Last Name</label>
                        <input className="input-field"
                            name="last name"
                            type="name"
                            placeholder="Required"
                        ></input>
                    <br/>
                    <label className="form-title">Email Address</label>
                        <input className="input-field"
                            name="email"
                            type="email"
                            placeholder="Required"
                        ></input>
                    <br/>
                    <label className="form-title">Type of work</label>
                    <select className="options" name="TYPE OF WORK">
                        <option value="Did not choose" name="Did not choose">
                            <p>Choose One</p>
                        </option>
                        <option value="Home Interior" name="Home Interior">
                            <p>Home Interior</p>
                        </option>
                        <option className="options" value="Bathroom">
                            <p>Bathroom</p>
                        </option>
                        <option className="options" value="Garage">
                            <p>Garage</p>
                        </option>
                        <option className="options" value="Electrical">
                            <p>Electical</p>
                        </option>
                    </select>
                    <label className="form-title">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                        ></textarea>
                    <br/>
                    <button type="submit" disabled={state.submitting}><p id="button-text">Submit</p></button>
                </div>
            </form>
        </Layout>
    )
}

export default Contact