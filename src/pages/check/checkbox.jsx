import { styled } from "styled-components";

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  &:checked {
    background-color: red;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <CheckboxContainer>
      <Checkbox type="checkbox" checked={checked} onChange={onChange} />
      <span>{checked ? "Checked" : "Unchecked"}</span>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;