import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import LOGO from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import SearchBar from "./SearchBar";
import HeaderHoverMenu from "./HeaderHoverMenu";
import { useSelector } from "react-redux";

const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
`;

const HeaderTopBar = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 3rem;
    z-index: 3000;
`;

const HeaderMenuBar = styled.div`
    width: 100%;
    height: 3.2rem;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1500;
    background-color: ${(props) =>
        props.isVisible ? "white" : "white"}; //"rgba(255, 255, 255, 0.9)"};
`;

const MenuArray = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;

const ProductMenuArray = styled(MenuArray)`
    div {
        list-style: none;
        font-weight: bold;
        font-size: 1.1rem;
        text-decoration: none;
        color: black;
    }
    gap: 1rem;
`;

const NavStyle = styled(NavLink)`
    text-decoration: none;
    position: relative;
    color: black;
`;

const NavBarMenu = styled(NavStyle)`
    &::after {
        content: "";
        width: 100%;
        border-bottom: 3px solid black;
        transform: scaleX(0);
        transition: transform 50ms ease-in-out;
        position: absolute;
    }
    &:hover::after {
        transform: scaleX(1);
    }
`;

const LogoImg = styled.img`
    margin-right: 1rem;
    width: 200px;
    cursor: pointer;
`;

const ScrollToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: black;
    color: white;
    width: 3rem;
    height: 3rem;
    border: none;
    font-size: 2.5rem;
    cursor: pointer;
`;

const ScrollButtonStyle = styled(IoIosArrowUp)`
    transition: opacity 5s ease;
    opacity: ${(props) => (props.buttonNeed ? "1" : "0")};
`;

function Header() {
    const barRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [textOrder, setTextOrder] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [loginState, setLoginState] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setLoginState(true);
        }
    }, []);

    useEffect(() => {
        const handleIntersection = (entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(false);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0,
        });

        if (barRef.current) {
            observer.observe(barRef.current);
        }
        return () => {
            if (observer) {
                observer.unobserve(barRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextOrder(!textOrder);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [textOrder]);

    const [buttonNeed, setButtonNeed] = useState(false);

    useEffect(() => {
        const scrollButtonVisible = () => {
            setButtonNeed(window.scrollY > 100 ? true : false);
        };
        window.addEventListener("scroll", scrollButtonVisible);
        return () => {
            window.removeEventListener("scroll", scrollButtonVisible);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <HeaderTopBar ref={barRef}>
                {textOrder ? (
                    <div>
                        플러스 친구 혜택{" "}
                        <span style={{ color: "#F8CE56" }}>#10%쿠폰</span>
                    </div>
                ) : (
                    <div>
                        월드투어{" "}
                        <span style={{ color: "#F1ADBD" }}>
                            #서울시리즈 에디션
                        </span>
                    </div>
                )}
            </HeaderTopBar>
            <HeaderStyle>
                <HeaderMenuBar $isVisible={isVisible}>
                    <ProductMenuArray>
                        <NavStyle to="/">
                            <LogoImg src={LOGO} alt="LOGO" />
                        </NavStyle>
                        <NavBarMenu to="/products/apparel">
                            <div>APPAREL</div>
                        </NavBarMenu>
                        <NavBarMenu to="/products/cap">
                            <div>CAP</div>
                        </NavBarMenu>
                        <NavBarMenu to="/products/shoes">
                            <div>SHOES</div>
                        </NavBarMenu>
                        <NavBarMenu to="/products/bag&acc">
                            <div>BAG & ACC</div>
                        </NavBarMenu>
                    </ProductMenuArray>

                    <MenuArray>
                        <FiSearch onClick={() => setIsSearchOpen(true)} />
                        {isSearchOpen && (
                            <SearchBar setIsSearchOpen={setIsSearchOpen} />
                        )}
                        <NavStyle to="/cart">
                            <RiShoppingBagLine />
                        </NavStyle>

                        <NavStyle
                            to={loginState ? "/mypage" : "/login"}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <LuUser2 />
                        </NavStyle>
                        {isHovered && (
                            <HeaderHoverMenu setIsHovered={setIsHovered} />
                        )}
                    </MenuArray>
                </HeaderMenuBar>
            </HeaderStyle>

            {buttonNeed && (
                <ScrollToTop onClick={scrollToTop}>
                    <ScrollButtonStyle $buttonNeed={buttonNeed} />
                </ScrollToTop>
            )}
        </>
    );
}

export default Header;
