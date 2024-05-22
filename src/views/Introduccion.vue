<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-5(data-aos="zoom-down") Cordial bienvenida a este componente formativo, en el cual se abordarán aspectos fundamentales de la gestión empresarial, necesarios para facilitar un adecuado funcionamiento y operación orientados al logro de los objetivos. Con el siguiente video se podrá comprender la importancia del contenido y los diferentes temas.

    figure(data-aos="zoom-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DQhrzsQpPjs" title="Organizaciones y gestión" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-down") Mediante el establecimiento de un modelo de administración, en el que se contemplen diferentes recursos como el talento humano, físicos, financieros, intangibles y tecnológicos es posible obtener estos objetivos empresariales que motiven a sus accionistas a sostenerse en su iniciativa y lograr el nivel de competitividad que exige el mercado.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
