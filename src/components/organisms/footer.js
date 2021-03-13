import React from "react"
import styled from "styled-components"
import Link from "@atoms/link"
import { media } from "@utils/media"

const Footer = () => {
  return (
    <FooterContainer>
      <Navigation>
        <li>
          <Link href="mailto:restanford97@gmail.com">Contact</Link>
        </li>
        <li>
          <Link href="https://twitter.com//Robert_AndStuff">Twitter</Link>
        </li>
        <li>
          <Link href="https://app.moonclerk.com/portal-settings/edit">Account</Link>
        </li>
      </Navigation>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 var(--spacingContent);
  padding-top: 10px;
  position: relative;
  text-align: center;

  @media ${media.lg} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const Navigation = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
  list-style: none;
  margin: 0;

  li {
    margin-right: 1rem;
  }
`
