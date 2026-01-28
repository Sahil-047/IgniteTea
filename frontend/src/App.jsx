import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

// Shop pages
import AllProducts from './pages/shop/AllProducts'
import NewArrivals from './pages/shop/NewArrivals'
import BestSellers from './pages/shop/BestSellers'

// Teaware pages
import Teapots from './pages/teaware/Teapots'
import CupsMugs from './pages/teaware/CupsMugs'
import Accessories from './pages/teaware/Accessories'

// Gifts pages
import GiftSets from './pages/gifts/GiftSets'
import GiftCards from './pages/gifts/GiftCards'
import CustomGifts from './pages/gifts/CustomGifts'

// Subscription pages
import Subscription from './pages/subscription/Subscription'

// Encyclopedia pages
import TeaTypes from './pages/encyclopedia/TeaTypes'
import BrewingGuide from './pages/encyclopedia/BrewingGuide'
import History from './pages/encyclopedia/History'

// Other pages
import VisitUs from './pages/VisitUs'

// Auth pages
import LoginPage from './pages/auth/LoginPage'
import AccountPage from './pages/auth/AccountPage'

// Account pages
import OrdersPage from './pages/account/OrdersPage'
import WishlistPage from './pages/account/WishlistPage'
import AddressesPage from './pages/account/AddressesPage'
import SettingsPage from './pages/account/SettingsPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Shop routes */}
        <Route path="/shop/all" element={<Layout><AllProducts /></Layout>} />
        <Route path="/shop/new-arrivals" element={<Layout><NewArrivals /></Layout>} />
        <Route path="/shop/best-sellers" element={<Layout><BestSellers /></Layout>} />

        {/* Teaware routes */}
        <Route path="/teaware/teapots" element={<Layout><Teapots /></Layout>} />
        <Route path="/teaware/cups-mugs" element={<Layout><CupsMugs /></Layout>} />
        <Route path="/teaware/accessories" element={<Layout><Accessories /></Layout>} />

        {/* Gifts routes */}
        <Route path="/gifts/sets" element={<Layout><GiftSets /></Layout>} />
        <Route path="/gifts/cards" element={<Layout><GiftCards /></Layout>} />
        <Route path="/gifts/custom" element={<Layout><CustomGifts /></Layout>} />

        {/* Subscription routes */}
        <Route path="/subscription" element={<Layout><Subscription /></Layout>} />

        {/* Encyclopedia routes */}
        <Route path="/encyclopedia/tea-types" element={<Layout><TeaTypes /></Layout>} />
        <Route path="/encyclopedia/brewing-guide" element={<Layout><BrewingGuide /></Layout>} />
        <Route path="/encyclopedia/history" element={<Layout><History /></Layout>} />

        {/* Other routes */}
        <Route path="/visit" element={<Layout><VisitUs /></Layout>} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        
        {/* Account section routes */}
        <Route path="/account/orders" element={<OrdersPage />} />
        <Route path="/account/wishlist" element={<WishlistPage />} />
        <Route path="/account/addresses" element={<AddressesPage />} />
        <Route path="/account/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  )
}

export default App
