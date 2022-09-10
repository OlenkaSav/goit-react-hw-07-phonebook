import React from 'react';
import { Comment } from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Loader() {
  return (
    <Wrapper>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#4db0ea"
      />
      ;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Loader.propTypes = {
  query: PropTypes.string,
};
