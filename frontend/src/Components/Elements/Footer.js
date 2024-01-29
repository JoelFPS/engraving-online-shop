import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../Styles/FooterStyles";
  

/*<h1 style={{ color: "orange", 
                  textAlign: "center", 
                  marginTop: "-50px" }}>
        Grawerowy.pl
      </h1>*/

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>O nas</Heading>
            <FooterLink href="#">O firmie</FooterLink>
            <FooterLink href="#">Technologia</FooterLink>
            <FooterLink href="#">Sprzęt</FooterLink>
          </Column>
          <Column>
            <Heading>Możliwości</Heading>
            <FooterLink href="#">Grawerowanie</FooterLink>
            <FooterLink href="#">Wycinanie laserowe</FooterLink>
          </Column>
          <Column>
            <Heading>Kontakt</Heading>
            <FooterLink href="#">E-mail</FooterLink>
            <FooterLink href="#" onClick={() => alert('wyłapano kliknięcie przycisku')}>Telefon</FooterLink>
            <FooterLink href="#">Messenger</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/GrawerowyPL" target="_blank">
                  Facebook
            </FooterLink>
            <FooterLink href="https://allegro.pl/" target="_blank">
                  Allegro
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;