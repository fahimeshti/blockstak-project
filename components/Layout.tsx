import Topbar from "./Topbar";

const Layout = ({ children }: { children: React.ReactElement }): JSX.Element => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
    </>
  )
}

export default Layout;
