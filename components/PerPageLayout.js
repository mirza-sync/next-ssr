import Header from 'components/Navbar'
// import Footer from './footer'

/**
 * Demo-ing per page layouts as simple shared layout is much more
 * easier to implement
 * https://nextjs.org/docs/basic-features/layouts
 */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}