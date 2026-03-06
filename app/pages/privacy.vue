<template>
  <div>
    <NavBar />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-2">{{ $t('privacy.title') }}</h1>
      <p class="text-sm text-muted mb-12">{{ $t('privacy.lastUpdated') }}</p>

      <div class="prose prose-invert prose-sm max-w-none space-y-8 text-muted-light leading-relaxed">

        <p class="text-base">{{ $t('privacy.intro') }}</p>

        <!-- Section 1: Data Controller -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s1_title') }}</h2>
          <p>{{ $t('privacy.s1_body') }}</p>
        </section>

        <!-- Section 2: What Data We Collect -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s2_title') }}</h2>
          <p>{{ $t('privacy.s2_p1') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s2_direct_title') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s2_li0') }}</li>
            <li>{{ $t('privacy.s2_li1') }}</li>
            <li>{{ $t('privacy.s2_li2') }}</li>
          </ul>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s2_auto_title') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s2_auto_li0') }}</li>
            <li>{{ $t('privacy.s2_auto_li1') }}</li>
            <li>{{ $t('privacy.s2_auto_li2') }}</li>
          </ul>
          <p class="mt-2 text-sm opacity-80">{{ $t('privacy.s2_auto_note') }}</p>
        </section>

        <!-- Section 3: Legal Basis -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s3_title') }}</h2>
          <p>{{ $t('privacy.s3_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s3_li0') }}</li>
            <li>{{ $t('privacy.s3_li1') }}</li>
            <li>{{ $t('privacy.s3_li2') }}</li>
            <li>{{ $t('privacy.s3_li3') }}</li>
          </ul>
        </section>

        <!-- Section 4: Purposes -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s4_title') }}</h2>
          <p>{{ $t('privacy.s4_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s4_li0') }}</li>
            <li>{{ $t('privacy.s4_li1') }}</li>
            <li>{{ $t('privacy.s4_li2') }}</li>
            <li>{{ $t('privacy.s4_li3') }}</li>
            <li>{{ $t('privacy.s4_li4') }}</li>
            <li>{{ $t('privacy.s4_li5') }}</li>
          </ul>
        </section>

        <!-- Section 5: Cookies & Analytics -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s5_title') }}</h2>
          <p>{{ $t('privacy.s5_intro') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s5_essential_title') }}</p>
          <p>{{ $t('privacy.s5_essential_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s5_ga_title') }}</p>
          <p>{{ $t('privacy.s5_ga_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s5_vercel_title') }}</p>
          <p>{{ $t('privacy.s5_vercel_body') }}</p>

          <p class="mt-3">{{ $t('privacy.s5_manage') }}</p>
        </section>

        <!-- Section 6: Third-Party Services -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s6_title') }}</h2>
          <p>{{ $t('privacy.s6_intro') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s6_calcom_title') }}</p>
          <p>{{ $t('privacy.s6_calcom_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s6_google_title') }}</p>
          <p>{{ $t('privacy.s6_google_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('privacy.s6_vercel_title') }}</p>
          <p>{{ $t('privacy.s6_vercel_body') }}</p>
        </section>

        <!-- Section 7: Data Retention -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s7_title') }}</h2>
          <p>{{ $t('privacy.s7_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s7_li0') }}</li>
            <li>{{ $t('privacy.s7_li1') }}</li>
            <li>{{ $t('privacy.s7_li2') }}</li>
            <li>{{ $t('privacy.s7_li3') }}</li>
          </ul>
        </section>

        <!-- Section 8: Your Rights -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s8_title') }}</h2>
          <p>{{ $t('privacy.s8_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('privacy.s8_li0') }}</li>
            <li>{{ $t('privacy.s8_li1') }}</li>
            <li>{{ $t('privacy.s8_li2') }}</li>
            <li>{{ $t('privacy.s8_li3') }}</li>
            <li>{{ $t('privacy.s8_li4') }}</li>
            <li>{{ $t('privacy.s8_li5') }}</li>
            <li>{{ $t('privacy.s8_li6') }}</li>
          </ul>
          <p class="mt-3">{{ $t('privacy.s8_contact') }}</p>
          <p class="mt-2">{{ $t('privacy.s8_uodo') }}</p>
        </section>

        <!-- Section 9: International Transfers -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s9_title') }}</h2>
          <p>{{ $t('privacy.s9_body') }}</p>
        </section>

        <!-- Section 10: Changes -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s10_title') }}</h2>
          <p>{{ $t('privacy.s10_body') }}</p>
        </section>

        <!-- Section 11: Contact -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('privacy.s11_title') }}</h2>
          <p>{{ $t('privacy.s11_body') }}</p>
          <p class="mt-1">{{ $t('privacy.s11_email') }}</p>
          <p class="mt-1">{{ $t('privacy.s11_website') }}</p>
        </section>

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
