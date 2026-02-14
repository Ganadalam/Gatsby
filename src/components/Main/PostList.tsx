import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'


const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2026.02.14.',
  categories: ['Web', 'Frontend (Full stack)', 'Testing'],
   summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://raw.githubusercontent.com/Ganadalam/Gatsby/main/src/components/images/thumbnail.png',
  link: '<https://www.google.co.kr/>',
}
// 추후 개선 후보: StaticImage (지금은 임시 데이터임)

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent = function () {
  return <PostListWrapper>
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
  </PostListWrapper>
}

export default PostList