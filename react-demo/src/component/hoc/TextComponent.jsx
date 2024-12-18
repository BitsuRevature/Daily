import { useContext } from "react";
import withFancyText from "./withFrancyText";
import MyContext from "../contextdemo/MyContext";

function TextComponent() {
    const sharedData = useContext(MyContext);
    return ( 
        <p>{sharedData}</p>
     );
}


export default withFancyText(TextComponent);