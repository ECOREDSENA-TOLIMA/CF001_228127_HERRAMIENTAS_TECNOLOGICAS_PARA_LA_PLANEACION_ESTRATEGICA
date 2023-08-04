<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Organizaciones

    p(data-aos="zoom-down") El hombre como especie, tiene dentro de sus variadas características la de ser asociativo; esto es que necesita relacionarse con otros individuos. Las primeras asociaciones derivadas de ese relacionamiento continuo fueron las familias en las que se establecieron roles de desempeño, que dio como resultado el origen del trabajo en función de los objetivos comunes. Esta definición de roles, básicamente, consistió en la consecución de recursos por parte de los integrantes de estas nuevas organizaciones, los cuales debían ser racionalizados y distribuidos. De este ir y venir, las organizaciones se vincularon con otras organizaciones familiares e intercambiaron productos o instrumentos, con lo cual se originó el comercio y las actividades permanentes que configuraron la base de la economía y la actuación social. Se desarrolla, entonces, la especialización del trabajo de dichas estructuras, lo que implicó, la expansión de nuevas técnicas adoptadas por las comunidades, se descubre la renovación de los recursos, se inicia una nueva forma social que tiene la capacidad de modificación del entorno, del desarrollo sustantivo de calidades de vida y de la producción de los diferentes recursos que facilitan este proceso.
    //p.mb-5(data-aos="zoom-down") Entonces, ¿cómo se llega al concepto de organización como empresa?

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="flip-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h3.mb-0 Entonces, ¿cómo se llega al concepto de organización como empresa?
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Una organización empresarial es un conjunto de personas que persiguen un fin u objetivo común, que adoptan una personería jurídica o nombre propio ante las autoridades civiles que los identifique en su ejercicio y actuación, además de contar con una serie de recursos de diversa índole, para lograr estos objetivos. 

    //.row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
    //  .col-md-10.col-lg-8.col-12
    //    .cajon.color-acento-contenido.p-3
    //      p.mb-0 Una organización empresarial es un conjunto de personas que persiguen un fin u objetivo común, que adoptan una personería jurídica o nombre propio ante las autoridades civiles que los identifique en su ejercicio y actuación, además de contar con una serie de recursos de diversa índole, para lograr estos objetivos. 

    p.mb-5(data-aos="zoom-down-right") Para el funcionamiento de las organizaciones se deben definir niveles de roles y responsabilidades, por lo cual surge la división del trabajo (todos no pueden hacer de todo); para su operación, es necesario establecer un conjunto de normas y definir procesos a todos sus integrantes, con lo cual es posible parametrizar las actuaciones y, a su vez, lograr los objetivos o metas que aporten a su autonomía y funcionamiento institucional, en beneficio del futuro como organización empresarial. 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')

          
    p.mb-5(data-aos="zoom-down-right") Este concepto de empresa denota un conjunto de acciones arduas, de diversa dificultad, las cuales son de ejercicio continuo y ordinario, que las personas desarrollan para lograr el fin u objetivo. A partir de este concepto, la administración de empresas homologa los términos empresa y organización, porque pretenden los mismos propósitos básicos, un conjunto de personas que desarrollan actividades, con el fin de lograr objetivos comunes. 

    .titulo-segundo.color-acento-contenido(data-aos="zoom-down-left")
      h3 Clasificación de las organizaciones

    p.mb-3(data-aos="zoom-down") La sociedad y los entes gubernamentales establecen que es necesario que el conjunto de empresas nacionales se ajuste a los lineamientos generales, orientados hacia el correcto funcionamiento que permita iniciativas de apoyo, doctrinas en la operación, entre otros aspectos de la gestión macroeconómica; por esta razón es que las organizaciones se pueden clasificar desde varios enfoques: 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según la propiedad

    p.mb-5(data-aos="zoom-down-right") Identificación de los recursos para su conformación, por lo que las organizaciones empresariales pueden ser:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-10.col-lg-8.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema1-01.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="6%" y="57%" numero="+")
            p Aquellas organizaciones en las que los recursos son de naturaleza pública o del gobierno nacional o local de las regiones donde opera.
          .tarjeta.color-acento-botones.p-3(x="94%" y="9%" numero="+")
            p Aquellas en las que los recursos son provistos por particulares.
          .tarjeta.color-acento-botones.p-3(x="94%" y="80%" numero="+")
            p Aquellas en las que los recursos provienen de la asociación de particulares y del gobierno nacional o local.
      .col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema1/tema1-01-b.svg', :alt='alt_img_01')
      
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según la destinación de los recursos y utilidad

    p.mb-5(data-aos="zoom-down-right") Veamos en qué consiste esta clasificación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-down")
      .row(titulo="Organizaciones con ánimo de lucro")
        .col-md-4.col-lg-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Buscan generar renta a los socios o propietarios, las utilidades y beneficios se reparten en conformidad a sus estatutos de conformación.
          p El ánimo de lucro existe como intención de una persona aumentar su patrimonio o conseguir otro resultado económico positivo a través de una actuación o negocio jurídico lícito.
      .row(titulo="Organizaciones sin ánimo de lucro")
        .col-md-4.col-lg-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-03.svg', alt='')
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p En este caso se encuentran las siguientes modalidades:
          p Empresas en las que los beneficios y utilidades no buscan generar renta a particulares, sino que, al contrario, se destinan para reinvertir en la empresa, con el fin de mantener la operación y el crecimiento.
          p Empresas en las que los beneficios y utilidades se trasladan a terceros, según sea su finalidad social; los recursos generados solo cubren los niveles de costos y gastos para operar y garantizar su desarrollo, el restante lo trasladan. En este tipo de empresas se encuentran las fundaciones, las corporaciones sociales, etc.


    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según su tamaño 

    p.mb-3(data-aos="zoom-down-right") Esta clasificación puede estudiarse desde dos condiciones:
    p.mb-3(data-aos="zoom-down-right") En primer lugar, de acuerdo con el Decreto 957 de 2019, en Colombia, las organizaciones empresariales se clasifican por su tamaño en conformidad al nivel de ingresos obtenidos medidos en Unidades de Valor Tributario (UVT), según la actividad económica a la que se dedican. El valor en pesos de la UVT cambia cada año según lo disponga el Gobierno Nacional, a través de la Dirección de Impuestos y Aduanas Nacionales (DIAN). Por ejemplo, para el año 2022, su valor nominal estaba en $38.004 = 1 UVT.
    p.mb-5(data-aos="zoom-down-right") En la siguiente tabla se describe el tamaño de las empresas según su nivel de ingresos en UVT:


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Tamaño de las empresas según nivel de ingresos</i>
        .tabla-a.color-primario.mb-4
          table
            thead
              tr
                th Actividad Empresarial 
                th Microempresa
                th Pequeña
                th Mediana
                th Grande
            tbody
              tr
                th.text-center Comercial
                td.text-center ≤ 44.769
                td.text-center > 44.769  y  ≤ 431.196
                td.text-center > 431.196  y  ≤ 2.160.692
                td.text-center > 2.160.692
              tr
                th.text-center Industrial o Manufactura
                td.text-center ≤ 23.563
                td.text-center > 23.563  y  ≤ 204.995
                td.text-center > 204.995  y  ≤ 1.736.565
                td.text-center > 1.736.565
              tr
                th.text-center Servicios
                td.text-center ≤ 32.988
                td.text-center > 32.988  y  ≤ 131.951
                td.text-center > 131.951  y  ≤ 483.034
                td.text-center > 483.034

    p.mb-5(data-aos="fade-left") Asimismo, este concepto de tamaño de las empresas obedece al nivel de recursos con los que opera la empresa: activos y número de empleados que alberga para desarrollar sus actividades. 

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Tamaño de las empresas en Colombia según activos y número de empleados</i>
        .tabla-a.color-primario.mb-4
          table
            thead
              tr
                th Tipo de empresa
                th Número de empleados
                th Nivel de activos en Salarios Mínimos Mensuales Legales Vigentes
            tbody
              tr
                th.text-center Microempresa
                th.text-center 1 a 10
                th.text-center 1 a 500 SMMLV
              tr
                th.text-center Pequeña
                th.text-center 11 a 50
                th.text-center 501 a 5.000 SMMLV
              tr
                th.text-center Mediana
                th.text-center 51 a 200
                th.text-center 5.001 a 30.000 SMMLV
              tr
                th.text-center Grande
                th.text-center > a 200
                th.text-center > a 30.000 SMMLV

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según el régimen jurídico al que pertenecen  


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-8.col-12
        p.mb-3(data-aos="flip-right") Antes de conocer esta clasificación, comprendamos a qué hace referencia el régimen jurídico:
        .cajon.color-acento-contenido.p-3.mb-3(data-aos="fade-down-left")
          p.mb-0 El régimen jurídico es el conjunto de normas y disposiciones para la conformación y el desarrollo de iniciativas de empresa en Colombia, los cuales se establecen de conformidad al Código de Industria y Comercio.
        p.mb-3(data-aos="flip-right") De acuerdo con lo anterior, según el régimen jurídico las empresas se clasifican en:
        .row.justify-content-center.align-items-center
          .col-12(data-aos="fade-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right
                | Sociedades limitadas.
              li.mb-0
                i.fas.fa-angle-right
                | Sociedades anónimas simplificadas.
              li.mb-0
                i.fas.fa-angle-right
                | Sociedades anónimas. 
              li.mb-0
                i.fas.fa-angle-right
                | Sociedades en comandita simple y por acciones.
              li.mb-0
                i.fas.fa-angle-right
                | Sociedades de régimen especial.
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según el nivel de aportes y participación  

    p.mb-3(data-aos="zoom-down-right") Se refiere a las empresas que se configuran a partir de la colocación de capitales o desde la participación de personas, entre las cuales se encuentran:

    .row(titulo="Organizaciones con ánimo de lucro")
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-04.svg', alt='')
        h4.pt-3 Sociedades de personas
        p El motivo de la empresa son las personas y su participación, ejemplo los clubes sociales.
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-05.svg', alt='')
        h4.pt-3 Sociedades de capital
        p Se conforman exclusivamente por aportes de capital sin identificar su aportante. Por ejemplo, las organizaciones conformadas por acciones, sociedades anónimas.
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-06.svg', alt='')
        h4.pt-3 Sociedades mixtas
        p Se conforman por personas y su aporte en capital. Por ejemplo, las sociedades limitadas, donde figuran las personas que conforman la empresa y cuánto es su aporte en dinero.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según su objeto de actividad  

    p.mb-5(data-aos="zoom-down-right") Veamos cuál es la clasificación que corresponde a esta modalidad:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-10.col-lg-9.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema1-07.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="75%" y="23%" numero="+")
            p Aquellas empresas que se dedican a la intermediación comercial exclusivamente; su función es captar mercancías de oferentes y vincularlas a demandantes que las requieran, es decir, compra y venta de mercancías.
          .tarjeta.color-acento-botones.p-3(x="75%" y="46%" numero="+")
            p Corresponde a las empresas que se dedican a la transformación de materias primas, elaboración y fabricación de bienes y productos.
          .tarjeta.color-acento-botones.p-3(x="75%" y="68%" numero="+")
            p Se refiere a las empresas cuya actividad consiste en proveer funciones intangibles. Este es el caso de la educación, el transporte, la asistencia médica, etc., en las cuales para prestar el servicio se requiere de recursos, pero estos no son parte del entregable al cliente.
      .col-md-10.col-lg-9.col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema1/tema1-07-sm.svg', :alt='alt_img_07')

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según el sector productivo 

    p.mb-3(data-aos="zoom-down-right") En Colombia, la economía se estructura a partir del tipo de proceso de producción que desarrollan las organizaciones empresariales, las cuales, desde un enfoque convencional, se dividen en tres sectores: 
      
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="flip-left")
      SlyderA(tipo="b")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Sector primario
            p Corresponde a las empresas u organizaciones que obtienen sus productos directamente de recursos naturales, sin proceso elaborados; se consideran generadores de materias primas no elaboradas o bienes consumibles directos; su producción se orienta en gran medida al soporte o abastecimiento de los procesos industriales de transformación y elaboración de productos o bienes. 
            p También, se le denomina sector extractivo, en el que se ubican las empresas agropecuarias.
            p Por ejemplo: agricultura, ganadería, pesca, minería.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-08.svg', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Sector secundario
            p Se refiere a las empresas con actividades orientadas a la elaboración o producción industrial, la transformación industrial de materias primas, de bienes de otras empresas, que también se utilizan como base para la fabricación y elaboración de nuevos productos.
            p Por ejemplo: industria, construcción.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-09.svg', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Sector terciario
            p Corresponde a las empresas que tienen como actividad el abastecer a la sociedad y el mercado en general de bienes y servicios de los otros sectores; o de proporcionar servicios que no son más que beneficios intangibles fundamentales a la sociedad permitiendo un correcto funcionamiento y calidad de vida.
            p Por ejemplo: comercio, turismo, educación, sanidad.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.svg', alt='')

    p.mb-4(data-aos="flip-left") En la siguiente figura se observa un resumen sobre los sectores económicos.
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Clasificación de las empresas en sectores según su actividad</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-11.svg', :alt='alt_img_11')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-11-b.svg', :alt='alt_img_11') 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Según el ámbito territorial de operación

    p.mb-5(data-aos="zoom-down-right") En este sentido las empresas se clasifican en conformidad a las zonas geográficas donde desarrollan su actividad de manera directa, por lo cual pueden ser:

    TabsA.color-acento-botones.mb-4(data-aos="zoom-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Locales")
        h4 Locales
        p Son las empresas que ciñen su actividad en un ámbito cercano a su planta de producción y por ende definen su área comercial en una sola localidad o municipio; su mercado se encuentra en sus alrededores o en las poblaciones aledañas a su centro de producción.

      .tarjeta.tarjeta--azul.p-4(titulo="Regionales")
        h4 Regionales
        p Su operación y registro se presta en diversos municipios, puede tener su actividad industrial en uno, pero su actividad comercial y centros de acopio en otros. Se restringe a la normatividad de cada uno de los municipios o departamentos en los que opera.
      .tarjeta.tarjeta--azul.p-4(titulo="Nacionales")
        h4 Nacionales
        p Aquellas empresas que pueden tener varias áreas o plantas productivas, pero su comercialización cubre la mayor parte de los municipios y ciudades del país, Por ejemplo, Postobón que cuenta con varias plantas embotelladoras en el país para cubrir los diferentes territorios a nivel comercial.
      .tarjeta.tarjeta--azul.p-4(titulo="Multinacionales")
        h4 Multinacionales
        p Son las empresas que tienen presencia y desarrollo de actividad en otros países, aunque son de origen colombiano, pueden desarrollar industria y comercialización de productos en otros países; por ejemplo, Colombina S,A., que desarrolla actividades industriales en Colombia y tiene subsidiarias en Guatemala y España. Exporta a más de 50 países del mundo y en algunos tiene puntos propios de venta.

    p.mb-5(data-aos="zoom-down-right") Una misma empresa puede pertenecer a varias clasificaciones, por ejemplo, puede ser privada, con ánimo de lucro, regional, industrial, de régimen limitado y mediana empresa. Así mismo, pueden existir otras formas de clasificar las organizaciones, lo que permite a los emprendedores identificar cuál es el criterio en el que se promueve la asociación organizacional. 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    alt_img_01: `Organizaciones privadas: aquellas en las que los recursos son provistos por particulares.
Organizaciones públicas: aquellas organizaciones en las que los recursos son de naturaleza pública o del gobierno nacional o local de las regiones donde opera.
Organizaciones mixtas: aquellas en las que los recursos provienen de la asociación de particulares y del gobierno nacional o local.
`,
    alt_img_11: `Sector primario, dedicado a actividades que se obtienen directamente de la naturaleza, como: agricultura, ganadería, pesca y minería.
Sector secundario, dedicado a actividades que transforman materias primas en productos elaborados, como: la industria y la construcción.
Sector terciario o de servicios, dedicado a actividades que proporcionan servicios, como: el comercio, el turismo, la sanidad y la educación.
`,
    alt_img_07: `Comerciales: aquellas empresas que se dedican a la intermediación comercial exclusivamente; su función es captar mercancías de oferentes y vincularlas a demandantes que las requieran, es decir, compra y venta de mercancías.
Industriales o de Manufactura: corresponde a las empresas que se dedican a la transformación de materias primas, elaboración y fabricación de bienes y productos.
Servicios: se refiere a las empresas cuya actividad consiste en proveer funciones intangibles. Este es el caso de la educación, el transporte, la asistencia médica, etc., en las cuales para prestar el servicio se requiere de recursos, pero estos no son parte del entregable al cliente.
`,
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
