import React from "react";
import styled from "styled-components";

const ActivityList = styled.div`
    justify-content: left; 
`;

const ButtonActivity = styled.button`
    padding: 10px 10px;
    border-radius: 20px; 
    border: 3px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:15px;
    &:hover {
        background-color: #F2D4CA;
    }
`;

const HashTag = () => (
    <>
        <ActivityList>
            <ButtonActivity># 전체</ButtonActivity>
            <ButtonActivity># 야외활동</ButtonActivity>
            <ButtonActivity># 교육</ButtonActivity>
            <ButtonActivity># 문화</ButtonActivity>
        </ActivityList>
        <ActivityList>
            <ButtonActivity># 상담</ButtonActivity>
            <ButtonActivity># 여행</ButtonActivity>
            <ButtonActivity># 메이킹</ButtonActivity>
            <ButtonActivity># 기타</ButtonActivity>
        </ActivityList>
    </>
)

export default HashTag;
