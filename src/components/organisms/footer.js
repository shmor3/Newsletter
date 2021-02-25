import React from "react"
import styled from "styled-components"
import Logo from "@atoms/logo"
import Link from "@atoms/link"
import LinkTop from "@atoms/linkTop"
import { media } from "@utils/media"

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Navigation>
        <li>
          <Link href="mailto:restanford97@gmail.com">restanford@gmail.com</Link>
        </li>
        <li>
          <Link href="https://twitter.com//Robert_AndStuff">Twitter</Link>
        </li>
        <li>
          <Link href="https://app.moonclerk.com/portal-settings/edit">Account</Link>
        </li>
      </Navigation>
      <LinkTop />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  align-items: start;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 var(--spacingContent);
  padding-bottom: var(--spacingFooter);
  position: relative;

  @media ${media.lg} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const LogoContainer = styled.div`
  position: relative;
`

const Info = styled.div``

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Social = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li {
    margin-right: 1rem;
  }
`
