import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Login from '../components/Login'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <Login />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page