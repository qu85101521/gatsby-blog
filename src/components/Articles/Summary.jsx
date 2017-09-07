import React from 'react';
import Link from "gatsby-link"
import styled from 'styled-components'

const Summary = styled.div`
  line-height: 1.8em;
  padding-right: 7.6923%;
  padding-left: 7.6923%;
`
const Content = styled.p`
  margin-top: 10px;
`

export default ({ article }) => <Summary>
  <Content>{article.summary}</Content>
  <Link to={`/articles/${article.id}`}>more>></Link>
</Summary>