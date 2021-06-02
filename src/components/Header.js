 /** @jsxImportSource @emotion/react */
 import { css } from "@emotion/react";

 const headerStyle = css`
    width: 100%;
    height: 5em;
    background: #FF5500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
 `
 
 export default function Header(){
    return (
        <header css={headerStyle}>Make it work, make it fast, make it pretty</header>
    )
 }