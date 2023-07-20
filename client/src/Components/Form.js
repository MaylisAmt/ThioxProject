import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                console.log("Message sent")
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className='formdiv'>
            <p className='formtitle'>Demander un devis</p>
            <p className='precisions'>(*) Les champs marqués d'une astérisque sont obligatoires.</p>

            <form className='devisform' ref={form} onSubmit={sendEmail}>
                <label className='formlabel'>Nom *</label>
                <input className='lastnameinput' type="text" name="lastname"/>

                <label className='formlabel'>Prénom *</label>
                <input className='firstnameinput' type="text" name="firstname" />

                <label className='formlabel'>E-mail *</label>
                <input className='emailinput' type="email" name="email" />

                <label className='formlabel'>Description du projet *</label>
                <input className='projectdescription' type="textarea" name="projectdescription" />

                <label className='formlabel'>Lieu</label>
                <select className='locationinput' type="text" name="location">
                    <option value="">Choisissez un lieu</option>
                    <option value="paris">Paris</option>
                    <option value="regionparisienne">Région Parisienne</option>
                    <option value="autre">Autre</option>
                </select>

                <label className='formlabel'>Date</label>
                <input className='dateinput' type="date" name="date" />

                <button className='submitbutton'>Submit</button>
            </form>
        </div>

    );
};

export default Form;