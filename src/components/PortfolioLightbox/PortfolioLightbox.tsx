import React from 'react'
import { imagesArr } from '../../assets/configs/images';
import ButtonPair from '../ButtonPair/ButtonPair';
import ImageCard from '../ImageCard/ImageCard'
import ImageSource from '../ImageSource/ImageSource';
import "./PorfolioLightbox.css";
const PortfolioLightbox = () => {
    const [imageToShow, setImageToShow] = React.useState("");
    const [lightboxDisplay, setLightBoxDisplay] = React.useState<boolean>(false);
    const [toggleButtonPair, setToggleButtonPair] = React.useState<boolean>(false);
    const [linkOrPc, setLinkOrPc] = React.useState<string | undefined>(undefined);
    const [imageArr, setImageArr] = React.useState<string[]>(imagesArr);

    const showImage = (image: any) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e: any) => {
        e.stopPropagation();
        let currentIndex = imageArr.indexOf(imageToShow);
        if (currentIndex >= imageArr.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = imageArr[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    //show previous image in lightbox
    const showPrev = (e: any) => {
        e.stopPropagation();
        let currentIndex = imageArr.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = imageArr[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };

    const returnImage = (e: any) => {
        showImage(e);
    }

    const returnClickedOption = (e: string) => {
        setLinkOrPc(e);
    }

    const returnImgSrc=(e: any) => {
        console.log("returnImgSrc e", e);
        let tempArr = [...imagesArr];
        tempArr.push(e);
        setImageArr(tempArr);
    }

    return (
        <>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <h1>My portfolio generator</h1>
                    <button className="addButton" onClick={() => setToggleButtonPair(!toggleButtonPair)}>+</button>
                </div>
                {toggleButtonPair && (
                    <ButtonPair returnClickedOption={returnClickedOption}/>
                )}

                {linkOrPc && (
                    <ImageSource prop={linkOrPc} returnImgSrc={returnImgSrc}/>
                )}

                {imageArr.map((img, index) => (
                    <ImageCard key={index} image={img} returnImage={returnImage} />
                ))}
                {
                    lightboxDisplay ?
                        <div id="lightbox" onClick={hideLightBox}>
                            <button onClick={showPrev}>⭠</button>
                            <img id="lightbox-img" src={imageToShow}></img>
                            <button onClick={showNext}>⭢</button>
                        </div>
                        : ""
                }
            </div>
        </>
    )
}

export default PortfolioLightbox
