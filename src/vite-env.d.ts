interface ImportMetaEnv {
    readonly VITE_GA_MEASUREMENT_ID: string
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_ID_ME: string
    readonly VITE_EMAILJS_TEMPLATE_ID_USER: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}