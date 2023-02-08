import PropTypes from 'prop-types';

import {
  PhonebookSection,
  PhonebookContainer,
  TitleContainer,
  Title,
} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <PhonebookSection>
      <PhonebookContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        {children}
      </PhonebookContainer>
    </PhonebookSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
