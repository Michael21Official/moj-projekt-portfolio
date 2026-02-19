import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        console.log('✅ Google Analytics initialized');
    } else {
        console.warn('⚠️ Google Analytics Measurement ID not found');
    }
};

export const trackPageView = (page: string) => {
    ReactGA.send({ hitType: 'pageview', page });
};

export const trackEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

// Specjalne eventy dla Twojego portfolio
export const trackContact = (method: 'email' | 'github' | 'linkedin' | 'form') => {
    trackEvent('Contact', method);
};

export const trackProjectView = (projectName: string) => {
    trackEvent('Project', 'view', projectName);
};

export const trackProjectClick = (projectName: string, type: 'code' | 'live' | 'about') => {
    trackEvent('Project', `click_${type}`, projectName);
};

export const trackSkillClick = (skillName: string) => {
    trackEvent('Skill', 'click', skillName);
};

export const trackLanguageClick = (language: string) => {
    trackEvent('Language', 'click', language);
};

export const trackSocialClick = (platform: 'github' | 'linkedin') => {
    trackEvent('Social', platform);
};