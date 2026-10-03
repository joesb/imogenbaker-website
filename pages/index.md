---
layout: index-site.njk
title: Welcome
description: Imogen Baker is a fully qualified and insured Veterinary Physiotherapist, as well as a BHS Stage 3 Accredited Professional Coach (APC).
siteHome: true
body:
  classes:
    - "index-site"
image:
  path: "/static/images/ps-ijb-001.jpg"
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

Imogen Baker is a fully qualified and insured Veterinary Physiotherapist, as well as a BHS Stage 3 Accredited Professional Coach (APC).{.jumbotron}

**With a passion for animal wellbeing, she combines science-led manual therapies, tailored exercise plans, and advanced electrotherapies to deliver exceptional care.**
{.large .content-canvas-item-left}

![Imogen Baker equine physiotherapist](/static/images/ijb-physio-equine-00.jpg){.image-rounded}
{.content-canvas-item-wide-right .content-canvas-item-right--span-2 .content-canvas-span-start-content-top}

Her coaching approach is rooted in veterinary physiotherapy, blending scientific expertise with a deep understanding of both horse and rider to strengthen their partnership.{.large  .content-canvas-item-left}

Her aim is to help your animals move better, feel better and perform better.

Whether it’s addressing performance-related challenges in your horse, supporting your dog’s recovery after surgery, or providing gentle pain relief for your senior companion, Imogen’s expertise ensures your animal receives the highest standard of care.

---

## Why Physiotherapy?

Veterinary physiotherapy is an important part of your animal's health plan to improve their performance, to recovery from surgery, and for general pain management. Veterinary physiotherapy can also play a key role in preventing injury and managing pain by improving strength and fitness.

![Imogen Baker canine physiotherapist](/static/images/ijb-physio-canine-00.jpg){.image-rounded}
{.content-canvas-item-wide-right .content-canvas-item-right--span-3}

Imogen ensures treatments are tailored specifically to the individual animal, using a range of approaches including manual therapies, electrotherapies and prescription exercises.

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

[More about {{ item.data.title }}]({{ item.url | log }}){.button}
{.centered}
{% endMarkdown %}
  {% endContentGrid %}
{% endfor %}
{% endContentGrid %}
