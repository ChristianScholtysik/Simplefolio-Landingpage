import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        Hi, I am <p className="john">John Smith.</p>
      </h1>
      <h4>A Front End Developer</h4>
      <p className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptas
        hic ad nostrum aperiam magni quidem fugit esse tempora fugiat minima ea
        corrupti ut nulla. Id quos ullam magni exercitationem. Lorem ipsum dolor
        sit amet.
      </p>
      <button className="header-btn">resume</button>
    </header>
  );
};

export default Header;
