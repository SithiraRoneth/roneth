import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";

function RootLayout(){
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    )
}

export default RootLayout;