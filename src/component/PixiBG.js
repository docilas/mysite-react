import React, { useEffect } from 'react'
import { useWindowSize } from 'react-use'
import * as PIXI from 'pixi.js'
import { AppContext, Stage, Container, Sprite, Text } from 'react-pixi-fiber'
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap/all'

// import { isBrowser, isMobile } from 'react-device-detect'

import bgTexture from '../bg.jpg'
import filterTexture from '../filter.png'

function AniText({ alpha, color }) {
  const { width, height } = useWindowSize()
  const centerAnchor = new PIXI.Point(0.5, 0.5)
  const pixiText = width < 1000 ? 'CHIH\nYUAN\nKUO' : 'CHIH YUAN KUO'

  let pixiTextSize = 80

  if (width > 1366) pixiTextSize = 150
  else if (width > 480) pixiTextSize = 100

  return (
    <Text
      text={pixiText}
      anchor={centerAnchor}
      position={{ x: width / 2, y: height / 2 }}
      blendMode={PIXI.BLEND_MODES.ADD}
      alpha={alpha}
      style={{
        fontFamily: 'Poppins',
        fontSize: pixiTextSize,
        fill: `${color}`,
        fontWeight: 700,
        strokeThickness: 0,
        align: 'center'
      }}
    />
  )
}

function MainContainer({ app }) {
  const { width, height } = useWindowSize()
  const centerAnchor = new PIXI.Point(0.5, 0.5)

  const count = 0.5

  const tlTime = 0.05
  const offset = 7
  const tlEase = 'Circ.easeOut'

  const tlTextL = new TimelineMax({
    repeat: 4,
    repeatDelay: 0.3,
    paused: true
  })
  const tlTextR = new TimelineMax({
    repeat: 4,
    repeatDelay: 0.3,
    paused: true
  })

  const getScale = () => {
    if (width * 0.5625 < height) {
      return height / 0.5625 / 1920
    } else {
      return (width * 0.5625) / 1080
    }
  }

  const playTextAni = () => {
    tlTextL.restart()
    tlTextR.restart()
  }

  useEffect(() => {
    const contentCotainer = app.stage.children[0]
    const displacementSprite = app.stage.children[1]
    const textMid = contentCotainer.children[1]
    const textLft = contentCotainer.children[2]
    const textRig = contentCotainer.children[3]

    // set filter
    contentCotainer.filters = [
      new PIXI.filters.DisplacementFilter(displacementSprite)
    ]

    // pixi element animation
    app.ticker.add(() => {
      displacementSprite.rotation += 0.003
      displacementSprite.scale.x = 2 + Math.sin(count) * 0.02
      displacementSprite.scale.y = 2 + Math.cos(count) * 0.02
    })

    // set text animation
    tlTextL
      .to(textLft, tlTime, {
        alpha: 0.4,
        x: textMid.x - offset,
        y: textMid.y + offset,
        ease: tlEase
      })
      .to(textLft, tlTime, {
        x: textMid.x - offset,
        y: textMid.y - offset,
        ease: tlEase
      })
      .to(textLft, tlTime, {
        x: textMid.x + offset,
        y: textMid.y + offset,
        ease: tlEase
      })
      .to(textLft, tlTime, {
        alpha: 0.1,
        x: textMid.x + offset,
        y: textMid.y - offset,
        ease: tlEase
      })
      .to(textLft, tlTime, { x: textMid.x, y: textMid.y, ease: tlEase })

    tlTextR
      .to(textRig, tlTime, {
        alpha: 0.4,
        x: textMid.x + offset,
        y: textMid.y - offset,
        ease: tlEase
      })
      .to(textRig, tlTime, {
        x: textMid.x + offset,
        y: textMid.y + offset,
        ease: tlEase
      })
      .to(textRig, tlTime, {
        x: textMid.x - offset,
        y: textMid.y - offset,
        ease: tlEase
      })
      .to(textRig, tlTime, {
        alpha: 0.1,
        x: textMid.x - offset,
        y: textMid.y + offset,
        ease: tlEase
      })
      .to(textRig, tlTime, { x: textMid.x, y: textMid.y, ease: tlEase })

    // this should run once only when page loaded
    TweenMax.fromTo(
      '#bg canvas',
      1,
      { z: 200 },
      {
        z: -10,
        alpha: 1,
        ease: 'Sine.easeOut',
        onComplete: playTextAni
      }
    )

    return () => {
      tlTextL.clear()
      tlTextR.clear()
    }
  })

  return (
    <>
      <Container>
        <Sprite
          texture={PIXI.Texture.from(bgTexture)}
          anchor={centerAnchor}
          position={{ x: width / 2, y: height / 2 }}
          scale={getScale()}
        />
        <AniText alpha={0.3} color={'#999'} />
        <AniText alpha={0} color={'#FC577D'} />
        <AniText alpha={0} color={'#54F3B7'} />
      </Container>
      <Sprite
        texture={PIXI.Texture.from(filterTexture)}
        anchor={centerAnchor}
        position={{ x: width / 2, y: height / 2 }}
        alpha={0}
      />
    </>
  )
}

export default function PixiBG() {
  const { width, height } = useWindowSize()

  return (
    <>
      <Stage
        options={{
          backgroundColor: 0x000000,
          width: width,
          height: height
        }}
      >
        <AppContext.Consumer>
          {app => <MainContainer app={app} />}
        </AppContext.Consumer>
      </Stage>
    </>
  )
}
