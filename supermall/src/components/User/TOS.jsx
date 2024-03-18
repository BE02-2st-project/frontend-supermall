import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TOSAgreeBox = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(30px, auto) auto 70px;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.2rem;
    font-size: 0.9rem;
    color: #666;

    input {
        accent-color: black;
        cursor: pointer;
        margin-right: 0.5rem;
        vertical-align: middle;
        width: 1rem;
        height: 1rem;
    }
    label {
        cursor: pointer;
    }
`;

const TOSConditionTitle = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: black;
    grid-row: 1 / span 2;
`;

const TOSDetailButton = styled.a`
    text-decoration: underline;
    text-align: right;
    cursor: pointer;
`;

const MarketingTitle = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: black;
    margin-top: 1rem;
`;

const MarketingAgree = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const MarketingDetailButton = styled(TOSDetailButton)`
    text-decoration: underline;
    text-align: right;
    cursor: pointer;
    margin-top: 1rem;
`;

function TOS({ fullAgree, setFullAgree, requireCheck, setRequireCheck }) {
    const [agreeTOS, setAgreeTOS] = useState(fullAgree);
    const [agreePrivacy, setAgreePrivacy] = useState(fullAgree);
    const [receiveEmail, setReceiveEmail] = useState(fullAgree);
    const [receiveSNS, setReceiveSNS] = useState(fullAgree);

    useEffect(() => {
        setAgreeTOS(fullAgree);
        setAgreePrivacy(fullAgree);
        setReceiveEmail(fullAgree);
        setReceiveSNS(fullAgree);
    }, [fullAgree]);

    useEffect(() => {
        setRequireCheck(agreeTOS && agreePrivacy);
    }, [agreeTOS, agreePrivacy]);

    useEffect(() => {
        setFullAgree(agreeTOS && agreePrivacy && receiveEmail && receiveSNS);
    }, [agreeTOS, agreePrivacy, receiveEmail, receiveSNS]);

    return (
        <>
            <TOSAgreeBox>
                <TOSConditionTitle>이용약관</TOSConditionTitle>
                <div>
                    <input
                        type="checkbox"
                        id="agree-tos"
                        name="agree-tos"
                        checked={agreeTOS}
                        onChange={() => setAgreeTOS(!agreeTOS)}
                    />
                    <label htmlFor="agree-tos">
                        (필수) 이용약관에 대한 동의
                    </label>
                </div>
                <TOSDetailButton>내용보기</TOSDetailButton>

                <div>
                    <input
                        type="checkbox"
                        id="agree-privacy"
                        name="agree-privacy"
                        checked={agreePrivacy}
                        onChange={() => setAgreePrivacy(!agreePrivacy)}
                    />
                    <label htmlFor="agree-privacy">
                        (필수) 개인정보 수집 및 이용에 대한 동의
                    </label>
                </div>
                <TOSDetailButton>내용보기</TOSDetailButton>

                <MarketingTitle>마케팅 정보 수신</MarketingTitle>
                <MarketingAgree>
                    <div>
                        <input
                            type="checkbox"
                            id="receive-email"
                            name="receive-email"
                            checked={receiveEmail}
                            onChange={() => setReceiveEmail(!receiveEmail)}
                        />
                        <label htmlFor="receive-email">
                            (선택) E-mail 수신 동의
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="receive-sns"
                            name="receive-sns"
                            checked={receiveSNS}
                            onChange={() => setReceiveSNS(!receiveSNS)}
                        />
                        <label htmlFor="receive-sns">
                            (선택) SNS (알림톡) 수신 동의
                        </label>
                    </div>
                </MarketingAgree>
                <MarketingDetailButton>내용보기</MarketingDetailButton>
            </TOSAgreeBox>
        </>
    );
}

export default TOS;
