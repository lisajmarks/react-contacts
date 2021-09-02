import ContactCard from "./ContactCard";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const LightGreyContainer = styled(Container)`
  background-color: rgba(0, 0, 0, 0.1);
`;

const ContactList = ({ contacts = [] }) => {
  return (
    <LightGreyContainer className="d-flex flex-column align-items-center py-5">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </LightGreyContainer>
  );
};

export default ContactList;
