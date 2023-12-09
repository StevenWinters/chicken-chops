interface Props {
  onSetNavActive: () => void;
}

const HamburgerMenu = ({ onSetNavActive }: Props) => {
  return (
    <div className="hamburger__menu" onClick={() => onSetNavActive()}>
      <span className="hamburger__block"></span>
      <span className="hamburger__block"></span>
      <span className="hamburger__block"></span>
    </div>
  );
};

export default HamburgerMenu;
