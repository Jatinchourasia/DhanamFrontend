import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  const { title, date, notes } = props;

  return (
    <StyledComp.Wrapper>
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="date">
          <h2>{date}</h2>
          <p>note: {notes}</p>
        </div>
      </div>
    </StyledComp.Wrapper>
  );
};

const StyledComp = {
  Wrapper: styled.div`
    margin: 0.5rem;
    height: 14rem;
    width: 15rem;
    background: rgba(255, 255, 255, 0.329);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 4px;
    box-shadow: 2px 2px 6px 2px rgba(87, 87, 87, 0.075);

    .container {
      height: 13rem;
      width: 14rem;
      display: flex;
      justify-content: space-between;
      background: white;
      box-shadow: 2px 0px 6px 4px rgba(175, 100, 251, 0.22);
      border-radius: 19px;
      flex-direction: column;
      .title {
        margin: 0.8rem;
        h2 {
          margin: 0;
          font-size: 1rem;
        }
      }
      .date {
        margin: 0.8rem;
        height: 70%;
        border-radius: 20px;
        background: rgba(134, 102, 255, 1);
        color: white;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        h2 {
          margin: 0.8rem;
        }
        p {
          margin: 0.5rem;
          font-weight: bold;
        }
      }
    }
  `,
};
