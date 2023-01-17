import React from "react";
import styled from "styled-components";
import FackeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

const PostConatiner = styled.div`
    flex: 1;
`
const PostItem = styled.section`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }
    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }
`
const Post = () => {
    return (
        <PostConatiner>
            {[0,1,2,3].map((v, i) => {
                return (
                    <PostItem key={i}>
                        <h2>TITLE HEADING</h2>
                        <h3>Title description, Dec 7, 2018</h3>
                        <FackeImg height='200'>Image</FackeImg>
                        <p>Some text..</p>
                        <p>sdf;sdfha;sjdhfasjdhfjsdhflasjdh;asjdhf;l</p>
                        <br />
                    </PostItem>
                )
            })}
        </PostConatiner>
    )
}

export default Post;