import React from "react";
import styled from "styled-components";
import footer_img_1 from "../../assets/isms.jpg";
import footer_img_2 from "../../assets/footer_img.png";
import footer_sns_logo from "../../assets/footer_sns_logo.jpg";

const StyledFooter = styled.div`
    position: relative;
    transform: translateY(0%);
    width: 100%;
    height: 300px;
    margin-top: 3rem;

    p {
        color: #666;
        font-size: 0.8rem;
    }
`;

const FooterTopBar = styled.div`
    background-color: rgb(170, 170, 170);
    color: white;
    text-align: center;
    padding: 1rem;
`;

const FooterContainer = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding: 1rem;
    padding-bottom: 0;
`;

const FooterMenuSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
`;

const FooterMenuBox = styled.div`
    display: flex;
    font-weight: bold;
    align-items: center;
    gap: 0.5rem;
    span:nth-child(2n) {
        font-weight: lighter;
        color: #666;
    }
`;

const RowFlexStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const FooterMenuRight = styled(FooterMenuSide)`
    align-items: end;
    text-align: right;
`;

const NumberInfo = styled(RowFlexStyle)`
    font-size: 1.5rem;
    gap: 0;
    span:nth-child(1) {
        font-weight: bold;
    }
`;
const TimeInform = styled.div`
    p {
        font-size: 0.8rem;
        color: black;
    }
`;

const FooterBottomBar = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.8rem;
    margin: 0 1.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid #ddd;
    span:nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
    }
    span:nth-child(2n) {
        color: #666;
    }
    span:nth-child(2n + 1) {
        cursor: pointer;
    }
`;
function Footer() {
    return (
        <StyledFooter>
            <FooterTopBar>
                MLB 공식스토어는 구매금액 상관없이 전 상품 무료배송 & 무료반품
            </FooterTopBar>
            <FooterContainer>
                <FooterMenuSide>
                    <FooterMenuBox>
                        <span>공지사항</span>
                        <span>|</span>
                        <span>매장안내</span>
                        <span>|</span>
                        <span>대리점 개설/위탁관리자 지원 문의</span>
                        <span>|</span>
                        <span>고객센터</span>
                        <span>|</span>
                        <span>1:1문의</span>
                        <span>|</span>
                        <span>사이트맵</span>
                    </FooterMenuBox>
                    <div>
                        <p>
                            서울특별시 강남구 언주로 541 에프앤에프빌딩
                            (주)에프앤에프 / 대표 : 김창수
                        </p>
                        <p>
                            개인정보보호책임자 : 류영석 / 교환·반품 반송처 :
                            [17342] 경기도 이천시 대월면 초지리 57 F&F
                            엠엘비코리아샵 물류부
                        </p>

                        <p>
                            F&F에서 직접 운영하는 MLB 온라인 사이트 내의 상품은
                            MLB 오프라인 매장과 동일하게 판매되는 정품
                            상품입니다.
                        </p>
                        <p>COPYRIGHT F&F CO.LTD. ALL RIGHTS RESERVED</p>
                    </div>

                    <RowFlexStyle>
                        <div>
                            <img src={footer_img_1} alt="ISMS" />
                        </div>
                        <div>
                            <p>
                                [인증범위] 에프엔에프 온라인 쇼핑몰 서비스 운영
                            </p>
                            <p>[유효기간] 2023.08.16 ~ 2026.08.15</p>
                        </div>
                    </RowFlexStyle>
                </FooterMenuSide>

                <FooterMenuRight>
                    <RowFlexStyle>
                        <img src={footer_sns_logo} alt="" />
                    </RowFlexStyle>
                    <NumberInfo>
                        <span>CS CENTER</span>
                        <span>080-807-0012</span>
                    </NumberInfo>
                    <TimeInform>
                        <p>AM 9시 ~ PM 6시</p>
                        <p>DAY OFF (SATURDAY, SUNDAY, HOLIDAY)</p>
                        <p>E-MAIL : mlb@fnfcorp.com</p>
                    </TimeInform>
                    <RowFlexStyle>
                        <div>FAMILIY SITE</div>
                        <select name="" id=""></select>
                        <img
                            src={footer_img_2}
                            alt="Flag"
                            width={30}
                            height={30}
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                            }}
                        />
                        <span>KR</span>
                    </RowFlexStyle>
                </FooterMenuRight>
            </FooterContainer>

            <FooterBottomBar>
                <span>개인정보처리방침</span>
                <span>|</span>
                <span>이용약관</span>
                <span>|</span>
                <span>이메일 무단 수집 거부</span>
                <span>|</span>
            </FooterBottomBar>
        </StyledFooter>
    );
}

export default Footer;
