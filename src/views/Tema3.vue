<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Factores y variables que impulsan las empresas

    p.mb-5(data-aos="fade-down") La operación empresarial se produce en un contexto de múltiples variables y aspectos que la afectan permanentemente; en los años recientes se ha complejizado por su alta dinámica, pluralidad de variables, nuevos escenarios y actores, a efectos de la ruptura por la globalización e internacionalización para la actuación empresarial. En este sentido, las empresas están llamadas a desarrollar capacidades competitivas mucho más exigentes y versátiles que les permitan la sobrevivencia; para ser reconocidas y estar a la vanguardia, deberán hacer mayores esfuerzos para desarrollar una ventaja competitiva creciente y sostenida, en la que se demanda la identificación de estos factores y variables que la impactan positiva o negativamente; además se pretende evaluar o anticipar las nuevas alternativas técnicas, operativas y administrativas que faciliten, desde el presente, el futuro empresarial (Rodríguez, 2012).
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Factores y variables internos

    p.mb-4(data-aos="fade-down") Los factores internos o endógeno son el conjunto de variables o aspectos que impulsan e impactan el comportamiento empresarial, es decir, las actuaciones que dependen de la empresa, por tanto, son absolutamente controlables, identificando fortalezas y debilidades. 

    .row.justify-content-center.mb-5
      .col-lg-10.col-md-11.mb-5.mb-lg-0(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Según Laurence (2014) las fortalezas son las variables empresariales que impactan positivamente y facilitan su sostenibilidad y crecimiento mientras que las debilidades hacen que se pierda competitividad afectando la eficiencia y efectividad empresarial.
            i.fas.fa-quote-right

    p.mb-5(data-aos="fade-down") Veamos estos factores internos:

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
