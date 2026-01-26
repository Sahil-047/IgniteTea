import { useEffect, useState } from "react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only enable scroll animation on desktop
        if (isMobile) {
            setIsVisible(true); // Always visible on mobile
            return;
        }

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Check if user is near bottom (within 200px)
            const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

            if (distanceFromBottom < 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <footer
            className={`bottom-0 left-0 right-0 w-full bg-white z-50 ${isMobile ? 'relative' : 'fixed'}`}
            style={!isMobile ? {
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transition: isVisible
                    ? 'transform 3s cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'transform 0.6s cubic-bezier(0.4, 0, 1, 1)',
            } : {}}>
            {/* Mobile Footer - Simple */}
            <div className="md:hidden px-4 py-6">
                <div className="text-center">
                    <h3
                        className="text-xl text-gray-700 mb-2"
                        style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
                        IgniteTea
                    </h3>
                    <p
                        className="text-xs text-gray-500 mb-4"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Crafting poetic tea experiences
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                        <p
                            className="text-xs text-gray-500"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                            © 2026 IgniteTea. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Footer - Full */}
            <div className="hidden md:block max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <h3
                            className="text-2xl text-gray-700"
                            style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 600 }}>
                            IgniteTea
                        </h3>
                        <p
                            className="mt-3 text-sm text-gray-500 max-w-xs"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                            Crafting poetic tea experiences with mindful sourcing and gentle
                            rituals.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-600">
                        <div>
                            <p
                                className="mb-3 text-gray-700"
                                style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                                Shop
                            </p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Tea</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Teaware</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Gifts</p>
                        </div>
                        <div>
                            <p
                                className="mb-3 text-gray-700"
                                style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                                Learn
                            </p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Encyclopedia</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Brewing</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Story</p>
                        </div>
                        <div>
                            <p
                                className="mb-3 text-gray-700"
                                style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                                Support
                            </p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Contact</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Shipping</p>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif" }}>Returns</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p
                        className="text-xs text-gray-500"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        © 2026 IgniteTea. All rights reserved.
                    </p>
                    <p
                        className="text-xs text-gray-500"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Crafted in India • Serve with intention
                    </p>
                </div>
            </div>
        </footer>
    );
}
