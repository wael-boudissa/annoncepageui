import React from 'react'
import './AddAnnonce.css'
import AnnonoceHeader from '../Annoncepage1/AnnonoceHeader'
const AddAnnonce = () => {
  return (
    <section className="AddAnnonce">
      <AnnonoceHeader />
      <div>
        <div className="Text">
          <h1>Here You Can publish a new annonce</h1>
          <hr />
        </div>
        <div className="InformationsAnnonce">
          <form>
            <div>
              <label>AnnonceName: </label>
              <input />
            </div>
            <div>
              <label>Type: </label>
              <input />
            </div>
            <div>
              <label>Caterorie: </label>
              <input />
            </div>
            <div>
              <label>Surface: </label>
              <input />
            </div>
            <div>
              <label>Country name: </label>
              <input />
            </div>
            <div>
              <label>Commune: </label>
              <input />
            </div>
            <div>
              <label>Prix: </label>
              <input />
            </div>
          </form>
          <div className="AttacheImage">
            <p>Attacher Photos</p>
            <button>Add Pics</button>
          </div>
          <div className="divDescription">
            <p>Add Description</p>
            <textarea className="AddDescription" maxlength="500"></textarea>
          </div>
        </div>
      </div>
      <div className="buttonPublish">
        <button>Publsih</button>
      </div>
    </section>
  )
}

export default AddAnnonce
