import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@components/layout/MainLayout';
import { LoadingSpinner } from '@components/common/LoadingSpinner';

// Lazy loading dla stron - poprawne importy
const Home = lazy(() => import('@pages/Home/Home'));
const About = lazy(() => import('@pages/About/About'));
const Projects = lazy(() => import('@pages/Projects/Projects'));
const Contact = lazy(() => import('@pages/Contact/Contact'));

export const AppRouter = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};