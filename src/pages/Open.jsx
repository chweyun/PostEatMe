import React, { useCallback, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import dst1 from "../assets/dst1.svg";
import dst2 from "../assets/dst2.svg";
import dst3 from "../assets/dst3.svg";
import dst4 from "../assets/dst4.svg";
import dst5 from "../assets/dst5.svg";
import axios from 'axios';
import Modal from '../components/Modal';

// import MemoList from "../components/MemoList";

function Open() {

    return (
        <div style={{ position: "relative", height: "500px" }}>    
            <Div1 style={{ width: "260px" }}>
                <img src={dst1} />
            </Div1>
            <Div2 style={{ width: "160px" }}>
                <img src={dst2} />
            </Div2>
            <Div3 style={{ width: "260px" }}>
                <img src={dst3} />
            </Div3>
            <Txt>
                <MainTxt>편지 확인</MainTxt>
                <SubTxt>( 디저트들을 눌러보세요! )</SubTxt>
            </Txt>
            <Div4 style={{ width: "300px" }}>
                <img src={dst4} />
            </Div4>
            <Div5 style={{ width: "280px" }}>
                <img src={dst5} />
            </Div5>
        </div>
    );
};

export default Open;

const Div1 = styled.div`
    position: absolute;
    top: -50px;
    left: -70px;
    opacity: 0.5;
`;
const Div2 = styled.div`
    position: absolute;
    top: -10px;
    right: 0px;
    opacity: 0.5;
`;
const Div3 = styled.div`
    position: absolute;
    top: 100px;
    right: 0px;
    opacity: 0.5;
`;

const Div4 = styled.div`
    position: absolute;
    left: -60px;
    bottom: 0px;
    opacity: 0.5;
`;

const Div5 = styled.div`
    position: absolute;
    bottom: -120px;
    right: -40px;
    opacity: 0.5;
`;

const Txt = styled.div`
    position: absolute;
    left: 28%;
    right: 28%;
`;

const MainTxt = styled.h1`
    font-family: "SCDream";
    font-size: 20px;
    margin-top: 44vh;
`;

const SubTxt = styled.p`
    font-family: "SCDream";
    font-size: 12px;
    color: #568c7d;
    margin-top: 10px;
`;
