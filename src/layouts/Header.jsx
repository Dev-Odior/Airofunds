// import { logo } from "../assets/images/home";
import { logo } from "../assets/images/logo";
import { Button } from "../components/button";
import Container from "./Container";
import Hamburger from "../components/button/Hanburger";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../state/modals/modalsReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { navLinks } = useSelector((store) => store.nav);

  return (
    <header className="flex shadow-md bg-white py-3 md:py-1 fixed top-0 z-[9999999] w-full">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex w-2/3 overflow-visible relative items-center">
            {/* <AnimatePresence> {openNavModal && <NavModal />}</AnimatePresence> */}
            <img
              src={logo}
              alt=""
              className="h-9  md:h-[40px] mr-14 ml-3"
              onClick={() => navigate("/")}
            />
            <div className="relative flex-1">
              <ul
                className={`
                hidden
                mt-[18px]
                lg:flex
                text-[10px]
                uppercase
                gap-[50px]
              text-grayish-text
                font-extrabold
                font-helvetica
                self-end 
                `}
              >
                {navLinks.map((link, index) => {
                  return (
                    <Link key={index} to={link.route}>
                      <li
                        className={`relative ${
                          link.active ? "text-black font-extrabold" : ""
                        }
                      cursor-pointer
                      `}
                        key={index}
                      >
                        {link?.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>

          <Button name="contact us" className={`hidden md:flex`} />
          <Hamburger
            className="lg:hidden mr-3"
            onClickHandler={() => dispatch(toggleSidebar())}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
