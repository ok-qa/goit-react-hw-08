import NavBar from "../NavBar/NavBar";
// import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
