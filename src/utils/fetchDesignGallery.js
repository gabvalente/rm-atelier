const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:1337';

function optimizeCloudinaryUrl(url, maxWidth = 300, quality = 'auto:eco', format = 'auto') {
    // Optimizing for performance with aggressive quality compression
    return url.replace('/upload/', `/upload/w_${maxWidth},c_limit,f_${format},q_${quality}/`);
}

export async function fetchDesignGallery() {
    const response = await fetch(`${API_BASE_URL}/api/design-items?populate=*`);
    if (!response.ok) {
        console.error('Failed to fetch design gallery:', response.statusText);
        return [];
    }
    const data = await response.json();
    const galleryItems = data.data || [];
    console.log('Fetched design gallery:', galleryItems.length, 'items')
    console.log('First item:', galleryItems[0]);

    // Optimize image URLs for each item
    return galleryItems.map(item => {
        const optimizedImages = Array.isArray(item.attributes.images?.data) ? item.attributes.images.data.map(image => {
            if (image.attributes.formats.large) {
                image.attributes.formats.large.url = optimizeCloudinaryUrl(image.attributes.formats.large.url);
                image.attributes.width = image.attributes.formats.large.width;
                image.attributes.height = image.attributes.formats.large.height;
            }
            if (image.attributes.formats.thumbnail) {
                image.attributes.formats.thumbnail.url = optimizeCloudinaryUrl(image.attributes.formats.thumbnail.url);
            }
            return image;
        }) : [];

        return {...item, images: {data: optimizedImages}};
    });
}





