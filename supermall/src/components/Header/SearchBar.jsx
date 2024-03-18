import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const BackContainer = styled.div`
    position: fixed;
    top: 3.2rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    background-color: rgba(0, 0, 0, 0.5);
`;

const SearchModal = styled.div`
    width: 100%;
    height: 60%;
    z-index: 20;
    position: absolute;
    top: 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    overflow: scroll;
`;

const SearchForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 3rem;
`;

const SearchInput = styled.input`
    border: none;
    border-bottom: 3px solid black;
    padding: 1rem;
    font-size: 1.5rem;
    width: 30%;
    &:focus {
        outline: none;
    }
`;

const SearchIcon = styled(FiSearch)`
    font-size: 2rem;
    cursor: pointer;
`;

const CloseSearchIcon = styled(MdClose)`
    font-size: 2.5rem;
    cursor: pointer;
`;

const SearchHistoryBox = styled.div`
    width: 60%;
    div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #aaa;
        padding: 1rem 0;
    }
`;

const SearchKeyword = styled.ul`
    padding-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    li {
        list-style: none;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        background-color: #f8f8f9;
        display: flex;
        justify-content: center;
        align-items: center;
        display: inline-block;
    }

    li button {
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        background-color: transparent;
    }
`;

const DeleteHistory = styled(MdClose)`
    cursor: pointer;
    color: #aaa;
`;

const SearchResetBtn = styled.button`
    border: none;
    background: none;
    color: #aaa;
    cursor: pointer;
    font-size: 1.1rem;
`;

const Backdrop = ({ setIsSearchOpen }) => {
    return (
        <BackContainer onClick={() => setIsSearchOpen(false)}></BackContainer>
    );
};

const Overlay = ({ setIsSearchOpen, searchWords, setSearchWords }) => {
    const [inputWord, setInputWord] = useState("");
    const handleSearchInput = (event) => {
        setInputWord(event.target.value);
    };

    const handleKeywordDelete = (index) => {
        setSearchWords((prev) => prev.filter((_, idx) => idx !== index));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearchWords((prev) => [...prev, inputWord]);
        console.log(searchWords);
    };

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => (document.body.style = `overflow: auto`);
    }, []);

    return (
        <SearchModal>
            <SearchForm id="searchForm">
                <SearchInput
                    type="search"
                    placeholder="검색"
                    value={inputWord}
                    onChange={handleSearchInput}
                />

                <SearchIcon onSubmit={handleSearchSubmit} />
                <CloseSearchIcon onClick={() => setIsSearchOpen(false)} />
            </SearchForm>
            <SearchHistoryBox>
                <div>
                    <h2>최근 검색어</h2>
                    <SearchResetBtn
                        type="reset"
                        onClick={() => setSearchWords([])}
                    >
                        전체 삭제
                    </SearchResetBtn>
                </div>
                <SearchKeyword>
                    {searchWords.map((word, index) => (
                        <li key={index}>
                            <button>{word}</button>
                            <DeleteHistory
                                onClick={() => handleKeywordDelete(index)}
                            ></DeleteHistory>
                        </li>
                    ))}
                </SearchKeyword>
            </SearchHistoryBox>
        </SearchModal>
    );
};

function SearchBar({ setIsSearchOpen }) {
    const [searchWords, setSearchWords] = useState([
        "모자",
        "셔츠",
        "원피스",
        "캡",
        "뉴욕양키스",
        "스트라이프",
        "양말",
        "컬시브레터링",
        "베이직",
        "자켓",
        "박시",
        "레터링",
        "숄더백",
    ]);

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop setIsSearchOpen={setIsSearchOpen} />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    setIsSearchOpen={setIsSearchOpen}
                    searchWords={searchWords}
                    setSearchWords={setSearchWords}
                />,
                document.getElementById("overlay")
            )}
        </>
    );
}

export default SearchBar;
