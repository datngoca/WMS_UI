import classNames from "classnames/bind";
import styles from "./ProductPage.module.scss";
import Image from "../components/Image";
const cx = classNames.bind(styles);
import productIphone from "@/assets/img/product_iphone.svg";
import productIphoneBack from "@/assets/img/product_iphone_back.svg";
import productIphoneFront from "@/assets/img/product_iphone_front.svg";
import productIphoneSide from "@/assets/img/product_iphone_side.svg";

import Info from "../components/Info";

export interface ProductOption {
    name: string;
    type: "color" | "text" | "button";
    values: { label: string; value: string }[];
}

export interface DetailedSpec {
    groupName: string;
    items: { label: string; value: string | number }[];
}

export interface ProductMockData {
    name: string;
    price: number;
    originalPrice: number;
    options: ProductOption[];
    specs: { label: string; value: string | number }[];
    detailedSpecs: DetailedSpec[];
    description: string;
    delivery: {
        freeDelivery: string;
        inStock: string;
        guaranteed: string;
    };
}

const productMock: ProductMockData = {
    name: "Apple iPhone 14 Pro Max",
    price: 1399,
    originalPrice: 1499,
    options: [
        {
            name: "Color",
            type: "color",
            values: [
                { label: "Black", value: "#000000" },
                { label: "Purple", value: "#652b9c" },
                { label: "Red", value: "#e00000" },
                { label: "Gold", value: "#e6b700" },
                { label: "Silver", value: "#e8e8e8" }
            ]
        },
        {
            name: "Storage",
            type: "button",
            values: [
                { label: "128GB", value: "128GB" },
                { label: "256GB", value: "256GB" },
                { label: "512GB", value: "512GB" },
                { label: "1TB", value: "1TB" }
            ]
        }
    ],
    specs: [
        { label: "Screen size", value: "6.7\"" },
        { label: "CPU", value: "Apple A16 Bionic" },
        { label: "Number of Cores", value: 6 },
        { label: "Main camera", value: "48-12 - 12 MP" },
        { label: "Front-camera", value: "12 MP" },
        { label: "Battery capacity", value: "4323 mAh" }
    ],
    detailedSpecs: [
        {
            groupName: "Screen",
            items: [
                { label: "Screen diagonal", value: "6.7\"" },
                { label: "The screen resolution", value: "2796x1290" },
                { label: "The screen refresh rate", value: "120 Hz" },
                { label: "The pixel density", value: "460 ppi" },
                { label: "Screen type", value: "OLED" },
                { label: "Additionally", value: "Dynamic Island\nAlways-On display\nHDR display\nTrue Tone\nWide color (P3)" }
            ]
        },
        {
            groupName: "CPU",
            items: [
                { label: "CPU", value: "A16 Bionic" },
                { label: "Number of cores", value: 6 }
            ]
        }
    ],
    description: "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.",
    delivery: {
        freeDelivery: "1-2 day",
        inStock: "Today",
        guaranteed: "1 year"
    }
};

const images = [
    productIphone,
    productIphoneBack,
    productIphoneFront,
    productIphoneSide,
]

const ProductPage = () => {
    return (
        <div className={cx("product-page")}>
            {/* -------------- Main Info -------------- */}
            <div className={cx("product-page__main-info")}>
                <div className={cx("product-page__main-info__image")}>
                    <Image images={images} />
                </div>
                <div className={cx("product-page__main-info__content")}>
                    <Info data={productMock} />
                </div>
            </div>

            {/* -------------- Details -------------- */}
            <div className={cx("product-page__details")}>
                <h3 className={cx("product-page__details__title")}>Details</h3>
                <div className={cx("product-page__details__description")}>
                    {productMock.description}
                </div>
                <div className={cx("product-page__details__specs")}>
                    {productMock.detailedSpecs.map((group, groupIndex) => (
                        <div key={groupIndex} className={cx("product-page__details__specs__group")}>
                            <h4 className={cx("product-page__details__specs__group__title")}>{group.groupName}</h4>
                            <div className={cx("product-page__details__specs__group__content")}>
                                {group.items.map((spec, specIndex) => (
                                    <div key={specIndex} className={cx("product-page__details__specs__group__content__item")}>
                                        <div className={cx("product-page__details__specs__group__content__item__label")}>
                                            {spec.label}
                                        </div>
                                        <div className={cx("product-page__details__specs__group__content__item__value")}>
                                            {String(spec.value).split('\n').map((line, i) => (
                                                <div key={i}>{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* -------------- Reviews -------------- */}
            <div className={cx("product-page__reviews")}>

            </div>

            {/* -------------- Related Products -------------- */}
            <div className={cx("product-page__related-products")}>

            </div>
        </div>
    );
};

export default ProductPage;