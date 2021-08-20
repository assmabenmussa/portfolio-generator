import React from 'react'
import "./ImageSource.css";
const ImageSource = ({prop, returnImgSrc}: any) => {
    const [img, setImg] = React.useState<string | undefined>("../../assets/images/cats.jpg");
    const handleChange = (e: any) => {
        setImg(e.target.value);
    }
    if (prop === "link") {
        return (
            <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <label style={{textAlign: "left"}}>Post Image Link</label>
                <input type="text" onChange={(e) => handleChange(e)}/>
            <button className="submitBtn" onClick={() => returnImgSrc(img)}>submit</button>
            </div>
        )
    } else {
        return (
            <>
            {/* images need to be uploaded via file blob and I didn't get time to set it up */}
            <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <label style={{textAlign: "left"}}>Upload image from your computer</label>
                <input type="file" onChange={(e) => handleChange(e)}/>
            <button disabled className="submitBtn">submit</button>
            </div>
            </>
        )
    }
}

export default ImageSource
