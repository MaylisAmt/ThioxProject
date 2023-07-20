import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

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

    //returns an object that contains several properties and methods that can be use with forms
    // const form = useForm()
    // const { register, control } = form

    return (
        <div className='formdiv'>
            <p className='formtitle'>Demander un devis</p>
            <p className='precisions'>(*) Les champs marqués d'une astérisque sont obligatoires.</p>

            <form className='devisform' ref={form} onSubmit={sendEmail}>
                <label className='formlabel'>Nom *</label>
                {/* <input className='lastnameinput' type="text" id="lastname" {...register("lastname")} /> */}
                <input className='lastnameinput' type="text" name="lastname"/>

                <label className='formlabel'>Prénom *</label>
                {/* <input className='firstnameinput' type="text" id="firstname" {...register("firstname")} /> */}
                <input className='firstnameinput' type="text" name="firstname" />

                <label className='formlabel'>E-mail *</label>
                {/* <input className='emailinput' type="email" id="email" {...register("email")} /> */}
                <input className='emailinput' type="email" name="email" />

                <label className='formlabel'>Description du projet *</label>
                {/* <input className='projectdescription' type="textarea" id="projectdescription" {...register("projectdescription")} /> */}
                <input className='projectdescription' type="textarea" name="projectdescription" />

                <label className='formlabel'>Lieu</label>
                {/* <select className='locationinput' type="text" id="location" {...register("location")}> */}
                <select className='locationinput' type="text" name="location">
                    <option value="">Choisissez un lieu</option>
                    <option value="paris">Paris</option>
                    <option value="regionparisienne">Région Parisienne</option>
                    <option value="autre">Autre</option>
                </select>

                <label className='formlabel'>Date</label>
                {/* <input className='dateinput' type="text" id="date" {...register("date")} /> */}
                <input className='dateinput' type="date" name="date" />

                <button className='submitbutton'>Submit</button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>

        // Nom, prénom, e-mail, type de prestation, description du projet, lieu, date, mettre des astérisques pour les champs obligatoires
    );
};

export default Form;