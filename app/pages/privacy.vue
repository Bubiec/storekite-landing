<template>
  <div>
    <NavBar />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-2">{{ $t('privacy.title') }}</h1>
      <p class="text-sm text-muted mb-12">{{ $t('privacy.lastUpdated') }}</p>
      <div class="prose prose-invert prose-sm max-w-none space-y-6 text-muted-light leading-relaxed">
        <h2 class="text-xl font-bold text-white">1. Data Controller</h2>
        <p>StoreKite, operated by Szymon Bubala. Contact: hello@storekite.ai</p>

        <h2 class="text-xl font-bold text-white">2. Data We Collect</h2>
        <p>We collect data you provide directly (name, email, company details via contact forms or Cal.com bookings) and automatically collected data (IP address, browser type, pages visited via analytics).</p>

        <h2 class="text-xl font-bold text-white">3. Purpose of Processing</h2>
        <p>Your data is processed to: respond to inquiries, schedule and conduct discovery calls, provide our services, improve our website, and comply with legal obligations.</p>

        <h2 class="text-xl font-bold text-white">4. Legal Basis</h2>
        <p>We process data based on: your consent (Art. 6(1)(a) GDPR), performance of a contract (Art. 6(1)(b)), and legitimate interests (Art. 6(1)(f)).</p>

        <h2 class="text-xl font-bold text-white">5. Data Sharing</h2>
        <p>We may share data with: Cal.com (scheduling), Vercel (hosting), Google Analytics (analytics with consent). We do not sell personal data.</p>

        <h2 class="text-xl font-bold text-white">6. Data Retention</h2>
        <p>We retain personal data for as long as necessary to provide services or as required by law. You may request deletion at any time.</p>

        <h2 class="text-xl font-bold text-white">7. Your Rights</h2>
        <p>Under GDPR, you have the right to: access, rectify, erase, restrict processing, data portability, and object to processing. Contact us at hello@storekite.ai to exercise your rights.</p>

        <h2 class="text-xl font-bold text-white">8. Cookies</h2>
        <p>We use essential cookies for website functionality and analytics cookies (with consent) to understand usage patterns. You can manage cookie preferences at any time.</p>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: `${t('privacy.title')} — StoreKite` })

definePageMeta({ alias: ['/pl/prywatnosc'] })
</script>
