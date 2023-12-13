import React, {useEffect} from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

let lightbox;

const DesignGallery = ({ item }) => {
    useEffect(() => {
        if (!lightbox) {
            lightbox = new PhotoSwipeLightbox({
                gallery: '#macy-container',
                children: 'a',
                pswpModule: () => import('photoswipe'),
                dataSource: () => {
                    return item.images.data.map(image => ({
                        src: image.attributes.formats.large.url,
                        w: image.attributes.formats.large.width,
                        h: image.attributes.formats.large.height,
                    }));
                },
            });
            lightbox.init();

        }

        return () => {
            if (lightbox) {
                lightbox.destroy();
                lightbox = null;
            }
        };
    }, []);

    const openPhotoSwipe = () => {
        if (lightbox) {
            lightbox.loadAndOpen();
        } else {
            console.error('PhotoSwipe not initialized');
        }
    };

    return (
        <div className="design-item mx-auto h-auto w-auto" onClick={openPhotoSwipe}>
            {item.attributes.coverImage?.data && (
                <img
                    className="object-contain mx-auto h-auto w-auto"
                    src={item.attributes.coverImage.data.attributes.url}
                    alt={item.attributes.title}
                    loading="lazy"
                />
            )}
        </div>
    );
};

export default DesignGallery;
