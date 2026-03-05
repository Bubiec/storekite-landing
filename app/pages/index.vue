<template>
  <div>
    <NavBar />
    <AnnouncementBar />
    <HeroSection />
    <ProblemSection />
    <ServicesSection />
    <TimelineSection />
    <ROICalculator />
    <CaseStudySection />
    <PricingSection />
    <TestimonialSection />
    <FAQSection />
    <CTASection />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:image', content: t('meta.ogImage') },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('meta.title') },
    { name: 'twitter:description', content: t('meta.description') },
  ],
})
</script>
