<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso Administrativo

    p.mb-3(data-aos="zoom-down") La administración de las empresas exige el desarrollo de las cuatro fases del proceso administrativo: #[strong planeación, organización, dirección y control], sobre el conjunto de recursos administrativos que dispone para su operación, dentro de los que se mencionan físicos, talento humano, financieros, técnicos y tecnológicos. 
    p.mb-4(data-aos="zoom-down") Como mencionamos, el proceso administrativo establece el aporte en de cada una de estas funciones a la empresa, así como la correlación o interdependencia entre ellas. Veamos el esquema:
    

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-11.col-lg-10.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/tema2-01.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="36%" y="5%" numero="+")
            p Identificación y definición del problema.
            p Qué, cuánto y cómo producir. Señala soluciones y alternativas y diseña políticas, medios de acción y procedimientos.
          .tarjeta.color-acento-botones.p-3(x="36%" y="20%" numero="+")
            p Distribución del trabajo, creación de áreas funcionales; determinación de grupos de actividades por cargos, nueva estructura; asignación de recursos por cargo.
          .tarjeta.color-acento-botones.p-3(x="36%" y="35%" numero="+")
            p Puesta en acción el plan seleccionado. Adquisición de los recursos tales como la contratación de personal. Dirección de la ejecución de las tareas, además de motivación y comunicación.
          .tarjeta.color-acento-botones.p-3(x="36%" y="50%" numero="+")
            p Se realiza seguimiento a la ejecución de los planes y tareas, se mide el desempeño y se corrigen las desviaciones o atrasos respecto de la planeación y al logro de los objetivos.
      .col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema2/tema2-01-sm.svg', :alt='alt_img_01') 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Planeación

    p.mb-5(data-aos="zoom-down") La planeación se define como la determinación de un conjunto de actividades que permiten identificar y sensibilizar alternativas para lograr fines, a partir de una necesidad u objetivo, en la medida en que este es relevante.

    p.mb-3(data-aos="zoom-down-right") El proceso de la función de planeación contiene varias etapas:

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right
            | Parte de la identificación de las necesidades, problema u objetivos
          li.mb-0
            i.fas.fa-angle-right
            | Identifica el estado actual de la empresa
          li.mb-0
            i.fas.fa-angle-right
            | Reconoce las alternativas para lograr superar la necesidad, el fin o el objetivo. 

    p.mb-5(data-aos="zoom-down") Este proceso permite trazar la solución simultánea de varios tipos de necesidades o de problemas, como en el caso de los resultados de la matriz DOFA, en la que cada cruce de oportunidades, fortalezas, amenazas y debilidades exige diferentes actuaciones y, por ende, diferentes alternativas, lo que requiere que el gerente o administrador tenga habilidad para formar equipos de trabajo, construir y consensuar las diferentes alternativas de solución. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta-a.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/edificios.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Plan de Acción para Empresas
                  p.text-small Para ampliar estos aspectos referentes a los planes de acción, se recomienda revisar el artículo Qué es un plan de acción, cómo se elabora y ejemplos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="link_2_1" target="_blank")
                    span Link
                    i.fas.fa-link

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Organización

    p.mb-3(data-aos="zoom-down") La organización, como función del proceso administrativo, busca la adecuación de los recursos empresariales.
    p.mb-3(data-aos="zoom-down") Entonces, ¿en qué consiste este proceso a nivel empresarial?
    p.mb-5(data-aos="zoom-down") La organización se entiende como la agrupación de las actividades y los recursos necesarios por cada área funcional, para llevar a cabo las actividades en cumplimiento de los planes establecidos y mantener las relaciones entre los empleados, es decir, se trata de establecer, desde la estructura empresarial y sus áreas funcionales, un agrupamiento por cargos para ejecutar las actividades en lo que se denomina, división del trabajo, asignando para ello los recursos necesarios para su realización.

    .titulo-segundo.color-acento-contenido(data-aos="zoom-down-left")
      h3 Estructura organizacional

    p.mb-4(data-aos="zoom-down") Para continuar, revisemos qué es la estructura organizacional:

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-10.col-lg-8.col-12
        .cajon.color-acento-contenido.p-3
          p.mb-0 Es un mecanismo de ordenación que define cómo se dispondrán las actividades, las relaciones entre los trabajadores y demás componentes de la empresa. 

    p.mb-4(data-aos="zoom-down") Con esta estructura es posible:

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right
            | Esquematizar gráficamente las actividades de la empresa y relacionarlas con los equipos de trabajo.
          li.mb-0
            i.fas.fa-angle-right
            | Identificar el talento humano requerido en función de las actividades, lo que conlleva una mejor comprensión de la empresa y del quehacer ordinario.
          li.mb-0
            i.fas.fa-angle-right
            | Definir el esquema de comunicaciones y de división del trabajo dando como resultado las áreas funcionales de una empresa.
    
    p.mb-4(data-aos="fade-down") Esta estructuración deriva en una jerarquización de los roles de la empresa, es decir, quiénes toman decisiones, quiénes coordinan las operaciones y quiénes ejecutan o verifican las acciones propiamente dichas.
    p.mb-4(data-aos="fade-down") Veamos el siguiente esquema: 
    
    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Estructura jerárquica y su distribución departamental en las empresas</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-02-md.svg', :alt='alt_img_02')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-02-sm.svg', :alt='alt_img_02') 

    p.mb-4(data-aos="fade-down") Dentro de la estructura organizacional es importante definir cómo será el ordenamiento funcional, es decir, establecer el conjunto de actividades afines que conforman los departamentos o áreas de la empresa.
    p.mb-5(data-aos="fade-down") En este sentido, es necesario precisar que toda empresa tiene tres funciones básicas:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Producción o servicio")
        h4 Producción o servicio
        p Es el conjunto de actividades relacionadas con las actividades principales de la empresa. 
        p Si la empresa desarrolla actividad productiva para la obtención de productos agropecuarios, su área o departamento de producción será el conjunto de actividades propiamente relacionadas con ese propósito; pero si la empresa desarrolla como actividad principal productos intangibles como asistencia agrícola, control fitosanitario, etc., entonces, se denomina departamento de servicio, en lugar de producción.
      .tarjeta.tarjeta--azul.p-4(titulo="Ventas y comercialización")
        h4 Ventas y comercialización
        p Se refiere al conjunto de actividades concernientes a la búsqueda de clientes, el desarrollo de oferta y venta efectiva de productos o los servicios que la empresa presta.
      .tarjeta.tarjeta--azul.p-4(titulo="Administración")
        h4 Administración
        p Conjunto de actividades complementarias a las técnicas de producción y de comercialización, que permiten el sostenimiento e integración de la empresa, vela por el manejo de los recursos y su disposición, sirve de soporte logístico a las otras dos funciones básicas empresariales.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Ejemplo de organigrama en áreas funcionales para una empresa industrial</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-03-md.svg', :alt='alt_img_03')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-03-sm.svg', :alt='alt_img_03') 

    .row.justify-content-center.mb-5
      .col-lg-10.col-md-11.mb-5.mb-lg-0(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Garza (2002) recomienda que toda empresa defina esquemas gráficos que faciliten a los nuevos trabajadores, personal interno, externo y, en general, a todas las dependencias de la empresa, una mejor comprensión de la organización y sus dependencias. Esto facilita los procesos de comunicación y de mejora continua.
            i.fas.fa-quote-right


    .titulo-segundo.color-acento-contenido(data-aos="zoom-down-left")
      h3 Organización y adecuación de recursos empresariales

    p.mb-4(data-aos="fade-down") El concepto de organización se ha usado para el proceso de agrupar y asignar recursos a un área funcional formada de varios cargos, los cuales se interrelacionan mutuamente, pero cada uno tiene unas actividades específicas, que constituyen el personal de una empresa.
    p.mb-5(data-aos="fade-down") La estimación de los diferentes recursos para operar una empresa parte de las funciones y actividades a realizar, las cuales se agrupan en cargos y estos, a su vez, son ocupados y desarrollados por personas a quienes se les asigna un salario en conformidad a sus capacidades y talentos. Así, los trabajadores necesitarán recursos físicos, técnicos y tecnológicos para el desarrollo de sus labores, por tanto, se deben asignar según corresponda. Algunos recursos no son asignables a un cargo o puesto en sí, sino que son activos de uso general los cuales se suman a las labores funcionales de los trabajadores.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta-a.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/uml.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Organización de áreas
                  p.text-small Le invitamos a revisar el siguiente ejemplo de organización de áreas, actividades y recursos en una empresa, que describe la técnica para la asignación y estimación de recursos y el desarrollo de las actividades.
                  p.text-small Asimismo, si desea tener mayor detalle, consulte el documento #[em Presupuesto de recursos administrativos por área o proceso], en el que puede evidenciar un modelo de organización. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_presupuesto_recursos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Recursos de Inventario
      div.titulo-herramientas.d-block.d-md-none Recursos de Inventario

    p.mb-5(data-aos="fade-down") Entre los recursos físicos de activos que posee la empresa para su operación se encuentran los inventarios, que se refieren a las existencias de recursos para transformación, venta, uso o cualquier otro aspecto con fines operativos. Se encuentran almacenados en bodega, a espera de ser utilizados; regularmente se ordenan de la siguiente manera según su clase: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Inventario de activos")
        .row
          .col-12.mb-4.mb-md-0
            p Conjunto de recursos de capital que tiene la organización para su operación y el trabajo de los individuos. Se clasifican en bienes muebles e inmuebles.
            p Ejemplo: computadores muebles y escritorios, bodegas, lotes, fincas, etc.
      .py-4.py-md-5(titulo="Inventario de productos terminados")
        .row
          .col-12.mb-4.mb-md-0
            p Se refiere a los productos que ya tienen completa su agregación de valor, cumplieron su proceso de producción y están esperando para ser distribuidos.
      .py-4.py-md-5(titulo="Inventarios de materias primas")
        .row
          .col-12.mb-4.mb-md-0
            p Recursos esenciales para la elaboración o fabricación de bienes o productos, se clasifican en materias primas, insumos y suministros.
      .py-4.py-md-5(titulo="Inventarios de productos en proceso")
        .row
          .col-12.mb-4.mb-md-0
            p Se refiere a las materias primas que ya han sufrido algún proceso de agregación de valor o transformación, pero que aún no han sido terminados totalmente. 
            p Ejemplo: producción de huevos que no han sido preparados, pesados y embalados. Leche que se encuentra pasteurizada, pero no empacada está en silos.
      .py-4.py-md-5(titulo="Inventario de obsoletos")
        .row
          .col-12.mb-4.mb-md-0
            p Es el inventario que posee la empresa de productos que ya están obsoletos, deteriorados, que cumplieron su vida útil o caducaron, dañados o estropeados y no pueden ser comercializados ni distribuidos.
      .py-4.py-md-5(titulo="Inventario de repuestos")
        .row
          .col-12.mb-4.mb-md-0
            p Son aquellos recursos que posee la empresa para efectos de suplir fallas en máquinas o partes intercambiables, deben permanecer disponibles cuando sean necesitados por el departamento de producción y no interrumpir el proceso de producción.
            p Ejemplo: llantas para los camiones, una cuchilla para un tractor o guadaña, etc.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Dirección

    p.mb-3(data-aos="fade-down") La dirección, como función del proceso administrativo, consiste en dinamizar la empresa y poner en operación y ejecución la planeación (conjunto de iniciativas estratégicas para lograr los objetivos previstos). Una vez que se completa el proceso de planeación y de organización, se cumplirá con la disposición de los recursos para el desarrollo de las actividades, lo que presupone contratación de talento humano si se requiere, compra de recursos, arrendamiento o reorganización de tierras lotes, bodegas, ajuste de las asignaciones de las actividades de manera formal, de darse a lugar. La ejecución requiere de funciones como la comunicación para la coordinación y herramientas tecnológicas que faciliten este proceso, el liderazgo para hacer que las personas desarrollen sus labores con motivación y diligencia, en la oportunidad requerida.
    p.mb-5(data-aos="fade-down") Veamos el siguiente recurso que nos ilustra sobre los estilos de dirección empresarial:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-06.svg', alt='')
        h4.text-center Autocrático
        p.mb-0 ● La toma de decisiones es #[b centralizada.] 
        p.mb-0 ● Hay un #[b bajo] compromiso del empleado. 
        p ● Hay un muy #[b alto] compromiso del gerente. 
        p Recomendable cuando la empresa se encuentra en crisis y se requiere una orientación directa.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-07.svg', alt='')
        h4.text-center Liberal
        p.mb-0 ● La toma de decisiones es #[b delegada] y #[b descentralizada.] 
        p.mb-0 ● Hay un #[b alto] compromiso del empleado. 
        p ● Hay un #[b alto] compromiso del gerente. 
        p Recomendable cuando la empresa se encuentra en consolidada y permite la delegación de funciones.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-08.svg', alt='')
        h4.text-center Democrático
        p.mb-0 ● La toma de decisiones es por #[b concesión.] 
        p.mb-0 ● Hay un #[b alto] compromiso del empleado. 
        p ● Hay un #[b alto] compromiso del gerente. 
        p Recomendable cuando la empresa se encuentra en consolidada, pero la toma de decisiones es demorada.


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Control

    p.mb-3(data-aos="fade-down") La función de control del proceso administrativo consiste en establecer resultados esperados en la planeación y compararlos contra los resultados obtenidos al ejecutar; en la medida que existan desviaciones, se realizan los ajustes necesarios para el logro de los resultados esperados.
    p.mb-5(data-aos="fade-down") #[strong Tengamos en cuenta que…]

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-10.col-lg-8.col-12
        .cajon.color-acento-contenido.p-3
          p.mb-0 Debido a cambios en los costos o en otros factores, los resultados obtenidos, después de que el plan se ejecutó, pueden desviarse de los resultados esperados; esto se debe a la incertidumbre y al riesgo que existe en la producción; no obstante, es necesario identificar el tipo y magnitud de las desviaciones tan pronto como sea posible, pues tiene impactos directos contra las utilidades.

    p.mb-3(data-aos="fade-down") Esta fase del proceso se desarrolla de manera simultánea a su ejecución, va ligeramente después de las acciones y sus efectos, de tal manera que no es reactiva; se genera frente a dos situaciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right
            | Si se ocasionan desviaciones, se pueden corregir y ajustar oportunamente. En esta fase se mide el desempeño y se contrasta con los indicadores de gestión establecidos previamente; a partir de allí, se procede a una interpretación y evaluación para identificar si se ha cumplido con lo esperado, así se seguirá con el proceso de medición en conformidad a lo programado, lo que no significa que en un futuro los resultados presenten dificultades. 
          li.mb-0
            i.fas.fa-angle-right
            | De existir desviaciones, es decir, si no se cumple con el indicador y su meta, entonces, se requerirá realizar acciones de ajuste al plan de acción o identificar la causa de la desviación, bien sea por problemas de costos o porque se hizo una mala medición, por lo que el indicador no arroja la información para obtener una conclusión.

    p.mb-4(data-aos="fade-down") Las empresas cuentan con muchos recursos técnicos y tecnológicos que facultan sus seguimientos a los planes y permiten recoger información de los indicadores de gestión, con el fin de detallar el comportamiento y trazabilidad de las acciones.

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Control y seguimiento administrativo</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-04-md.svg', :alt='alt_img_04')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-04-sm.svg', :alt='alt_img_04') 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    link_2_1: 'https://blog.hubspot.es/sales/plan-de-accion-empresa',
    alt_img_01: `Planeación: identificación y definición del problema. Qué, cuánto y cómo producir. Señala soluciones y alternativas y diseña políticas, medios de acción y procedimientos.
Organización: distribución del trabajo, creación de áreas funcionales; determinación de grupos de actividades por cargos, nueva estructura; asignación de recursos por cargo.  
Dirección: puesta en acción el plan seleccionado. Adquisición de los recursos tales como la contratación de personal. Dirección de la ejecución de las tareas, además de motivación y comunicación. 
Control: se realiza seguimiento a la ejecución de los planes y tareas, se mide el desempeño y se corrigen las desviaciones o atrasos respecto de la planeación y al logro de los objetivos.
`,
    alt_img_02: `Se representa como una pirámide, a la cabeza se encuentra la junta directiva, que corresponde un nivel estratégico o decisional, está supeditado los directores de área o jefes de división, los cuales corresponden a un nivel táctico o de coordinación. Y por último en la base de la pirámide se encuentran los supervisores y operarios, que corresponden a un nivel operativo o de ejecución.`,
    alt_img_03: `Un organigrama se representa mediante niveles jerárquicos, a la cabeza se encuentra la junta de socios, por debajo de estos, la gerencia o administración general, de la cual dependerán las diferentes áreas como administración, producción, distribución y ventas y comercialización, y a cada una de estas áreas se asocian los departamentos o unidades de trabajo.`,
    alt_img_04: `En el flujograma se encuentran las estratégicas tácticas, y el plan de acción, de donde se desprende la medición de desempeño a partir de indicadores, y de estos surge la evaluación, para llegar a un punto de verificación de cumplimiento de satisfacción, de haber cumplido se continua con las mediciones. De no cumplir el nivel estándar de satisfacción se procede a justar medidas y control, e iniciar nuevamente con las estrategias y el plan de acción, o la medición de desempeño e indicadores.`,
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
