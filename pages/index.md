---
layout: index-site.njk
title: Welcome
description: 
siteHome: true
body:
  classes:
    - "index-site"
image:
  path: "static/images/ps-ijb-001.jpg"
  alt: "Imogen Baker"
services:
  classes:
    contentGrid:
      - content-grid-columns-2
      - content-canvas-item-wide
    itemGrid:
      - content-grid-rows-3
      - content-grid--gap-small
      - content-grid-item
      - content-grid-item--card
---

Imogen Baker is a fully qualified and insured Veterinary Physiotherapist. Imogen works with a multidisciplinary team of vets and other paraprofessionals to achieve the best outcome for your animal.

---

## Why physiotherapy for your animal?

Treatments are tailored specifically to the individual animal, utilizing a range of manual therapies, electrotherapies and prescription exercises.

- Chronic pain and arthritis management
- Prevent Injury or secondary compensations
- Maintain joint mobility
- Increase blood flow
- Improving neurological conditions, proprioception and coordination
- Aid surgical recovery
- Improve performance and strength
- Weight management and fitness
- General health and well-being

---

## Services{.h1-style .content-canvas-item-wide}

{% ContentGrid services.classes.contentGrid %}
{% for item in collections.services %}
  {% ContentGrid services.classes.itemGrid %}
{% Markdown %}
### {{ item.data.title }}{.centered .h2-style}

{{ item.data.description }}

[More About {{ item.data.title }}]({{ item.url }}){.button}
{.centered}
{% endMarkdown %}
  {% endContentGrid %}
{% endfor %}
{% endContentGrid %}
