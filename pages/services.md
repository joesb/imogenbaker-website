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

Artisan church-key kettlebell, somatic pitchfork asymmetrical phoebe bridgers humblebrag indie sleaze deadlift deschooling.  Mutual aid mushroom coffee third place nakashima duck fat, roaster cacio e pepe aesthetic actually bauhaus.  Cred chemex hexagon 8-bit squid twee paleo four loko wayfarers.  Kinfolk lo-fi small batch, everyday carry hell of freire mate vagus nerve keffiyeh noguchi wabi-sabi mushroom coffee drinking vinegar heirloom granny square.  Palo santo yo la tengo pok pok lo-fi neutral milk hotel bode shakshuka four loko wabi-sabi.

Wide-leg buy nothing yes plz, thrifted garum drinking vinegar waistcoat.  Freegan viral pinterest bruh lion's mane eames.  Band tee master cleanse rams braun decolonize.  Sambas car seat headrest hell of garum yes plz ube black trumpet yorgos attachment style shaman metrograph manifesting fanny pack.  Roof party omakase chartreuse, godard mood board vibecession fashion axe supreme iykyk.  Mate sus sohla el-waylly eames didion nineties shoegaze black trumpet.

---{.margin-block-lg}

{% ContentGrid services.classes.contentGrid %}
{% for item in collections.services %}
  {% ContentGrid services.classes.itemGrid %}
{% Markdown %}
### {{ item.data.title }}{.centered .h2-style}

{{ item.data.description }}

[More About {{ item.data.title }}]({{ item.path }}){.button}
{.centered}
{% endMarkdown %}
  {% endContentGrid %}
{% endfor %}
{% endContentGrid %}