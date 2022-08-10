import { Link } from "react-router-dom";
import "../css/card.css";

const GenericCard = (props) => {
  /* A function that is being called when the button is clicked. */
  function btnFunc1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("sBtn1");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Back";
      moreText.style.display = "inline";
    }
  }

  function btnFunc2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("sBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Details";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Back";
      moreText.style.display = "inline";
    }
  }

  function chBtnFunc1() {
    var dots = document.getElementById("chDots1");
    var choice = document.getElementById("choice1");
    var btnText = document.getElementById("chBtn1");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show";
      choice.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide";
      choice.style.display = "inline";
    }
  }

  function chBtnFunc2() {
    var dots = document.getElementById("chDots2");
    var choice = document.getElementById("choice2");
    var btnText = document.getElementById("chBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show";
      choice.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide";
      choice.style.display = "inline";
    }
  }

  return (
    <>
    <div className="home-cards">
     {/* <div style={{display: "flex"}}> */}
    
      <link
        href="https://fonts.googleapis.com/css?family=Boogaloo"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Coiny"
        rel="stylesheet"
      />
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="container">
              <div className="img_container">
                <img
                  className="image"
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="Salade ."
                />
              </div>
              <div className="difficulter">1</div>
            </div>
            <div className="card_content">
              <h2 className="card_title">Salade &#x2022; Amuse-gueule</h2>
              <div className="card_text">
                <p>
                Dégustez les légumes les plus frais de la saison !
                  <span id="dots1"> [...]</span>
                  <span id="more1">
                    {" "}
                    Cette salade en bocal est composée d'un mélange de légumes verts et de légumes de saison.
                    légumes de saison, frais du marché fermier.
                  </span>
                </p>
                <button onClick={btnFunc1} id="sBtn1">
                  Details
                </button>
                <div className="cont">
                  <div className="choice">
                    <p>
                    Servi avec votre choix de vinaigrette à part :
                      <br />
                      <span id="chDots1">- Cinq options...</span>
                      <ul>
                        <span id="choice1">
                          <li>ranch maison</li>
                          <li>vinaigrette balsamique aux cerises</li>
                          <li>chipotle crémeux</li>
                          <li>déesse verte à l'avocat</li>
                          <li>moutarde au miel</li>
                        </span>
                      </ul>
                    </p>
                    <button onClick={chBtnFunc1} id="chBtn1">
                    Afficher
                    </button>
                  </div>
                  <br />
                  <div class="add">
                    <p>
                    Ajoutez votre choix de protéines pour <strong>$2</strong> plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <div />
      </ul>

      
      <link
        href="https://fonts.googleapis.com/css?family=Coiny"
        rel="stylesheet"
      />
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="container">
              <div className="img_container">
                <img
                  className="image"
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="Salade ."
                />
              </div>
              <div className="difficulter">1</div>
            </div>
            <div className="card_content">
              <h2 className="card_title">Salade &#x2022; Amuse-gueule</h2>
              <div className="card_text">
                <p>
                Dégustez les légumes les plus frais de la saison !
                  <span id="dots1"> [...]</span>
                  <span id="more1">
                    {" "}
                    Cette salade en bocal est composée d'un mélange de légumes verts et de légumes de saison.
                    légumes de saison, frais du marché fermier.
                  </span>
                </p>
                <button onClick={btnFunc1} id="sBtn1">
                  Details
                </button>
                <div className="cont">
                  <div className="choice">
                    <p>
                    Servi avec votre choix de vinaigrette à part :
                      <br />
                      <span id="chDots1">- Cinq options...</span>
                      <ul>
                        <span id="choice1">
                          <li>ranch maison</li>
                          <li>vinaigrette balsamique aux cerises</li>
                          <li>chipotle crémeux</li>
                          <li>déesse verte à l'avocat</li>
                          <li>moutarde au miel</li>
                        </span>
                      </ul>
                    </p>
                    <button onClick={chBtnFunc1} id="chBtn1">
                    Afficher
                    </button>
                  </div>
                  <br />
                  <div class="add">
                    <p>
                    Ajoutez votre choix de protéines pour <strong>$2</strong> plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <div />
      </ul>


 
      
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="container">
              <div className="img_container">
                <img
                  className="image"
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="Salade ."
                />
              </div>
              <div className="difficulter">1</div>
            </div>
            <div className="card_content">
              <h2 className="card_title">Salade &#x2022; Amuse-gueule</h2>
              <div className="card_text">
                <p>
                Dégustez les légumes les plus frais de la saison !
                  <span id="dots1"> [...]</span>
                  <span id="more1">
                    {" "}
                    Cette salade en bocal est composée d'un mélange de légumes verts et de légumes de saison.
                    légumes de saison, frais du marché fermier.
                  </span>
                </p>
                <button onClick={btnFunc1} id="sBtn1">
                  Details
                </button>
                <div className="cont">
                  <div className="choice">
                    <p>
                    Servi avec votre choix de vinaigrette à part :
                      <br />
                      <span id="chDots1">- Cinq options...</span>
                      <ul>
                        <span id="choice1">
                          <li>ranch maison</li>
                          <li>vinaigrette balsamique aux cerises</li>
                          <li>chipotle crémeux</li>
                          <li>déesse verte à l'avocat</li>
                          <li>moutarde au miel</li>
                        </span>
                      </ul>
                    </p>
                    <button onClick={chBtnFunc1} id="chBtn1">
                    Afficher
                    </button>
                  </div>
                  <br />
                  <div class="add">
                    <p>
                    Ajoutez votre choix de protéines pour <strong>$2</strong> plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <div />
      </ul>
      </div>


      
      {/* </div> */}

      
    </>
  );
};

export default GenericCard;
