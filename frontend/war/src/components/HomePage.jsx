import React, { useEffect } from "react";
import { getSoldiers } from "../utils/SoldierUtil";

const HomePage = () => {
    useEffect(() => {
        getSoldiers().then(res => { console.log(res) })
    }, [])
    return (<></>)
}
export default HomePage;