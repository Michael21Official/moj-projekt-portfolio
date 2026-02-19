import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '@components/layout/MainLayout';
import { LoadingSpinner } from '@components/common/LoadingSpinner';
import { trackPageView } from '../analytics/ga4';

// Lazy loading dla stron
const Home = lazy(() => import('@pages/Home/Home'));
const About = lazy(() => import('@pages/About/About'));
const Projects = lazy(() => import('@pages/Projects/Projects'));
const Contact = lazy(() => import('@pages/Contact/Contact'));

// Komponent do śledzenia zmian stron
const PageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        trackPageView(location.pathname);
    }, [location]);

    return null;
};

export const AppRouter = () => {
    return (
        <HashRouter>
            <PageTracker />
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    );
};