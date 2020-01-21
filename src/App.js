import React from "react";
import Profile from "./assets/profile.png";
import "./style.css";
import logo from "./assets/mining.jpeg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
          <div class="container">
            <a class="navbar-brand" href="/#">
              My Portfolio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/#">
                    Cost Eficiency<span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Electrical
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Mechanical
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      <div className="app-header container">
        <div class="row">
        <h1>Hendrik Katiandagho</h1>
        </div>
        <div>
        <img src={Profile} class="rounded" alt=""/>
        <h3>Electrician & Auto | Embedded System</h3>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            delectus consectetur laudantium, placeat esse maxime, explicabo est
            aliquam illo repellendus rerum non recusandae quis neque, ipsum
            aperiam voluptatibus voluptate deleniti. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Reprehenderit vitae ullam molestiae
            libero ducimus dolore eaque ratione. Distinctio ab recusandae
            nesciunt possimus, magni cupiditate. Nostrum numquam dolor
            laudantium sapiente similique! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fuga officiis iusto sapiente velit
            odit temporibus accusamus reiciendis vero itaque! Rem sit
            praesentium, minus vero saepe asperiores tempora error debitis
            delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium deserunt vitae consequatur officia ullam explicabo ea ad
            doloremque quidem inventore! Quaerat corporis excepturi earum.
            Excepturi, cupiditate! Atque alias facilis voluptatem. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Reiciendis, laudantium
            dolor. Quasi officiis natus assumenda repudiandae ducimus modi
            tempore, beatae placeat recusandae tempora saepe ratione omnis hic
            iste distinctio amet.
          </p>
        </div>
        <hr />
      </div>

      <div>
        <h2>My Portofolio</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "auto" }}>
              <img src={logo} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card" style={{ width: "auto" }}>
              <img src={logo} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card" style={{ width: "auto" }}>
              <img src={logo} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
