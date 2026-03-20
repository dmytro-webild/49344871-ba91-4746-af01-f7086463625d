"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Cakes", id: "cakes" },
            { name: "Theme Cakes", id: "theme-cakes" },
            { name: "Relationship Cakes", id: "relationship-cakes" },
            { name: "Desserts", id: "desserts" },
            { name: "Birthday Cakes", id: "birthday-cakes" },
            { name: "Anniversary Cakes", id: "anniversary-cakes" }
          ]}
          brandName="Sweet Bliss Bakery"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Sweet Bliss Bakery"
          description="Baked with Love & Sweetness"
          buttons={[
            { text: "Order Now", href: "#products" },
            { text: "View Menu", href: "#gallery" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-cherry-pie-plate-with-white-roses-circle_141793-14280.jpg"
          imageAlt="Beautiful decorated cake pink frosting"
          showDimOverlay={true}
          showBlur={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          title="Our Services"
          description="Choose how you want to enjoy our delicious creations"
          features={[
            {
              id: "delivery",              title: "🚚 Online Delivery",              tags: ["Fast & Reliable", "Order Anytime"],
              imageSrc: "http://img.b2bpic.net/free-photo/tasty-traditional-dessert-composition_23-2149143331.jpg",              imageAlt: "colorful cupcakes pastel frosting"
            },
            {
              id: "pickup",              title: "🛍️ Pickup Available",              tags: ["Fresh & Ready", "Convenient"],
              imageSrc: "http://img.b2bpic.net/free-photo/bride-groom-cutting-wedding-cake_1268-15305.jpg",              imageAlt: "modern cake minimalist design"
            },
            {
              id: "custom",              title: "👀 Custom Cake Preview",              tags: ["Personalized", "Your Design"],
              imageSrc: "http://img.b2bpic.net/free-photo/delicious-chocolate-cake_23-2148858428.jpg",              imageAlt: "romantic cake date night dessert"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Services"
        />
      </div>

      <div id="trust" data-section="trust">
        <MetricCardSeven
          title="Why Trust Our Bakery"
          description="Quality, care, and passion in every bite"
          metrics={[
            {
              id: "fresh",              value: "🍰",              title: "Baked Fresh Daily",              items: ["Morning batches", "Premium ingredients"]
            },
            {
              id: "homemade",              value: "🏡",              title: "Homemade Items",              items: ["Traditional recipes", "Artisan quality"]
            },
            {
              id: "quality",              value: "⭐",              title: "High Quality Ingredients",              items: ["Best sourced", "No preservatives"]
            },
            {
              id: "trusted",              value: "💖",              title: "Trusted Brand",              items: ["Customer favorite", "Consistent excellence"]
            },
            {
              id: "orders",              value: "📦",              title: "1000+ Orders Completed",              items: ["Happy customers", "Five star service"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Browse our delicious selection of cakes, desserts, and treats"
          products={[
            {
              id: "chocolate",              name: "Chocolate Cake",              price: "₹500",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-cake-made-chocolate_23-2148173401.jpg",              imageAlt: "chocolate cake dark cocoa frosting"
            },
            {
              id: "butterscotch",              name: "Butterscotch Cake",              price: "₹450",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-floral-feast-still-life_23-2149509034.jpg",              imageAlt: "butterscotch cake caramel frosting"
            },
            {
              id: "red-velvet",              name: "Red Velvet Cake",              price: "₹700",              imageSrc: "http://img.b2bpic.net/free-photo/slice-chocolate-cake-with-strawberries_114579-17117.jpg",              imageAlt: "red velvet cake cream cheese frosting"
            },
            {
              id: "brownies",              name: "Brownies",              price: "₹250",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-homemade-chocolate-cake-wooden-board-with-fork_114579-90788.jpg",              imageAlt: "fudgy brownies chocolate square dessert"
            },
            {
              id: "cupcakes",              name: "Cupcakes",              price: "₹300",              imageSrc: "http://img.b2bpic.net/free-photo/cupcakes-with-glaze-assortment-high-angle_23-2149021991.jpg",              imageAlt: "cupcakes frosted colorful pastries"
            },
            {
              id: "cheesecake",              name: "Cheesecake",              price: "₹550",              imageSrc: "http://img.b2bpic.net/free-photo/fresh-raspberry-cheesecake_114579-1587.jpg",              imageAlt: "creamy cheesecake berry topping"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Menu"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <BlogCardThree
          title="Gallery"
          description="Visual feast of our sweet creations"
          blogs={[
            {
              id: "gallery-1",              category: "showcase",              title: "Beautiful Cake Designs",              excerpt: "Discover our stunning custom cake creations",              imageSrc: "http://img.b2bpic.net/free-vector/wedding-element-collection_23-2148044605.jpg",              imageAlt: "cake display bakery showcase window",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",              date: "Recent"
            },
            {
              id: "gallery-2",              category: "showcase",              title: "Cupcakes & Pastries",              excerpt: "Colorful and delicious mini treats",              imageSrc: "http://img.b2bpic.net/free-photo/wedding-decorations-reception_1328-2261.jpg",              imageAlt: "cupcakes arranged rainbow colors",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",              date: "Recent"
            },
            {
              id: "gallery-3",              category: "behind-scenes",              title: "Baking Process",              excerpt: "See how we craft our delicious cakes",              imageSrc: "http://img.b2bpic.net/free-photo/composition-different-foods-ingredients_23-2148869884.jpg",              imageAlt: "cake baking process kitchen scenes",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",              date: "Recent"
            },
            {
              id: "gallery-4",              category: "showcase",              title: "Premium Plating",              excerpt: "Elegant presentation of our finest desserts",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-elegant-cake-topper_23-2149232370.jpg",              imageAlt: "elegant cake photography styling",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/friendly-business-team-waving-office-stairway_1262-5054.jpg",              date: "Recent"
            },
            {
              id: "gallery-5",              category: "showcase",              title: "Store Front",              excerpt: "Visit our charming bakery location",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-enjoying-coffee_23-2148263231.jpg",              imageAlt: "bakery storefront exterior charming",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",              date: "Recent"
            },
            {
              id: "gallery-6",              category: "showcase",              title: "Sweet Variety",              excerpt: "Taste our complete selection of treats",              imageSrc: "http://img.b2bpic.net/free-psd/flat-design-sweet-food-template_23-2149885120.jpg",              imageAlt: "cake tasting selection variety",              authorName: "Sweet Bliss Team",              authorAvatar: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",              date: "Recent"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Inspiration"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Customer Reviews"
          description="What our happy customers say about us"
          testimonials={[
            {
              id: "1",              name: "Priya Sharma",              date: "2 weeks ago",              title: "Birthday Celebration",              quote: "So pretty and tasty 😍 The cake was absolutely perfect for my daughter's birthday! Everyone loved it.",              tag: "Birthday Cake",              avatarSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",              avatarAlt: "happy customer portrait smiling woman"
            },
            {
              id: "2",              name: "Rahul Verma",              date: "1 month ago",              title: "Anniversary Gift",              quote: "Best cake ever! The chocolate ganache was rich and delicious. Highly recommended!",              tag: "Chocolate Cake",              avatarSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",              avatarAlt: "man portrait smiling happy customer"
            },
            {
              id: "3",              name: "Anjali Desai",              date: "3 weeks ago",              title: "Wedding Celebration",              quote: "Loved it 💖 The custom design was exactly what I imagined. Beautiful and delicious!",              tag: "Custom Cake",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",              avatarAlt: "woman portrait happy customer smiling"
            },
            {
              id: "4",              name: "Neha Gupta",              date: "1 week ago",              title: "Corporate Event",              quote: "Fantastic quality and quick delivery! The cupcakes were fresh and perfectly decorated. Will order again!",              tag: "Cupcakes",              avatarSrc: "http://img.b2bpic.net/free-photo/friendly-business-team-waving-office-stairway_1262-5054.jpg",              avatarAlt: "couple portrait happy together"
            },
            {
              id: "5",              name: "Arjun Singh",              date: "2 days ago",              title: "Personal Order",              quote: "Amazing flavors and beautiful presentation. Every bite melts in your mouth. Pure bliss!",              tag: "Premium Cake",              avatarSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",              avatarAlt: "happy customer portrait smiling woman"
            },
            {
              id: "6",              name: "Meera Patel",              date: "5 days ago",              title: "Special Occasion",              quote: "The attention to detail is incredible. Each layer was perfectly baked and flavored. Highly satisfied!",              tag: "Layered Cake",              avatarSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",              avatarAlt: "man portrait smiling happy customer"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Reviews"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          title="Ready to Order?"
          description="Contact us today to place your order or customize your perfect cake. We're here to make your special moment even sweeter!"
          buttons={[
            { text: "Call Us", href: "tel:+91-9876543210" },
            { text: "WhatsApp", href: "https://wa.me/919876543210" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Sweet Bliss Bakery"
          leftLink={{ text: "Made with love 💗", href: "#" }}
          rightLink={{ text: "Privacy Policy", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
