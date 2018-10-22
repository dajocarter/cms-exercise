import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import EntryContent from './styled/EntryContent'

const Post = styled.article``
const EntryHeader = styled.header``
const EntryTitle = styled.h3``
const EntryMeta = styled.div``
const PostedOn = styled.span``
const ByLine = styled.span``
const Author = styled.span``
const EntryFooter = styled.footer``
const CatLinks = styled.span``
const TagLinks = styled.span``

const PostList = ({ title, posts }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {posts &&
        posts.map(({ node }) => (
          <Post key={node.wordpress_id}>
            <EntryHeader>
              <EntryTitle>
                <Link
                  to={node.fields ? node.fields.path : node.slug}
                  rel="bookmark"
                >
                  {node.title ? node.title : node.name}
                </Link>
              </EntryTitle>
              {node.date && (
                <EntryMeta>
                  <PostedOn>
                    Posted on{' '}
                    <Link
                      to={node.fields ? node.fields.path : node.slug}
                      rel="bookmark"
                    >
                      {node.date}
                    </Link>
                  </PostedOn>
                  {node.author && (
                    <ByLine>
                      {' '}
                      by <Author>{node.author.name}</Author>
                    </ByLine>
                  )}
                </EntryMeta>
              )}
            </EntryHeader>
            {node.excerpt && (
              <EntryContent
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            )}
            {(node.categories || node.tags) && (
              <EntryFooter>
                {node.categories && (
                  <CatLinks>
                    Posted in{' '}
                    {node.categories.map((cat, i) => (
                      <React.Fragment key={cat.wordpress_id}>
                        {!!i && ', '}
                        <Link to={cat.fields.path}>{cat.name}</Link>
                      </React.Fragment>
                    ))}
                  </CatLinks>
                )}
                {node.tags && (
                  <TagLinks>
                    Tagged{' '}
                    {node.tags.map((tag, i) => (
                      <React.Fragment key={tag.wordpress_id}>
                        {!!i && ', '}
                        <Link to={`/${tag.slug}/`}>{tag.name}</Link>
                      </React.Fragment>
                    ))}
                  </TagLinks>
                )}
              </EntryFooter>
            )}
          </Post>
        ))}
    </>
  )
}

export default PostList
