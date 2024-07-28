import React, { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";

const search_places = ['Bangkok', 'Bangkok at Night', 'Ko Tao Thailand','Ko Tao','Ko Samui','Ko Samui Lamai','Ko Samui Chaweng', 'Chiang Mai','Chiang Mai at night','Doi Suthep','Doi Inthanon'];
let random_num = Math.floor(Math.random() * (search_places.length));

console.log('random_num++++', random_num);

const Gallery = () => {

    const [randomSearchPlace, setRandomSearchPlace] = useState(search_places[random_num]);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://pixabay.com/api/?key=735829-c120ce078c720811912adda71&q=${randomSearchPlace}&image_type=photo&pretty=true`);
                const data = await response.json();
                const images = data.hits.map((img) => ({
                    original: img.largeImageURL,
                    thumbnail: img.previewURL
                }));
                setImages(images);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, [randomSearchPlace]);

    const handleBack = () => {
        //setCurrentIndex(currentIndex - 1);
        console.log('handleBack-', random_num);
        random_num = (random_num ===  0) ? search_places.length - 1 : random_num - 1;
        console.log('handleBack', random_num, search_places[random_num]);
        setRandomSearchPlace(search_places[random_num]);
        setCurrentIndex(0);
    };

    const handleForward = () => {
        console.log('handleForward-', random_num);
        random_num = (random_num ===  search_places.length - 1) ? 0 : random_num + 1;
        console.log('handleForward', random_num, search_places[random_num]);
        setRandomSearchPlace(search_places[random_num]);
        setCurrentIndex(0);
    };

    const handleReset = () => {
        console.log('handleReset length', search_places.length);
        random_num = Math.floor(Math.random() * search_places.length);
        console.log('handleReset', random_num, search_places[random_num]);
        setRandomSearchPlace(search_places[random_num]);
        setCurrentIndex(0);
    };

    return (
        <div className="pt-2">
            <h2 className="text-4xl font-bold text-center my-5 text-blue-800">{randomSearchPlace}</h2>
            <div className="gallery_navigation flex justify-between  mt-2 mb-8" id="gallery">
                <div className="flex-1 left_navigation w-5">
                    <button onClick={handleBack} className="cursor-pointer" id="back"><span className="material-symbols-outlined text-4xl bold text-blue-600">arrow_back_ios</span></button>
                </div>
                <div className="flex-1 right_navigation w-15 text-right">
                    <button onClick={handleForward} className="cursor-pointer" id="forward"><span className="material-symbols-outlined text-4xl bold text-blue-600">arrow_forward_ios</span></button>
                    <button onClick={handleReset} className="cursor-pointer ml-8" id="reset"><span className="material-symbols-outlined text-4xl bold text-blue-600">restart_alt</span></button>
                </div>
            </div>
            <div className="gallery mt-3"  id="gallery">
                <ImageGallery items={images} showBullets="true" startIndex={currentIndex} />
            </div>
        </div>
    );
};

export default Gallery;
