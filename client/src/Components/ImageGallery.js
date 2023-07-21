import React, {useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import leftarrow from "../assets/arrows/left-arrow.png"
import rightarrow from "../assets/arrows/right-arrow.png"
import closingcross from "../assets/arrows/close.png"

const images = [
    "../images/city.jpg",
    "../images/grappling.jpg",
    "../images/rap.jpg",
    "../images/shoes.jpg",
    "../images/sport.jpg",
    "../images/street.jpg"
]

const ImageGallery = () => {

    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({img: images[i+1], i: i+1})
        }
        if (action === 'prev-img') {
            setData({img: images[i-1], i: i-1})
        }
        if (!action) {
            setData({img: '', i: 0})
        }
    }

    return (
        <>
            {data.img && 
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: '#00000096',
                    position: 'fixed',
                    top: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <button className='closingbtn' onClick={() => imgAction()}><img src={closingcross} alt="close"/></button>
                    <button className='btnleft' onClick={() => imgAction('prev-img')}><img src={leftarrow} alt='previous'/></button>
                    <img src={data.img} style={{width: 'auto', objectFit: 'fill', maxWidth:'90%', maxHeight: '90vh',}} alt="" />
                    <button className='btnright' onClick={() => imgAction('next-img')}><img src={rightarrow} alt='next'/></button>
                </div>
            }
        <div style={{padding: '10px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: "pointer"}}
                            alt=""
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </>
    );
};

export default ImageGallery;


// style={{position: 'absolute', top: '10px', right: '10px'}}