import styled from 'styled-components';

export const Wrapper = styled.div`

    font-size: 15px;
    max-width: 1000px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #00633f;
    padding: 20px;
    box-shadow: 0px 5px 10px rgb(0 0 0 / 25%);
    text-align: center;

    .save {
      position: relative;
      top: 20px;
      cursor: pointer;
      background: linear-gradient(180deg, #fff, #695d5d);
      border: 2px solid #695d5d;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      margin: 20px 0;
      padding: 0 40px;
  }

.sort {
    margin-left: 20px;
    position: relative;
    &__label {
      display: flex;
      align-items: center;
  
      svg {
        margin-right: 8px;
        transform: rotate(180deg);
  
        &.rotated {
          transform: rotate(0);
        }
      }
  
      b {
        margin-right: 8px;
      }
  
      span {
        color: $orange;
        border-bottom: 1px dashed $orange;
        cursor: pointer;
      }
    }

    &__cursor {
      cursor: pointer;
    }
  
    &__popup {
      margin-top: 15px;
      background: #ffffff;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
      border-radius: 10px;
      overflow: hidden;
      padding: 10px 0;
      width: 160px;
  
      ul {
        overflow: hidden;
        li {
          padding: 12px 20px;
          cursor: pointer;
  
          &.active,
          &:hover {
            background: rgba(254, 95, 30, 0.05);
          }
  
          &.active {
            font-weight: bold;
            color: $orange;
          }
        }
      }
    }
  }
`;