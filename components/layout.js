import Navbar from "./navbar";
import { Fragment } from "react/cjs/react.production.min";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
export default function Layout({ children }) {
    return (
        <Fragment >
            <div>
                {children}
            </div>
        </Fragment>
    )
}
