import React from 'react';
import styled from "styled-components";

export default class SingleArticle extends React.Component{
    render(){
        const ArticleBox = styled.div`
            width: 642px;
            height:80px;
            border-bottom: 1px solid #f1f1f1;
            box-sizing:border-box;
            margin-left: 160px;
            cursor: pointer;
            :hover{
                background-color:#e8e8e8;
            }
            `;
        const Title = styled.p`
            width:440px;
            height:40px;
            line-height:40px;
            font-size:18px;
            float:left;
        `
        const CateBox = styled.div`
            display:inline-block;
            box-sizing:border-box;
            width:200px;
            height:40px;       
            padding-top:8px;
            padding-right:5px;     
            float:right;
            font-size:13px;
            span{
                display:inline-block;
                float:right;                
                padding:0 8px;
                height:24px;
                line-height:24px;
                margin-left:5px;
                background-color: #e8e8e8;
                border-radius:3px;
            }
        `;
        const Date = styled.p`

        `
        return(
            <div style={{marginTop:'15px'}} >
                <ArticleBox>
                    <Title>
                        this is SingleArticle
                    </Title>
                    <CateBox>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </CateBox>
                    <Date>
                        Dec 9,2017
                    </Date>
                </ArticleBox>
            </div>
        )
    }
}