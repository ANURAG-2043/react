import Button from "../Button/Button";
import styles from './ContactForm.module.css';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

    const [name, SetName]= useState("Your Name")
    const [email, SetEmail]= useState("Your Name")
    const [text, SetText]= useState("Your Name")

  


    const onSubmit = (event) =>{
        event.preventDefault();

        SetName(event.target[0].value);
        SetEmail(event.target[1].value);
        SetText(event.target[2].value);
    };

  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon= {<MdMessage fontSize="24px" />} />
    <Button 
    text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
    </div>
    <Button
    isOutline={true}
    text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} />
    <form onSubmit={onSubmit}>
    <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
    </div>
    <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
    </div>
    <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" rows='10' />
    </div>
    <div style={{display : "flex",
                justifyContent : "end"}}>
    <Button text="Submit Button"/>
    </div>
    <div>
        {name + " " + email + " " + text}
    </div>
    </form>
    </div>
    <div className='styles.contact_image'>
    <img src="/images/Service.svg" alt=""/>
    </div>   
</section>
    
  );
};

export default ContactForm
