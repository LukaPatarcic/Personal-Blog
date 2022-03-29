import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiTest {
      edges {
        node {
          name
        }
      }
    }
  }
`;

const IndexPage = () => {
  return (
      <StaticQuery
          query={query}
          render={data =>  (
              <ul>
                  {data.allStrapiTest.edges.map((data: any) => (
                      <li key={data.node.name}>{data.node.name}</li>
                  ))}
              </ul>
          )}
      />
  )
}

export default IndexPage
