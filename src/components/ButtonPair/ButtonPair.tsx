import React from 'react'
import "./ButtonPair.css";
const ButtonPair = ({returnClickedOption}: any) => {
    const [clickedOption, setClickedOption] = React.useState<string | undefined>(undefined); 
    React.useEffect(() => returnClickedOption(clickedOption), [clickedOption])
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <button className="pcButton" onClick={() => {
                setClickedOption("pc");
                }}>from PC</button>
            <button className="linkButton" onClick={() => {
                setClickedOption("link");
                }}>link</button>
        </div>
    )
}

export default ButtonPair
