import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/loginSlice";

const UserHoverMenu = styled.ul`
    position: absolute;
    top: 3rem;
    right: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem;
    box-shadow: 2px 2px 2px #ddd;
    li {
        list-style: none;
        font-size: 1rem;
        font-weight: lighter;
    }
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

function HeaderHoverMenu({ setIsHovered, loginState }) {
    const dispatch = useDispatch();

    const handleClickLogout = () => {
        dispatch(logout);
    };

    return (
        <UserHoverMenu
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {loginState.email ? (
                <>
                    <NavBarMenu to="/" onClick={handleClickLogout}>
                        <li>로그아웃</li>
                    </NavBarMenu>
                    <NavBarMenu to="/mypage">
                        <li>마이페이지</li>
                    </NavBarMenu>
                </>
            ) : (
                <>
                    <NavBarMenu to="/login">
                        <li>로그인</li>
                    </NavBarMenu>
                    <NavBarMenu to="/signup">
                        <li>회원가입</li>
                    </NavBarMenu>
                </>
            )}
        </UserHoverMenu>
    );
}

export default HeaderHoverMenu;
