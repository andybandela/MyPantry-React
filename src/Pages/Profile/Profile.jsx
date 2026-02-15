import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile-page'>
        <h1 className='page-title'>Profile</h1>

        <div className='paper-card profile -card'>
            <section className='profile-section'>
                <label className='section-label'>Your Name</label>

                <div className='name-row'>
                    <input type='text' id='userName' className='input-field' value="John Doe" disabled/>
                    <button className='btn-secondary' id='editNameBtn'>Edit</button>
                </div>
            </section>

            <div className='section-divider'></div>

            <section className='profile-section'>
                <h2 className='subsection-title'>Preferences</h2>

                <div className='preference-group'>
                    <h3>Preferred Cuisine</h3>
                    <div className='checkbox-grid'>
                        <label><input type='checkbox'/>French</label>
                        <label><input type='checkbox'/>French</label>
                        <label><input type='checkbox'/>French</label>
                        <label><input type='checkbox'/>French</label>
                        <label><input type='checkbox'/>French</label>
                    </div>
                </div>

                <div class="preference-group">
                    <h3>Preferred Diet</h3>
                    <div className="checkbox-grid">
                        <label><input type="checkbox"/> Vegetarian</label>
                        <label><input type="checkbox"/> Vegan</label>
                        <label><input type="checkbox"/> Pescatarian</label>
                    </div>
                </div>

                <div className='preference-group'>
                    <h3>Preferred Main Ingredient</h3>

                    <div className='add-main-row'>
                        <input type="text" id="mainIngredientInput" class="input-field" placeholder="Add ingredient..." />
                        <button id="addMainIngredientBtn" class="btn-secondary">Add</button>
                    </div>

                    <div className='tag-list' id='mainIngredientList'></div>
                </div>
            </section>

            <button className='btn-primary save-btn'>Save Preferences</button>
        </div>
    </div>
  )
}

export default Profile