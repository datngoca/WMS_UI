import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import { useState } from "react";


const cx = classNames.bind(styles);

interface ImageProps {
    images: string[];
}

const Image = ({ images }: ImageProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleImageClick = (image: string) => {
        setCurrentImage(image);
    };
    return (
        <div className={cx("image")}>
            <div className={cx("image__list")}>
                {images.map((image) => (
                    <img src={image} alt="" key={image} onClick={() => handleImageClick(image)}
                        className={cx("image__list__item", currentImage === image && "image__list__item--active")} />
                ))}
            </div>
            <div className={cx("image__main")}>
                <img src={currentImage} alt="" />
            </div>

        </div>
    );
};

export default Image;