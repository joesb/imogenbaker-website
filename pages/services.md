---
layout: index.njk
title: Services
eleventyNavigation:
  key: Services
  title: Services
  order: 20
permalink: /services/
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

Imogen Baker offers a holistic, animal-centred approach to physiotherapy that improves movement, strength, posture, performance, pain management and general wellbeing. 

Imogen's training in veterinary physiotherapy complements her coaching with a thorough, bio-mechanical approach, and thorough-going knowledge of the field to ensure rider skills and confidence, and improvement in the horses' way of going. 

---{.margin-block-lg}

{% ContentGrid services.classes.contentGrid %}
{% for item in collections.services %}
  {% ContentGrid services.classes.itemGrid %}
{% Markdown %}
### {{ item.data.title }}{.centered .h2-style}

{{ item.data.description }}

[More about {{ item.data.title }}]({{ item.url }}){.button}
{.centered}
{% endMarkdown %}
  {% endContentGrid %}
{% endfor %}
{% endContentGrid %}
