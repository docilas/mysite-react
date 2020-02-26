import React, { useState, useEffect } from 'react'
import GoogleFontLoader from 'react-google-font-loader'

// import { TweenMax, TimelineMax, CSSPlugin } from 'gsap/all'

import PixiBG from './component/PixiBG'
import AboutPage from './component/AboutPage'

import './sass/style.scss'

function LoadingScreen({ ani_text }) {
  return (
    <div id="loading">
      <p className="noise" data-text={ani_text}>
        {ani_text}
      </p>
      <div className="progress" />
    </div>
  )
}

function Logo({ ani_text }) {
  return (
    <div id="logo">
      <a href="https://docilas.github.io/">
        <span className="noise" data-text={ani_text}>
          {ani_text}
        </span>
      </a>
    </div>
  )
}

function MenuBtn() {
  return (
    <div id="menu-trigger">
      <span />
      <span />
      <span />
    </div>
  )
}

function MenuItem(props) {
  return (
    <li
      className={`btn ${props.className}`}
      key={props.className}
      onClick={props.onClick}
    >
      <span>{props.name}</span>
    </li>
  )
}

function Menu({ setPage }) {
  return (
    <nav id="menu">
      <ul>
        <MenuItem
          name="HOME"
          className="btn-home"
          onClick={() => setPage('home')}
        />
        <MenuItem
          name="About"
          className="btn-about"
          onClick={() => setPage('about')}
        />
        <MenuItem name="Work" className="btn-work" />
      </ul>
    </nav>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    console.log('currentPage ', currentPage)
  })

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Poppins',
            weights: [400, 700]
          }
        ]}
      />

      {/* <LoadingScreen ani_text="Loading..."/> */}

      <div id="mask">
        <div className="wrapper">
          <div className="masthead" />
        </div>
      </div>

      <Logo ani_text="CHIH." />
      <MenuBtn />
      <Menu setPage={setCurrentPage} />

      <main>
        <div id="bg">
          <PixiBG />

          <div className="tip">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <div className="finger">
              <img src="assets/images/finger.svg" alt="" />
            </div>
          </div>
        </div>
        <AboutPage currentPage={currentPage} setPage={setCurrentPage} />

        <section className="sec sec_work">
          <div className="list_num hide">
            <span className="work_num" data-num={1} />
            <span>/</span>
            <span>10</span>
          </div>
          <div className="work_list">
            <div className="flex_wrap">
              <div className="work work-1">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Creativity Week">Creativity Week</h3>
                  <p className="type">website</p>
                  <p className="year">2016</p>
                  <p className="feature">#WebGL</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-2">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Discover Hong Kong">Discover Hong Kong</h3>
                  <p className="type">website</p>
                  <p className="year">2016</p>
                  <p className="feature">#CanvasDraw</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>View The Work</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-3">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Let's Cafe">Let's Cafe</h3>
                  <p className="type">website</p>
                  <p className="year">2016</p>
                  <p className="feature">#ImageFilter</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-4">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Sakura Rangehood">Sakura Rangehood</h3>
                  <p className="type">website</p>
                  <p className="year">2017</p>
                  <p className="feature">#ScrollMagic</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-5">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Crafts">Crafts</h3>
                  <p className="type">demo</p>
                  <p className="year">2017</p>
                  <p className="feature">#KaleidoscopEffect</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-6">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Familymart x Disney">Familymart x Disney</h3>
                  <p className="type">website</p>
                  <p className="year">2015</p>
                  <p className="feature">#PhysicsSimulation</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-7">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Samaung S7">Samaung S7</h3>
                  <p className="type">website</p>
                  <p className="year">2015</p>
                  <p className="feature">#Parallax</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-8">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Pxmart Ghost Festival">
                    Pxmart Ghost Festival
                  </h3>
                  <p className="type">website</p>
                  <p className="year">2016</p>
                  <p className="feature">#VideoSynchronized</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-9">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Bausch+Lomb">Bausch+Lomb</h3>
                  <p className="type">website</p>
                  <p className="year">2015</p>
                  <p className="feature">#ParticleEffect</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
            <div className="flex_wrap">
              <div className="work work-10">
                <div className="masthead" />
                <div className="info">
                  <h3 data-text="Q1 Building">Q1 Building</h3>
                  <p className="type">website</p>
                  <p className="year">2014</p>
                  <p className="feature">#360°Panoramas</p>
                </div>
                <div className="btn btn-discover btn-glitch">
                  <span>Discover</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
