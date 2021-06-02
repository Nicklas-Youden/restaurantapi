 /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Footer(){

	return(
  	<footer
    	css={css`
				width: 100%;
				height: 5em;
				background: #eee;
				position: sticky;
				bottom: 0;
				display: flex;
    	`}
  	>
			<a href="" css={css`display: flex; aling-items: center; justify-content: center`}>
   			<svg css={css`width: 15%; fill: #0a3847;`}viewBox="0 0 24 24"><path d="M21 11H3V9H21V11M21 13H3V15H21V13Z"></path></svg>
  		</a>

  		<a href="" css={css`display: flex; aling-items: center; justify-content: center`}>
   			<svg viewBox="0 0 24 24" css={css` width: 15%; fill: #0a3847;`}><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
    	</a>
    </footer>
  )
}