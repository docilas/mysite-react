import React, { useEffect } from 'react'
import { TweenMax, CSSPlugin } from 'gsap/all'
import CloseBtn from '../common/CloseBtn'

export default function AboutPage({ currentPage, setPage }) {
  const fadeOutAni = () => {
    TweenMax.to('.sec_about ', 0.3, {
      alpha: 0,
      delay: 0.1,
      ease: 'Circ.easeOut'
    })
    TweenMax.to('.sec_about .wrapper', 0.5, {
      x: '-20%',
      onComplete: () => {
        setPage('home')
      }
    })
  }

  useEffect(() => {
    if (currentPage === 'about') {
      TweenMax.to('.sec_about ', 0.6, { alpha: 1, ease: 'Sine.easeOut' })
      TweenMax.to('.sec_about .wrapper', 0.5, {
        x: '0%',
        delay: 0.2,
        ease: 'Circ.easeOut'
      })
      TweenMax.set('.sec_about .profile', {
        animation: 'blink 0.5s 0.75s both',
        delay: 0.5
      })
      TweenMax.set('.sec_about .text', {
        animation: 'slide-up 0.5s 1.5s both',
        delay: 0.5
      })
    }
  })

  return currentPage !== 'about' ? null : (
    <section className="sec sec_about">
      <CloseBtn className="close-about" onClick={fadeOutAni} />

      <div className="wrapper">
        <div className="inner">
          <div className="profile">
            <img src="/images/me.jpg" alt="" />
          </div>
          <div className="text">
            <h2>About Me.</h2>
            <p>
              嗨！你好，我是
              <span className="glitch" data-text="郭智元">
                郭智元
              </span>
              , 目前正在找
              <span className="glitch" data-text="前端工程師">
                前端工程師
              </span>
              的工作
            </p>
            <p>
              五年以上的前端工作經驗，三年在台灣的廣告公司，主要為建置短期的產品活動網站，依照客戶需求開發各種互動功能以及動畫；兩年在布拉格的博弈公司製作線上老虎機遊戲，工作內容以前端為主，但也會參與server端的部分；另外也有自己接案，一樣是產品活動網站為主，或是線上的小遊戲。
            </p>
            <p>
              獨自完成
              <span className="glitch" data-text="40">
                40
              </span>
              個以上的網站，以及與團隊製作
              <span className="glitch" data-text="10">
                10
              </span>
              個以上的老虎機遊戲，專長為網站特效、動畫製作，個人特色就是
              <span className="glitch" data-text="快又有效">
                快又有效
              </span>
              ，可獨立作業也可團隊合作，適應力強。
            </p>
            <p>請參考以下方式與我聯繫！</p>
            <h2>Contact Info.</h2>
            <p>
              Mobile :&nbsp;
              <a
                className="glitch"
                href="tel:+886938625380"
                data-text="0938 625 380"
              >
                0938 625 380
              </a>
              <br />
              Mail :&nbsp;
              <a
                className="glitch"
                href="mailto:docilas555@gmail.com"
                data-text="docilas555@gmail.com"
              >
                docilas555@gmail.com
              </a>
            </p>
            <div className="social">
              <a
                href="http://www.linkedin.com/in/chih-yuan-kuo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="glitch" data-text="Linkedin">
                  Linkedin
                </span>
              </a>
              <a
                href="https://www.facebook.com/docilas"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="glitch" data-text="Facebook">
                  Facebook
                </span>
              </a>
              <a
                href="https://www.instagram.com/docilas555/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="glitch" data-text="Instagram">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
