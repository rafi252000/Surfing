import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://image-tc.galaxy.tf/wijpeg-8yyb89qrfrqk1fvnfmn9i6pqt/azalai-grand-hotel-pool_standard.jpg?crop=102%2C0%2C1717%2C1288",
    title: "azalai grand hotel pool standard",
    category: "pool",
  },
  {
    id: 2,
    src: "https://www.hoteldekho.com/assets/images/bg4.jpg",
    title: "No signal - no transmission",
    category: "Hotel",
  },
  {
    id: 3,
    src: "https://www.annabelle.com.cy/Resources/PageBanners/ANNABELLE/homepage-banner-1920x1244.jpg",
    title: "Retro Closures",
    category: "Annabelle",
  },
  {
    id: 4,
    src: "https://file.videopolis.com/F/1/0e58f426-6927-4e39-9812-9be6df3fe331/101866.13348.cape-town.pepperclub-hotel.premium-overview-hMrhS2h0-57708-1280x720.jpeg",
    title: "Vinyl Loveless Happiness",
    category: "Vinyl Record",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
