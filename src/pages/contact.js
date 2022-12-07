import React from "react";
import { useForm, ValidationError } from "@formspree/react"
import Layout from "../components/Layout";
import '../styles/contact.css'


const Contact = () => {
    const [state, handleSubmit] = useForm('xwkzgbyw')
    if (state.succeeded){
        return <p>Message sent! We will get back to you.</p>
    }
    return(
        <Layout>
            <h1 id="contact-header">Contact Us</h1>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                <div id="contact-card">
                    <label className="form-title">First Name
                        <input
                            name="first name"
                            type="name"
                            placeholder="Required"
                        ></input>
                    </label>
                    <br/>
                    <label className="form-title">Last Name
                        <input
                            name="last name"
                            type="name"
                            placeholder="Required"
                        ></input>
                    </label>
                    <br/>
                    <label className="form-title"
                        htmlFor="email">Email
                        <input
                            name="email"
                            type="email"
                            placeholder="Required"
                        ></input>
                    </label>
                    <br/>
                    <label className="form-title">Message
                        <textarea
                            id="message"
                            name="message"
                        ></textarea>
                    </label>
                    <br/>
                    <button type="submit" disabled={state.submitting}>Submit</button>
                </div>
            </form>
        </Layout>
    )
}

export default Contact