import 'typeface-inter'
import 'modern-normalize'
import React, { Fragment } from 'react'
import BezierEasing from 'bezier-easing'
import styled from 'styled-components'
import { useMedia, useWindowSize } from 'react-use'

import BezierEditor from 'components/BezierEditor'
import useKnobs from 'hooks/useKnobs'

const panelWidth = 500
const panelPadding = 20

const Link = styled.a({
  textDecoration: 'none',
  color: '#318CFC',
  '&:visited': {
    color: '#318CFC',
  },
})

const PageContainer = styled.div({
  width: '100vw',
  height: '100vh',
  color: '#313f4e',
  backgroundColor: '#EDF2F7',
  display: 'grid',
  gridTemplateColumns: `1fr ${panelWidth}px`,
  fontFamily: 'Inter',
})

const PreviewContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
})

const Sidebar = styled.div({
  padding: panelPadding,
  overflowY: 'auto',
  userSelect: 'none',
  '&.scroll-lock': {
    WebkitOverflowScrolling: 'unset',
    overflow: 'hidden',
  },
})

const Panel = styled.div({
  backgroundColor: '#dfe6ee',
  paddingLeft: panelPadding,
  paddingRight: panelPadding,
  paddingTop: panelPadding * 0.75,
  paddingBottom: panelPadding * 0.75,
  borderRadius: 3,
  '& + &': {
    marginTop: panelPadding / 2,
  },
})

const fixed = (num, precision = 1) =>
  parseFloat(num.toFixed(precision), 10).toString()

const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`
// prettier-ignore

const shadow = (left, top, blur, spread, color) =>
  `${left}px ${top}px ${blur}px ${spread}px ${color}`

const makeLabel =
  (label, unit) =>
  ({ value }) =>
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: panelPadding / 2,
        }}
      >
        <span>{label}</span>
        <span
          style={{
            backgroundColor: '#fff',
            padding: '3px 5px',
            marginLeft: 10,
            borderRadius: 3,
          }}
        >
          {value}
          {unit}
        </span>
      </div>
    )

const App = () => {
  const scrollContainerRef = React.useRef(null)
  const [config, , namedKnobs] = useKnobs({
    shadowLayers: {
      value: 6,
      min: 1,
      max: 10,
      step: 1,
      label: makeLabel('Layers of shadows'),
    },
    alpha: {
      value: 0.07,
      min: 0,
      max: 1,
      step: 0.01,
      label: makeLabel('Final transparency'),
    },
    xOffset: {
      value: 100,
      min: 0,
      max: 500,
      step: 1,
      label: makeLabel('Final horizontal distance', 'px'),
    },
    yOffset: {
      value: 100,
      min: 0,
      max: 500,
      step: 1,
      label: makeLabel('Final vertical distance', 'px'),
    },
    blur: {
      value: 80,
      min: 0,
      max: 500,
      step: 1,
      label: makeLabel('Final blur strength', 'px'),
    },
    spread: {
      value: 0,
      min: -100,
      max: 0,
      step: 1,
      label: makeLabel('Reduce spread', 'px'),
    },
    invertAlpha: { value: false, label: 'Reverse alpha' },
  })

  const [alphaEasingValue, setAlphaEasingValue] = React.useState([
    0.1, 0.5, 0.9, 0.5,
  ])

  const [offsetEasingValue, setOffsetEasingValue] = React.useState([
    0.7, 0.1, 0.9, 0.3,
  ])

  const [blurEasingValue, setBlurEasingValue] = React.useState([
    0.7, 0.1, 0.9, 0.3,
  ])

  const alphaEasing = BezierEasing(...alphaEasingValue)
  const offsetEasing = BezierEasing(...offsetEasingValue)
  const blurEasing = BezierEasing(...blurEasingValue)

  const easedAlphaValues = []
  const easedOffsetValues = []
  const easedBlurValues = []

  for (let i = 1; i <= config.shadowLayers; i++) {
    const fraction = i / config.shadowLayers
    if (config.invertAlpha) {
      easedAlphaValues.unshift(alphaEasing(fraction))
    } else {
      easedAlphaValues.push(alphaEasing(fraction))
    }

    easedOffsetValues.push(offsetEasing(fraction))
    easedBlurValues.push(blurEasing(fraction))
  }

  const boxShadowValues = []
  for (let i = 0; i < config.shadowLayers; i++) {
    boxShadowValues.push([
      easedOffsetValues[i] * config.xOffset,
      easedOffsetValues[i] * config.yOffset,
      easedBlurValues[i] * config.blur,
      config.spread,
      easedAlphaValues[i] * config.alpha,
    ])
  }

  const bezierEditorProps = {
    width: panelWidth - panelPadding * 4,
    height: 100,
    innerBackgroundColor: '#ffffff',
  }

  const { width, height } = useWindowSize()
  const isMobile = useMedia('(max-width: 480px)')
  if (isMobile) {
    bezierEditorProps.width = width - panelPadding * 4
    bezierEditorProps.scrollContainerRef = scrollContainerRef

    return (
      <PageContainer
        style={{
          height,
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr 50vh',
        }}
      >
        <PreviewContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '55vw',
              height: '45vw',
              borderRadius: 6,
              marginTop: '-10vh',
              backgroundColor: 'white',
              padding: 30,
              boxShadow: boxShadowValues
                .map(([leftOffset, topOffset, blur, spread, alpha]) =>
                  shadow(
                    leftOffset,
                    topOffset,
                    blur,
                    spread,
                    rgba(0, 0, 0, alpha),
                  ),
                )
                .join(',\n'),
            }}
          />
        </PreviewContainer>
        <Sidebar
          ref={scrollContainerRef}
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Panel>{namedKnobs.shadowLayers}</Panel>
          <Panel>
            {namedKnobs.alpha}
            <div style={{ marginTop: panelPadding }}>
              <BezierEditor
                {...bezierEditorProps}
                value={alphaEasingValue}
                onChange={setAlphaEasingValue}
              >
                <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                  {easedAlphaValues.map((alpha, index) => (
                    <div
                      key={index}
                      style={{
                        flexGrow: 1,
                        backgroundColor: rgba(0, 0, 0, alpha),
                      }}
                    />
                  ))}
                </div>
              </BezierEditor>
            </div>
            <div style={{ marginTop: 20 }}>{namedKnobs.invertAlpha}</div>
          </Panel>
          <Panel>
            {namedKnobs.xOffset}
            {namedKnobs.yOffset}

            <div style={{ marginTop: panelPadding }}>
              <BezierEditor
                {...bezierEditorProps}
                value={offsetEasingValue}
                onChange={setOffsetEasingValue}
              >
                <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                  {easedOffsetValues.map((value, index) => (
                    <div
                      key={index}
                      style={{
                        flexGrow: value,
                        marginLeft: index !== 0 && 2,
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          borderRadius: 5,
                          backgroundColor: '#d2dce9',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </BezierEditor>
            </div>
          </Panel>
          <Panel>
            {namedKnobs.blur}
            <div style={{ marginTop: panelPadding }}>
              <BezierEditor
                {...bezierEditorProps}
                value={blurEasingValue}
                onChange={setBlurEasingValue}
              >
                <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                  {easedBlurValues.map((value, index) => (
                    <div
                      key={index}
                      style={{
                        flexGrow: 1,
                        marginLeft: index !== 0 && 1,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: `${value * 100}%`,
                          borderRadius: 5,
                          backgroundColor: '#d2dce9',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </BezierEditor>
            </div>
          </Panel>
          <Panel>{namedKnobs.spread}</Panel>
          <div
            style={{
              fontSize: 12,
              fontWeight: 300,
              color: '#496480',
              paddingTop: panelPadding,
              paddingBottom: panelPadding,
            }}
          >
            Inspired by{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://tobiasahlin.com/blog/layered-smooth-box-shadows"
              style={{ color: '#318CFC' }}
            >
              https://tobiasahlin.com/blog/layered-smooth-box-shadows
            </Link>
          </div>
        </Sidebar>
      </PageContainer>
    )
  }

  return (
    <PageContainer style={{ height }}>
      <PreviewContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '35vw',
            minHeight: '25vh',
            borderRadius: 6,
            marginTop: '-15vh',
            backgroundColor: 'white',
            padding: 30,
            boxShadow: boxShadowValues
              .map(([leftOffset, topOffset, blur, spread, alpha]) =>
                shadow(
                  leftOffset,
                  topOffset,
                  blur,
                  spread,
                  rgba(0, 0, 0, alpha),
                ),
              )
              .join(',\n'),
          }}
        >
          <div
            style={{
              color: '#a8bacc',
              padding: 10,
              borderRadius: 3,
              fontFamily: 'monospace',
              fontSize: 16,
              overflow: 'hidden',
              whiteSpace: 'pre',
            }}
            onClick={({ currentTarget }) => {
              const range = document.createRange()
              range.selectNode(currentTarget)
              window.getSelection().removeAllRanges()
              window.getSelection().addRange(range)
            }}
          >
            {'box-shadow:'}
            {boxShadowValues.map(
              ([left, top, blur, spread, alpha], index, { length }) => (
                <div style={{ marginTop: 5, marginBottom: 5 }} key={index}>
                  <span style={{ color: '#318CFC', fontWeight: 'bold' }}>
                    {'  '}
                    {fixed(left)}
                  </span>
                  px{' '}
                  <span style={{ color: '#318CFC', fontWeight: 'bold' }}>
                    {fixed(top)}
                  </span>
                  px{' '}
                  <span style={{ color: '#318CFC', fontWeight: 'bold' }}>
                    {fixed(blur)}
                  </span>
                  px{' '}
                  {spread !== 0 && (
                    <Fragment>
                      <span style={{ color: '#318CFC', fontWeight: 'bold' }}>
                        {fixed(spread)}
                      </span>
                      px{' '}
                    </Fragment>
                  )}
                  rgba(0, 0, 0,{' '}
                  <span style={{ color: '#318CFC', fontWeight: 'bold' }}>
                    {fixed(alpha, 3)}
                  </span>
                  ){index < length - 1 && ','}
                </div>
              ),
            )}
            {';'}
          </div>
        </div>
        <div
          style={{
            fontSize: 12,
            position: 'absolute',
            color: '#496480',
            bottom: panelPadding,
            left: panelPadding,
          }}
        >
          Inspired by{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://tobiasahlin.com/blog/layered-smooth-box-shadows"
          >
            https://tobiasahlin.com/blog/layered-smooth-box-shadows
          </Link>
        </div>
        <div
          style={{
            fontSize: 12,
            position: 'absolute',
            color: '#496480',
            top: panelPadding,
            left: panelPadding,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          <div>Make a smooth shadow, friend.</div>
          <div style={{ fontWeight: 300 }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/c/plugin/788830704169694737/SmoothShadow"
            >
              Figma plugin is out!
            </Link>
            <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/funkensturm"
            >
              Follow me on twitter
            </Link>
          </div>
        </div>
      </PreviewContainer>
      <Sidebar>
        <Panel>{namedKnobs.shadowLayers}</Panel>

        <Panel>
          {namedKnobs.alpha}
          <div style={{ marginTop: panelPadding }}>
            <BezierEditor
              {...bezierEditorProps}
              value={alphaEasingValue}
              onChange={setAlphaEasingValue}
            >
              <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                {easedAlphaValues.map((alpha, index) => (
                  <div
                    key={index}
                    style={{
                      flexGrow: 1,
                      backgroundColor: rgba(0, 0, 0, alpha),
                    }}
                  />
                ))}
              </div>
            </BezierEditor>
          </div>
          <div style={{ marginTop: 20 }}>{namedKnobs.invertAlpha}</div>
        </Panel>

        <Panel>
          {namedKnobs.xOffset}
          {namedKnobs.yOffset}
          <div style={{ marginTop: panelPadding }}>
            <BezierEditor
              {...bezierEditorProps}
              value={offsetEasingValue}
              onChange={setOffsetEasingValue}
            >
              <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                {easedOffsetValues.map((value, index) => (
                  <div
                    key={index}
                    style={{
                      flexGrow: value,
                      marginLeft: index !== 0 && 2,
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        borderRadius: 5,
                        backgroundColor: '#d2dce9',
                      }}
                    />
                  </div>
                ))}
              </div>
            </BezierEditor>
          </div>
        </Panel>

        <Panel>
          {namedKnobs.blur}
          <div style={{ marginTop: panelPadding }}>
            <BezierEditor
              {...bezierEditorProps}
              value={blurEasingValue}
              onChange={setBlurEasingValue}
            >
              <div style={{ display: 'flex', height: '100%', padding: 4 }}>
                {easedBlurValues.map((value, index) => (
                  <div
                    key={index}
                    style={{
                      flexGrow: 1,
                      marginLeft: index !== 0 && 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: `${value * 100}%`,
                        borderRadius: 5,
                        backgroundColor: '#d2dce9',
                      }}
                    />
                  </div>
                ))}
              </div>
            </BezierEditor>
          </div>
        </Panel>

        <Panel>{namedKnobs.spread}</Panel>
      </Sidebar>
    </PageContainer>
  )
}
export default App
