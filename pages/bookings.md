---
layout: index.njk
title: Bookings & Prices
description: Please contact Imogen to discuss your pets' individual needs, prices may vary.
jumbotron: |
  Please contact Imogen to discuss your pet's individual needs, prices may vary.
eleventyNavigation:
  key: Bookings
  title: Bookings & Prices
  order: 30
classes:
    contentGrid:
      - content-grid-columns-2
      - content-canvas-item-wide
      - margin-block
prices:
  - 
    type: equine-physio
    title: Equine Physio
    items:
      - 
        label: Equine initial physiotherapy appointment
        price: £65
      -
        label: Equine follow-up appointment
        price: £60
      -
        label: Please enquire for bundle prices (groups of 3 or more)
        price:
      -
        label: Book a physiotherapy appointment and one-hour riding lesson together
        price: £95  
  - 
    type: canine-physio
    title: Canine Physio
    items:
      -
        label: Canine initial physiotherapy appointment
        price: £55
      -
        label: Canine follow-up appointment
        price: £50
      -
        label: Please enquire for bundle prices (groups of 3 or more)
        price:
  - 
    type: other-physio
    title: Other Animals Physio
    items:
      - 
        label: Other animal initial physiotherapy appointment
        price: £55
      -
        label: Other animal follow up appointment
        price: £50
  - 
    type: equine-coaching
    title: Coaching
    items:
      -
        label: One hour riding lesson
        price: £40 
      -
        label: Half an hour riding lesson
        price: £25

---

Booking, prices, and cancellations policy detailed below.

## Prices

{% ContentGrid classes.contentGrid %}
  {% for item in prices %}
<div class="content-grid-item content-grid-item--card prices-grid-item">
  {% Markdown %}
### {{ item.title }}{.centered .margin-block-end}

  <div class="price-list">
    <dl>{% for price in item.items %}
      <dt>{{ price.label }}</dt>
      <dd>{{ price.price }}</dd>{% endfor %}
    </dl>
  </div>

[Enquire](/contact/?type={{ item.type }}){.button}
{.centered}
  {% endMarkdown %}
</div>
  {% endfor %}
{% endContentGrid %}

## Veterinary consent

For any animal requiring musculoskeletal treatment for any disease, illnesses, or pathology it is a legal requirement under the *Veterinary Surgeons Act (1966)* for Imogen Baker Veterinary Physiotherapy to gain veterinary consent. This ensures that your animal is suitable to receive and be assessed for Physiotherapy.

Veterinary consent will be discussed with you during your consultation, as required.

## Bookings and Client Information

Imogen Baker uses Equigate to manage bookings, invoices, consent forms, clinical reports and written lesson breakdowns.

To book an appointment or lesson, please [get in touch with Imogen](/contact/) and she will send you the relevant Equigate link to complete your booking and any required forms.

[Make a booking](/contact/){.button}
{.centered}
