import React from 'react'
import rec from '../data/Blog'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'
import Layout from '../components/layout'

const Blog = () => (
  <Layout>
  <RecWrapper>
    <h1>Blogs</h1>
    {
      rec.map(item => (<RecBox key={item.id} >
      <h3><a href={item.userLink}>{item.name}</a></h3>
        <img src={item.image} style={{width:400}}></img>
        <hr/>
      </RecBox>
      ))
    }
  </RecWrapper>
  </Layout>
)

export default Blog


















