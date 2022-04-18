import { Content } from '@components/Content'
import { Header } from '@components/Header'
import { Extract } from '@containers/Extract'
import { Navigation } from '@containers/Navigation'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <Header />
    <Content>
      <Navigation />
      <Extract />
    </Content>
  </>
)

export default Home
