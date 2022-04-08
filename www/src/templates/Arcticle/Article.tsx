import React, {FC} from "react";
const Article: FC<any> = ({ data }) => {
	console.log(data);
	return (
		<div>
			<div>{data.strapiTest.id}</div>
			<div>{data.strapiTest.name}</div>
			<div>{data.strapiTest.slug}</div>
		</div>

)
}

import {graphql} from "gatsby";

export const pageQuery = graphql`
    query ($slug: String) {
        strapiTest(slug: { eq: $slug }) {
            id
			name
            slug
        }
    }
`

export default Article;
