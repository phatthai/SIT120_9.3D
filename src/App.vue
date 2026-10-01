<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeView from './components/HomeView.vue'
import ServicesView from './components/ServicesView.vue'
import ContactView from './components/ContactView.vue'
import ContactForm from './components/ContactForm.vue'

// The three pages planned in Task 1.1P. The header and the footer both
// build their links from this one list.
const pages = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Book a callout' }
]

// Which view is on screen. Every link in the app ends up calling goTo().
const currentView = ref('home')

function goTo(pageId) {
  currentView.value = pageId
  window.scrollTo(0, 0)   // a new page should open at its top, not halfway down
}

// Passed down to ContactForm as a prop, where v-for turns it into the dropdown.
const serviceSuburbs = [
  'Clyde North',
  'Cranbourne',
  'Cranbourne East',
  'Berwick',
  'Beaconsfield',
  'Officer',
  'Pakenham',
  'Narre Warren',
  'Narre Warren South',
  'Somewhere else nearby'
]

// The last booking ContactForm sent up. It lives here in the parent, so it
// stays on screen after the form clears its own fields.
const lastBooking = ref(null)

function handleSubmitForm(booking) {
  lastBooking.value = booking
}

// "2026-10-02" becomes "Friday 2 October 2026". en-GB is spelled out so the
// browser's own locale cannot flip the date to month first.
function formatDate(isoDate) {
  const date = new Date(isoDate + 'T00:00:00')
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <AppHeader :pages="pages" :current-view="currentView" @navigate="goTo" />

  <main>
    <HomeView v-if="currentView === 'home'" @navigate="goTo" />

    <ServicesView v-else-if="currentView === 'services'" @navigate="goTo" />

    <template v-else>
      <ContactView />

      <section class="section band">
        <div class="container">
          <!-- ContactForm sits here, not inside ContactView, because Vue events
               do not bubble. Only the direct parent hears submit-form, and the
               card below needs App.vue to be that parent. -->
          <ContactForm
            form-title="Booking request"
            :suburbs="serviceSuburbs"
            @submit-form="handleSubmitForm"
          />

          <article v-if="lastBooking" class="ack-card">
            <h3>Thanks, {{ lastBooking.name }}. Your booking request is in.</h3>
            <p>
              We will text a fixed quote and a two-hour arrival window to
              <strong>{{ lastBooking.mobile }}</strong>, and email a written copy to
              <strong>{{ lastBooking.email }}</strong>.
            </p>
            <ul>
              <li>
                <strong>Car</strong>
                <span>{{ lastBooking.car }}, rego {{ lastBooking.rego.toUpperCase() }}</span>
              </li>
              <li>
                <strong>Odometer</strong>
                <span>{{ lastBooking.odometer.toLocaleString('en-GB') }} km</span>
              </li>
              <li>
                <strong>Job</strong>
                <span>{{ lastBooking.job }}</span>
              </li>
              <li>
                <strong>Suburb</strong>
                <span>{{ lastBooking.suburb }}</span>
              </li>
              <li>
                <strong>Preferred date</strong>
                <span>{{ formatDate(lastBooking.preferred) }}</span>
              </li>
              <li>
                <strong>Parked</strong>
                <span>{{ lastBooking.parking }}</span>
              </li>
              <li>
                <strong>Locking wheel nut key</strong>
                <span>{{ lastBooking.wheelKey ? 'Yes' : 'Not confirmed' }}</span>
              </li>
              <li>
                <strong>Symptom</strong>
                <span>{{ lastBooking.symptom }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </template>
  </main>

  <AppFooter :pages="pages" @navigate="goTo" />
</template>
