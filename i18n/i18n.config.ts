/**
 * vue-i18n runtime config.
 *
 * fallbackLocale is essential here: the locale JSON files are translated
 * incrementally, and any key that is not translated yet must render the
 * English string instead of an empty element. Add a translation to any
 * locale file and it overrides this automatically.
 */
export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'en',
    // Missing keys are expected while translations are in progress; quiet the
    // console so the build log stays readable.
    missingWarn: false,
    fallbackWarn: false
}))
