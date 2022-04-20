import { Content } from '@components/Content'
import { Header } from '@components/Header'
import { Extract } from '@containers/Extract'
import { Navigation } from '@containers/Navigation'
import { FilterContextProvider } from '@contexts/filterContext'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <Header />
    <Content>
      <FilterContextProvider>
        <Navigation />
        <Extract />
      </FilterContextProvider>
    </Content>
  </>
)

export default Home
