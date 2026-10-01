<!--
  The booking form is deliberately not in this file. App.vue renders
  ContactForm straight after this view, so App.vue is the form's direct
  parent and hears its submit-form event. See the note in App.vue.
-->
<template>
  <section class="section">
    <div class="container">
      <p class="kicker">Bookings</p>
      <h1>Tell us what the car is doing</h1>
      <p class="lead">
        Broken down right now? Ring
        <a class="phone-inline" href="tel:0412887340">0412 887 340</a>
        instead of filling this in. For everything else, the form below is faster.
      </p>

      <div class="split contact-info">
        <div class="split-text">
          <h2>Where we go</h2>
          <p>
            Clyde North, Cranbourne, Cranbourne East, Berwick, Beaconsfield,
            Officer, Pakenham, Narre Warren and Narre Warren South.
          </p>
          <p>
            Outside that ring we still come, with a $40 travel charge added to
            the quote before you agree to anything.
          </p>
        </div>

        <div class="split-text">
          <h2>When we work</h2>
          <ul class="hours">
            <li><span class="day">Monday to Friday</span> 7am to 6pm</li>
            <li><span class="day">Saturday</span> 8am to 2pm</li>
            <li><span class="day">Sunday</span> Emergency callouts only</li>
          </ul>
          <p>After hours, leave a message. We call back before 7am the next working day.</p>
        </div>
      </div>
    </div>
  </section>
</template>
