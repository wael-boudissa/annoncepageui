import React from 'react'
import img1 from '../../Images/AnnonceVendre.jpg'
import img2 from '../../Images/AnnonceVendre.jpg'
import img3 from '../../Images/AnnonceVendre.jpg'
import img4 from '../../Images/AnnonceVendre.jpg'
import './test'
import './ForthSection.css'
const ForthSection = () => {
  return (
    <section>
      <script src="test.js"></script>
      <h1>About Us</h1>
      <p>
        Adipisicing commodo aliquip amet aliquip dolor ullamco deserunt velit
        amet cillum laboris magna adipisicing sunt. Est ad ullamco eu labore
        duis cupidatat irure. Sit magna sint veniam officia anim id nostrud anim
        incididunt aute qui do. Velit eu sunt irure non sit proident pariatur
        irure. Esse consequat qui esse ex nulla et tempor quis sunt. Qui velit
        Lorem mollit velit sunt et. Pariatur ex magna nostrud velit voluptate
        eiusmod do minim ea quis commodo eiusmod deserunt deserunt.
      </p>
      <div className="FirstImages">
        <img src={img1} />
        <img src={img1} />
      </div>
      <div className="SecondImages">
        <img src={img1} />
        <img src={img1} />
      </div>

      <footer>
        <div className="logo_info">
          {' '}
          <h3>Meftahek</h3>
          <ul>
            <li>Why you choose us</li>
            <li>Why you choose us</li>
            <li>Why you choose us</li>
          </ul>
        </div>
        <div className="twitted_by">
          <p>Twitted :</p>
          <p>
            Tempor ex veniam ipsum enim nulla aliquip ex fugiat. Veniam proident
            voluptate Lorem incididunt irure Lorem esse occaecat exercitation
            Lorem. Irure dolor veniam nulla et commodo eu consectetur
            incididunt. Eiusmod ipsum minim incididunt irure in. Consequat
            dolore laborum voluptate nostrud dolore aliqua fugiat nisi nulla
            minim ipsum anim.
          </p>
        </div>
        <div className="recherche_part">
          <div className="recherche_stuffs">
            <label>Search for :</label>
            <input className="recherche" placeholder="Entrer votre recherche" />
            <button>GO</button>
          </div>
          <div className="contact">
            <h3>Contact us</h3>
            <div className="contact_us">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-light fa-envelope-open"></i>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default ForthSection
