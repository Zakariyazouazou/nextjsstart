import Navbarre from "./Navbarre"
const Layout = ({children}) => {
  return (
    <div>
          <Navbarre/>
          <main>
              {children}
          </main>
    </div>
  )
}

export default Layout
