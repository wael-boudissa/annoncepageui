import React from 'react'
import imgannonce from '../../Images/AnnonceVendre.jpg'
import '../CSS/FindMoreSection.css'
const FindMoreSection = () => {
  return (
    <section className="FindMoreSection">
      <h1>Find More </h1>

      <div className="Annonces">
        <div className="CardAnnonce">
          <h2>Titre de l'annonce</h2>
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <div className="etat_date_card">
            <p>01/02/2023</p>
            <div>
              <p>Details</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="CardAnnonce">
          <h2>Titre de l'annonce</h2>
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <div className="etat_date_card">
            <p>01/02/2023</p>
            <div>
              <p>Details</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="CardAnnonce">
          <h2>Titre de l'annonce</h2>
          <img src={imgannonce} alt="" />
          <div className="localisation_price_card">
            <div>Localisation</div>
            <div>Price</div>
          </div>

          <div className="etat_date_card">
            <p>01/02/2023</p>
            <div>
              <p>Details</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindMoreSection
