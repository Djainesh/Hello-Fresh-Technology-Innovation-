import { useRouter } from "next/router";
import { useAuth } from "../firebase/AuthUserContext";
import "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const { authUser, loading, signOutUser } = useAuth();
  return (
    <>
    { authUser ?
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
        <div className="" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              onClick={() => {
                router.push("/");
              }}
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a
              className="nav-link"
              onClick={() => {
                router.push("/Products");
              }}
              aria-current="page"
              href="#"
            >
              Products
            </a>
            <a
              className="nav-link"
              onClick={() => {
                router.push("/Subscription");
              }}
              aria-current="page"
              href="#"
            >
              Subscription
            </a>
            <a
              className="nav-link"
              onClick={() => {
                router.push("/addtokart");
              }}
              aria-current="page"
              href="#"
            >
              Cart
            </a>
            <a
              className="nav-link"
              onClick={() => {
                signOutUser()
                router.push("/user-auth/login");
              }}
              aria-current="page"
              href="#"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
    : <div></div>}
    </>
  );
}
