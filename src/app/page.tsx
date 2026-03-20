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
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function LandingPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'bot' }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [cmsData, setCmsData] = useState({
    logo: "Tiyasa's Bakery Bites ",    categories: [
      "Cakes",      "Theme Cakes",      "Relationship Cakes",      "Desserts",      "Birthday Cakes",      "Anniversary Cakes"
    ],
    products: [
      { id: "chocolate", name: "Chocolate Cake", price: "₹500", image: "http://img.b2bpic.net/free-photo/homemade-cake-made-chocolate_23-2148173401.jpg", alt: "chocolate cake dark cocoa frosting" },
      { id: "butterscotch", name: "Butterscotch Cake", price: "₹450", image: "http://img.b2bpic.net/free-photo/delicious-floral-feast-still-life_23-2149509034.jpg", alt: "butterscotch cake caramel frosting" },
      { id: "red-velvet", name: "Red Velvet Cake", price: "₹700", image: "http://img.b2bpic.net/free-photo/slice-chocolate-cake-with-strawberries_114579-17117.jpg", alt: "red velvet cake cream cheese frosting" },
      { id: "brownies", name: "Brownies", price: "₹250", image: "http://img.b2bpic.net/free-photo/top-view-homemade-chocolate-cake-wooden-board-with-fork_114579-90788.jpg", alt: "fudgy brownies chocolate square dessert" },
      { id: "cupcakes", name: "Cupcakes", price: "₹300", image: "http://img.b2bpic.net/free-photo/cupcakes-with-glaze-assortment-high-angle_23-2149021991.jpg", alt: "cupcakes frosted colorful pastries" },
      { id: "cheesecake", name: "Cheesecake", price: "₹550", image: "http://img.b2bpic.net/free-photo/fresh-raspberry-cheesecake_114579-1587.jpg", alt: "creamy cheesecake berry topping" }
    ],
    reviews: [
      { id: "1", name: "Priya Sharma", date: "2 weeks ago", title: "Birthday Celebration", quote: "So pretty and tasty 😍 The cake was absolutely perfect for my daughter's birthday! Everyone loved it.", tag: "Birthday Cake", avatar: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg", alt: "happy customer portrait smiling woman" },
      { id: "2", name: "Rahul Verma", date: "1 month ago", title: "Anniversary Gift", quote: "Best cake ever! The chocolate ganache was rich and delicious. Highly recommended!", tag: "Chocolate Cake", avatar: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg", alt: "man portrait smiling happy customer" },
      { id: "3", name: "Anjali Desai", date: "3 weeks ago", title: "Wedding Celebration", quote: "Loved it 💖 The custom design was exactly what I imagined. Beautiful and delicious!", tag: "Custom Cake", avatar: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg", alt: "woman portrait happy customer smiling" },
      { id: "4", name: "Neha Gupta", date: "1 week ago", title: "Corporate Event", quote: "Fantastic quality and quick delivery! The cupcakes were fresh and perfectly decorated. Will order again!", tag: "Cupcakes", avatar: "http://img.b2bpic.net/free-photo/friendly-business-team-waving-office-stairway_1262-5054.jpg", alt: "couple portrait happy together" },
      { id: "5", name: "Arjun Singh", date: "2 days ago", title: "Personal Order", quote: "Amazing flavors and beautiful presentation. Every bite melts in your mouth. Pure bliss!", tag: "Premium Cake", avatar: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg", alt: "happy customer portrait smiling woman" },
      { id: "6", name: "Meera Patel", date: "5 days ago", title: "Special Occasion", quote: "The attention to detail is incredible. Each layer was perfectly baked and flavored. Highly satisfied!", tag: "Layered Cake", avatar: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg", alt: "man portrait smiling happy customer" }
    ]
  });

  const handleChatToggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { id: Date.now().toString(), text: inputValue, sender: 'user' as const };
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for your message! Our team will get back to you soon. 🎂",          sender: 'bot' as const
        };
        setMessages(prev => [...prev, botResponse]);
      }, 500);
    }
  };

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
          navItems={cmsData.categories.map((cat, idx) => ({
            name: cat,
            id: cat.toLowerCase().replace(/\s+/g, "-")
          }))}
          brandName={cmsData.logo}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title={cmsData.logo}
          description="Baked with Love & Sweetness"
          buttons={[
            { text: "Order Your Cake Today", href: "#products" },
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
          products={cmsData.products.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            imageSrc: p.image,
            imageAlt: p.alt
          }))}
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
          testimonials={cmsData.reviews.map(r => ({
            id: r.id,
            name: r.name,
            date: r.date,
            title: r.title,
            quote: r.quote,
            tag: r.tag,
            avatarSrc: r.avatar,
            avatarAlt: r.alt
          }))}
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
          logoText={cmsData.logo}
          leftLink={{ text: "Made with love 💗", href: "#" }}
          rightLink={{ text: "Privacy Policy", href: "#" }}
        />
      </div>

      <div
        className="fixed bottom-6 right-6 z-50"
        style={{
          animation: "fadeIn 0.3s ease-in-out"
        }}
      >
        {!chatOpen && (
          <button
            onClick={handleChatToggle}
            className="w-14 h-14 rounded-full bg-primary-cta text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Open chat widget"
          >
            <MessageCircle size={24} />
          </button>
        )}

        {chatOpen && (
          <div className="w-80 h-96 bg-card border border-accent rounded-lg shadow-2xl flex flex-col overflow-hidden">
            <div className="bg-primary-cta text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Sweet Bliss Support</h3>
              <button
                onClick={handleChatToggle}
                className="hover:bg-primary-cta/80 transition-colors p-1 rounded"
                aria-label="Close chat widget"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 ? (
                <div className="text-foreground/60 text-sm text-center mt-4">
                  <p>Hi! How can we help you today? 🎂</p>
                </div>
              ) : (
                messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-primary-cta text-white'
                          : 'bg-background-accent text-foreground'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-accent p-3 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type message..."
                className="flex-1 px-3 py-2 rounded bg-background border border-accent/50 text-foreground text-sm focus:outline-none focus:border-accent"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-primary-cta text-white rounded hover:bg-primary-cta/90 transition-colors text-sm font-medium"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </ThemeProvider>
  );
}