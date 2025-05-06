import ButtonWrapper from "./Button.style";

const Button = ({ variant, size, children, ...props }) => {
  return (
    <ButtonWrapper variant={variant} size={size} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
