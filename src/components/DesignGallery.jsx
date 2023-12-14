import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const DesignGallery = ({ item }) => {
    const galleryId = `gallery-${item.id}`;
    const lightboxRef = useRef(null);

    useEffect(() => {
        const images = item.images.data.map((image) => ({
            src: image.attributes.formats.large.url,
            w: Number(image.attributes.formats.large.width),
            h: Number(image.attributes.formats.large.height),
            // Optional: Include description or other data here
            // description: 'Your description here'
        }));

        if (!lightboxRef.current) {
            lightboxRef.current = new PhotoSwipeLightbox({
                gallery: `#${galleryId}`,
                children: 'a',
                dataSource: images,
                pswpModule: () => import('photoswipe'),
                showHideAnimationType: 'fade',
                mouseMovePan: true,
                initialZoomLevel: 'fit',
                secondaryZoomLevel: 1.5,
                maxZoomLevel: 3,
                loop: true,
                pinchToClose: true,
                imageClickAction: 'zoom',
                tapAction: 'zoom',
            });

            lightboxRef.current.init();
        } else {
            lightboxRef.current.options.dataSource = images;
        }

        return () => lightboxRef.current?.destroy();
    }, [item.id, item.images.data]);

    const openPhotoSwipe = () => {
        lightboxRef.current?.loadAndOpen(0);
    };

    return (
        <div id={galleryId} className="design-item mx-auto h-auto w-auto" onClick={openPhotoSwipe}>
            {item.attributes.coverImage?.data && (
                <img
                    className="object-contain mx-auto h-auto w-auto"
                    src={item.attributes.coverImage.data.attributes.url}
                    alt={item.attributes.title}
                    loading="lazy"
                />
            )}
            {item.images.data.map((image) => (
                <a key={image.id} href={image.attributes.formats.large.url} style={{ display: 'none' }} data-pswp-width={image.attributes.formats.large.width} data-pswp-height={image.attributes.formats.large.height}>
                    <img src={image.attributes.formats.thumbnail.url} alt={`Thumbnail for ${item.attributes.title}`} />
                </a>
            ))}
        </div>
    );
};

export default DesignGallery;
