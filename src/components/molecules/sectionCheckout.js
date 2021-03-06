import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import Seperator from "@assets/seperators/a-seperator-4.svg"
import Container from "@atoms/container"
import SliderTestimonials from "@molecules/sliderTestimonials"
import { media } from "@utils/media"
import Footer from "@organisms/footer"


const SectionCheckout = () => {
  const [loaded, setLoaded] = useState(false)
  const scriptEl = useRef(null)

  // only add moonclerk.js when component mounts
  useEffect(() => {
    const checkoutScript = document.createElement("script")
    checkoutScript.id = "checkoutScript"
    checkoutScript.src = withPrefix("/moonclerk.js")
    scriptEl.current.appendChild(checkoutScript)
    setLoaded(true)
  }, [])

  return (
    <Container content>
      <CheckoutContainer>
        <Content>
          <h6>Membership</h6>
          <h3>AberStan LLC</h3>
          <p>
          Enjoy your unlimited access to the newsletter, private telegram and member only resources.
          </p>
          <Seperator />
          <SliderTestimonials />
          <Footer />
        </Content>
        {/* PASTE MOONCLERK FORM HTML ID HERE */}
        <Form id="mc2dobl7zmzo2p" ref={scriptEl} />
      </CheckoutContainer>
    </Container>
  )
}

export default SectionCheckout

const CheckoutContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  grid-template-columns: var(--gridSplit);
  align-items: center;
  justify-content: center;

  @media ${media.lg} {
    flex-direction: row;
  }
`

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 55%;
  }

  h6 {
    color: ${props => props.theme.colors.lightGray};
    letter-spacing: 3px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    align-items: top;

  }

  h1 {
    color: ${props => props.theme.colors.white};
    align-items: top;

  }

  p {
    color: ${props => props.theme.colors.lightGray};
    align-items: top;

  }
`

const Form = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`
