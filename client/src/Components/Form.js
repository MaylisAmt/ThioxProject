import React from 'react';

const Form = () => {
    return (
        <div className='formdiv'>
            <p className='formtitle'>Demander un devis</p>
            <p className='precisions'>(*) Les champs marqués d'une astérisque sont obligatoires.</p>

            <form className='devisform'>
                <label className='formlabel'>Nom *</label>
                <input className='lastnameinput' type="text" id="lastname" name="lastname" />

                <label className='formlabel'>Prénom *</label>
                <input className='firstnameinput' type="text" id="firstname" name="firstname" />

                <label className='formlabel'>E-mail *</label>
                <input className='emailinput' type="email" id="email" name="email" />

                <label className='formlabel'>Description du projet *</label>
                <input className='projectdescription' type="textarea" id="projectdescription" name="projectdescription" />

                <label className='formlabel'>Lieu</label>
                <select className='locationinput' type="text" id="location" name="location">
                    <option value="">Choisissez un lieu</option>
                    <option value="paris">Paris</option>
                    <option value="regionparisienne">Région Parisienne</option>
                    <option value="autre">Autre</option>
                </select>

                <label className='formlabel'>Date</label>
                <input className='dateinput' type="text" id="date" name="date" />

                <button className='submitbutton'>Submit</button>
            </form>
        </div>

        // Nom, prénom, e-mail, type de prestation, description du projet, lieu, date, mettre des astérisques pour les champs obligatoires
    );
};

export default Form;