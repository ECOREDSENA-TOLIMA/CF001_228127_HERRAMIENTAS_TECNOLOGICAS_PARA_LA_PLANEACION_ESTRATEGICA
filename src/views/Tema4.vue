<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelos administrativos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Planeación estratégica

    p.mb-5(data-aos="zoom-down") Es uno de los modelos integrales que permite la fijación de objetivos empresariales a partir de un ejercicio de diagnóstico; determina objetivos y medidas estratégicas en las empresas con el fin de mantener su capacidad competitiva. Este modelo parte del reconocimiento de aspectos fundamentales como la misión y la visión, preceptos inspiradores del quehacer empresarial, y a partir de allí, determina la condición actual, fijando planes de acción en conformidad a las oportunidades y amenazas, fortalezas y debilidades.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Técnica análisis DOFA

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-7(data-aos="fade-left")
        p Esta técnica se ha convertido en una herramienta de análisis y planeación estratégica que permite identificar los factores y sus aspectos de variables internos y externos que inciden en la operación de la empresa y que la pueden estar afectando de manera favorable o desfavorable. Permite, a su vez, focalizar cuáles son los más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; asimismo, propicia que la empresa plantee una planeación de objetivos y fije las medidas estratégicas y de plan de acción para el desarrollo de su competitividad a futuro (JDELCA, 2020). 
      .col-12.col-md-5(data-aos="fade-left")
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')

    p.mb-5(data-aos="zoom-down") Su aplicabilidad surge del concepto que se ha venido trabajando sobre los factores internos y externos, donde para cada uno establece dos condiciones así:

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Descripción de los factores Internos y Externos que impulsan y afectan las empresas</i>
      .col-12(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Factores internos")
            .col-12.mb-4.mb-md-0
              p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. Recordemos que su particularidad está en que su estado depende de los esfuerzos de la empresa, por tanto, son controlables.
              .tabla-a.color-primario.mb-4
                table
                  thead
                    tr
                      th Fortalezas
                      th Debilidades
                  tbody
                    tr
                      td 
                        p Las fortalezas son aquellos aspectos que domina la empresa para su supervivencia, lo que le permite operar, por lo que se distingue, en que es mejor que otros, etc.
                        p Ejemplo la calidad del producto, por ello le compran y sobre todo le recompran.
                      td 
                        p Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables y la puedan estar induciendo a fracasos.
                        p Por ejemplo, retrasos en las entregas.
          .row(titulo="Factores externos")
            .col-12.mb-4.mb-md-0
              p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. Recordemos que su particularidad está en que su estado depende de los esfuerzos de la empresa, por tanto, son controlables.
              .tabla-a.color-primario.mb-4
                table
                  thead
                    tr
                      th Oportunidades
                      th Amenazas
                  tbody
                    tr
                      td 
                        p Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo, crecimiento, porque el macroentorno se lo permite y lo favorece.
                        p Por ejemplo, la reducción de los precios de los combustibles para una empresa transportadora.
                      td 
                        p Son las posibilidades que uno o varios aspectos del macro o micro entorno afecten negativamente a la empresa, reduciendo su operación, beneficio, crecimiento, etc.
                        p Por ejemplo, un aumento en los precios de los combustibles para una empresa transportadora.

    p.mb-5(data-aos="fade-down") La técnica establece que una vez ya clasificada la información y determinado su nivel de impacto positivo o negativo se procede a armar la Matriz DOFA propiamente dicha, para tomar la decisiones o acciones haciendo los cruces pertinentes; esto implica focalizar en unos pocos aspectos críticos de los factores por cada tipo, los de mayor relevancia o impacto a la empresa, porque a partir de allí se tomarán decisiones, fijación de objetivos.

    .row.justify-content-center.mb-5
      .col-12.col-md-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Estructura de la Matriz DOFA</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema4/tema4-03.svg', alt='')

    p.mb-3(data-aos="fade-down") La técnica indica que, a partir del cruce de las condiciones actuales endógenas frente a las exógenas, la empresa debe tomar medidas o iniciativas estratégicas para actuar en favor de su condición o para mitigar o reducir el impacto. Las iniciativas estratégicas y de actuación FO y DO permitan el mejoramiento, el desarrollo, crecimiento de la empresa, pues el contexto facilita ampliar sus fortalezas o superar las debilidades. Estas iniciativas estratégicas y de actuación FA y DA buscan proteger la empresa, mitigar los riesgos o los efectos de las amenazas que no son controlables; el problema es que si la empresa es débil le será difícil afrontar esta situación, por lo cual debe prepararse en caso su ocurrencia, porque no son certeras las adversidades.
    p.mb-5(data-aos="fade-down") Le invitamos a ver el siguiente video con información relevante:

    figure.mb-5(data-aos="flip-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tTTeEk2PySs" title="Técnicas de planeación estratégica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 #[i Balanced Scorecard (BSC)]

    p.mb-5(data-aos="fade-down") El #[i Balanced ScoreCard] es un modelo o herramienta de gestión empresarial que convierte la visión o el objetivo a más largo plazo que tiene la empresa en acciones explícitas, mediante un conjunto de indicadores de gestión divididos en cuatro categorías o perspectivas que deben regir la empresa u organización; estas perspectivas son las siguientes:




</template>

<script>
export default {
  name: 'Tema4',
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
