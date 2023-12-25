export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonContent = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
