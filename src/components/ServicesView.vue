<script setup>
// The "Book a callout" link at the bottom leads to another view,
// so this page reports it to App.vue.
const emit = defineEmits(['navigate'])
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="kicker">Services</p>
      <h1>What we can do at the kerb</h1>
      <p class="lead">
        Almost everything a small workshop does, minus the hoist. Prices are
        further down the page.
      </p>

      <div class="cards">
        <article class="card card-plain">
          <div class="card-text">
            <h3>Logbook service</h3>
            <p>
              Oil, oil filter, air filter, cabin filter, fluid top-ups and a
              forty-point check. Book stamped before we leave.
            </p>
          </div>
        </article>

        <article class="card card-plain">
          <div class="card-text">
            <h3>Brakes</h3>
            <p>
              Pad and rotor replacement, front or rear. We machine rotors off
              site and return the same week if they are worth saving.
            </p>
          </div>
        </article>

        <article class="card card-plain">
          <div class="card-text">
            <h3>Batteries and charging</h3>
            <p>
              Testing, replacement and alternator diagnosis. The six most common
              battery sizes ride in the van.
            </p>
          </div>
        </article>

        <article class="card card-plain">
          <div class="card-text">
            <h3>Cooling system</h3>
            <p>
              Coolant flush, thermostat, hoses and radiator cap. Overheating is
              our most common summer callout.
            </p>
          </div>
        </article>

        <article class="card card-plain">
          <div class="card-text">
            <h3>Diagnostics</h3>
            <p>
              Engine light scan with a written explanation of each fault code,
              not just the code number.
            </p>
          </div>
        </article>

        <article class="card card-plain">
          <div class="card-text">
            <h3>Pre-purchase inspection</h3>
            <p>
              We meet you at the seller, inspect the car, and send a written
              report with photos the same afternoon.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="prices" class="section band">
    <div class="container">
      <h2>Prices and time on site</h2>
      <p class="section-intro">
        Every price includes the callout inside the service area. Anything past
        Pakenham adds $40.
      </p>

      <div class="table-wrapper" tabindex="0" role="region" aria-label="Callout prices, scrollable">
        <table>
          <caption>Callout prices, updated March 2026</caption>
          <thead>
            <tr>
              <th scope="col">Job</th>
              <th scope="col">Time on site</th>
              <th scope="col">Small car</th>
              <th scope="col">4WD or ute</th>
              <th scope="col">Parts included</th>
              <th scope="col">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Logbook service</th>
              <td>60 to 90 min</td>
              <td>$220</td>
              <td>$290</td>
              <td>Oil and filters</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Battery replacement</th>
              <td>30 min</td>
              <td>$180</td>
              <td>$210</td>
              <td>Battery</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Front brake pads</th>
              <td>90 min</td>
              <td>$310</td>
              <td>$380</td>
              <td>Pads and fitting</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Coolant flush</th>
              <td>45 min</td>
              <td>$160</td>
              <td>$190</td>
              <td>Coolant</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Diagnostic scan</th>
              <td>30 to 60 min</td>
              <td>$120</td>
              <td>$120</td>
              <td>Written report</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Pre-purchase inspection</th>
              <td>60 min</td>
              <td>$180</td>
              <td>$210</td>
              <td>Written report</td>
              <td>Yes, plus $40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="table-note">
        On a phone, slide the table sideways to reach the Saturday column.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>What we cannot do on site</h2>
      <p>
        Anything that needs the car in the air for a long stretch. Clutch
        replacement, timing belts on transverse engines, gearbox work and wheel
        alignment all belong in a workshop.
      </p>
      <p>
        If we open a job and find it belongs on a hoist, we stop, charge the
        callout only, and give you two local shops we would use ourselves.
      </p>
      <p>
        <a class="text-link" href="#contact" @click.prevent="emit('navigate', 'contact')">Book a callout</a>
      </p>
    </div>
  </section>
</template>
