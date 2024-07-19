<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Los alimentos

    .fondo-personalizado-1.pos-full.pos-bottom.f2
      .fondo-personalizado-1__contenido.pb-4
        .pt-3
          .fondo-color-sistema-l
            .row.align-items-center
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/5.png")
              .col-lg-7
                p.mb-0.p-4.py-lg-3 Los alimentos son sustancias que se ingieren diariamente para nutrir el cuerpo y proporcionarle las calorías y la energía necesarias para realizar diversas actividades. Estos no solo son esenciales para mantener la salud y el bienestar, sino que también desempeñan un papel fundamental en el desarrollo y el funcionamiento adecuado de los sistemas del cuerpo. La clasificación de los alimentos puede hacerse según #[span.c-color-sistema-j.fw-bold su origen y su función].
        
        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Alimentos por su origen

        p.mb-4 La clasificación de los alimentos según su origen permite entender mejor su aporte nutricional y su papel en una dieta equilibrada. Esta clasificación se divide en alimentos orgánicos e inorgánicos, cada uno con sus propias subcategorías.

        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1.] Alimentos según su origen
        
        figure.mb-3
          img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/6.svg",style="max-width: 1232px;",alt="Diagrama que presenta la clasificación de los alimentos en orgánicos e inorgánicos. Los alimentos orgánicos se dividen en vegetales como maíz, trigo, espinacas, acelgas y animales como huevos, carne, leche. Los alimentos inorgánicos incluyen minerales como agua, sal, fósforo, hierro y yodo.")
          img.mx-auto.d-lg-none(src="@/assets/curso/temas/7.svg",style="max-width: 333px;",alt="Diagrama que presenta la clasificación de los alimentos en orgánicos e inorgánicos. Los alimentos orgánicos se dividen en vegetales como maíz, trigo, espinacas, acelgas y animales como huevos, carne, leche. Los alimentos inorgánicos incluyen minerales como agua, sal, fósforo, hierro y yodo.")

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Alimentos por su función

        p.mb-0 Los alimentos se pueden clasificar según la función que desempeñan en el organismo. Esta clasificación ayuda a entender cómo cada tipo de alimento contribuye al crecimiento, desarrollo, energía y mantenimiento del cuerpo.

    .fondo-personalizado-1.f3.mb-2
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4.pt-lg-5
          SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Alimentos constructores
                p.mb-0 También conocidos como formadores, estos alimentos contienen proteínas que son esenciales para el crecimiento y desarrollo del cuerpo. Las proteínas favorecen la formación y reparación de los tejidos, como músculos, piel y órganos. Se encuentran principalmente en alimentos de origen animal, tales como carne, huevo y leche. Además, algunas proteínas de origen vegetal, como las legumbres y los frutos secos, también cumplen esta función.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Alimentos energéticos
                p.mb-0 Estos alimentos son los encargados de proporcionar la energía necesaria para que el cuerpo desarrolle diferentes actividades y funciones. La principal fuente de energía proviene de los carbohidratos y las grasas. Los carbohidratos se encuentran en alimentos como los cereales (trigo, arroz, avena), las menestras (frijoles, lentejas), los tubérculos (papas, batatas) y los frutos secos (nueces, almendras). Las grasas, presentes en aceites, mantequillas y algunos frutos secos, también son una fuente importante de energía.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Alimentos reguladores
                p.mb-0 Los alimentos reguladores son esenciales para mantener el buen funcionamiento del organismo. Son ricos en vitaminas y sales minerales, que son cruciales para diversas funciones corporales, incluyendo el sistema inmunológico, la digestión y el metabolismo. Estos nutrientes se encuentran principalmente en frutas, verduras y hortalizas, como naranjas, manzanas, espinacas y zanahorias. Además, ciertos alimentos de origen animal, como carnes, leche y huevos, también contienen vitaminas y minerales importantes para la salud.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 424px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Conceptos clave

    p.mb-4 A continuación, se explican los conceptos que forman parte de la terminología de manipulación de alimentos, inmersos en la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social, dirigida a todas las personas que realizan actividades de transformación de alimentos para que conozcan el significado de cada término.

    .row 
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 401px;")
      .col-lg-8
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Alimento adulterado")
            p.ps-md-5.ms-md-3 Es el alimento al que se le han reemplazado parte de los elementos propios por otras sustancias no autorizadas.
          .div(titulo="Alimento alterado")
            .ps-md-5.ms-md-3
              p.bm-4 Es cuando el alimento sufre cambios en sus propiedades por causas de agentes físicos, químicos o biológicos, como por ejemplo:

              ul.lista-ul.list-per-1
                li
                  i.fas.fa-check-circle.c-color-primario 
                  span Cuando no se almacena de manera correcta y se deteriora o se contamina con microorganismos. 
                li
                  i.fas.fa-check-circle.c-color-primario 
                  span Cuando cambia sus condiciones debido a una mala manipulación física/química, ocasionando alteración en el alimento. 
          .div(titulo="Alimento contaminado")
            .ps-md-5.ms-md-3
              p.bm-4 Es un alimento que contiene sustancias dañinas de cualquier naturaleza en cantidades no permitidas por las autoridades competentes. Un ejemplo es cuando se vende leche fresca que contiene trazas de formol. 
          .div(titulo="Alimento de mayor riesgo para la salud pública")
            .ps-md-5.ms-md-3
              p.bm-4 Es aquel que contiene microorganismos altamente patógenos, los cuales pueden producir toxinas letales para la salud, como es el caso de #[em Clostridium botulinum]; otro ejemplo es cuando el alimento contiene sustancias químicas nocivas. 
          .div(titulo="Alimento perecedero")
            .ps-md-5.ms-md-3
              p.bm-4 Es aquel alimento que, por sus condiciones físicas y químicas, puede sufrir alteraciones y requiere condiciones especiales de elaboración, conservación, almacenamiento, transporte y distribución.
    
    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Contaminación o descomposición
    
    p.mb-4 La contaminación y la descomposición son dos procesos diferentes que afectan la calidad y seguridad de los alimentos. Entender estos procesos es crucial para prevenir enfermedades y garantizar el consumo de alimentos en buen estado.

    .fondo-personalizado-1.f3.mb-2
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4.pt-lg-5
          SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Definición
                .tabla-a.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Contaminación
                        th Descomposición
                    tbody
                      tr
                        td.p-4 La alteración del sabor, olor, color y apariencia de un producto por agentes patógenos.
                        td.p-4 Ocurre cuando los alimentos inician su proceso de degradación, detectable mediante cambios en olor, sabor y textura.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Causantes
                .tabla-a.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Contaminación
                        th Descomposición
                    tbody
                      tr
                        td.p-4 Microorganismos como bacterias, virus y parásitos.
                        td.p-4 Actividad de microorganismos y enzimas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Visibilidad
                .tabla-a.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Contaminación
                        th Descomposición
                    tbody
                      tr
                        td.p-4 No son visibles a simple vista.
                        td.p-4 Detectable mediante cambios en condiciones organolépticas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Ejemplos
                .tabla-a.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Contaminación
                        th Descomposición
                    tbody
                      tr
                        td.p-4 Frutas y verduras regadas con aguas contaminadas, mariscos cultivados en lugares infectados.
                        td.p-4 Olor agrio en la leche, textura viscosa en la carne, sabor amargo en las verduras.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Consecuencias
                .tabla-a.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Contaminación
                        th Descomposición
                    tbody
                      tr
                        td.p-4 Infecciones o intoxicaciones alimentarias.
                        td.p-4 Enfermedades si se consumen productos en descomposición.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 424px;")

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Tipos de contaminación en alimentos
    
    .fondo-personalizado-1.pos-full.f4.top-1.mb-2
      .fondo-personalizado-1__contenido
        .row.mb-5
          .col-lg-9.mb-4.mb-lg-0
            .row.mb-4
              .col-lg-5.pe-lg-0
                .fondo-color-sistema-m.py-3.px-4.px-md-5.h-100.d-flex.align-items-center
                  figure
                    img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 312px;")
              .col-lg-7.ps-lg-0
                .fondo-color-primario.p-4.h-100.d-flex.align-items-center
                  p.mb-0 La seguridad alimentaria es un aspecto crucial en la salud pública, ya que la presencia de contaminantes en los alimentos puede causar graves enfermedades. Existen diversos tipos de contaminación que pueden afectar los alimentos, comprometiendo su calidad y seguridad. Estos contaminantes pueden clasificarse en cuatro categorías principales: física, química, biológica y cruzada. Cada tipo de contaminación tiene sus propias fuentes, características y métodos de prevención.
            
            p.mb-0 A continuación, se detallan estos tipos de contaminación y las medidas necesarias para evitar que los alimentos se vean afectados, asegurando así la protección de los consumidores y el mantenimiento de estándares de higiene adecuados.

          .col-lg-3
            figure
              img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 295px;")
        
        .bg-white
          TabsB.color-acento-contenido.tabs-personalizado-1
            .div.mt-5.pb-5.px-4.px-lg-5(titulo="Contaminación física" :icono="require('@/assets/curso/temas/21.svg')")
              .row 
                .col-lg-8.mb-4.mb-lg-0
                  h4.mb-4 Contaminación física
                  p.mb-4 La contaminación física está relacionada con la presencia de suciedad o restos de materiales no comestibles en los alimentos. Estos materiales incluyen piedras, maderas, cabellos, anillos, vidrios, fragmentos de metal u otros objetos que accidentalmente pueden llegar al alimento. Para prevenir la contaminación física, es importante seguir estas recomendaciones: 
                  ul.lista-ul.list-per-1.ps-md-4.mb-0
                    li
                      i.fas.fa-check-circle.c-color-primario 
                      span Al retirar el hielo de la hielera, no manipularlo con jarras ni vasos; utilice palas plásticas o de acero inoxidable. 
                    li
                      i.fas.fa-check-circle.c-color-primario 
                      span No poner a enfriar alimentos en el hielo que se utiliza para las bebidas.
                    li
                      i.fas.fa-check-circle.c-color-primario 
                      span En el espacio donde se preparan o almacenan los alimentos, no se deben poner palillos o guarniciones.
                    li.mb-0
                      i.fas.fa-check-circle.c-color-primario 
                      span Los abrelatas se deben usar inmediatamente antes de utilizarlos y, si es necesario, cambiar las navajas cuando estén desgastadas u oxidadas.
                .col-lg-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 319px;")
            .div.mt-5.pb-5.px-4.px-lg-5(titulo="Contaminación química" :icono="require('@/assets/curso/temas/24.svg')")
              .row 
                .col-lg-8.mb-4.mb-lg-0
                  h4.mb-4 Contaminación química
                  p.mb-0 La contaminación química se produce por el uso de aditivos no permitidos o cuando estos se añaden en exceso. También puede ocurrir por la presencia de detergentes, barniz de latas o pesticidas. Estos químicos pueden ser perjudiciales para la salud si se ingieren en cantidades significativas. Es crucial seguir las regulaciones sobre el uso de aditivos y asegurarse de que los alimentos no entren en contacto con sustancias químicas durante su manipulación y almacenamiento. 
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 319px;")
            .div.mt-5.pb-5.px-4.px-lg-5(titulo="Contaminación biológica" :icono="require('@/assets/curso/temas/26.svg')")
              .row 
                .col-lg-8.mb-4.mb-lg-0
                  h4.mb-4 Contaminación biológica
                  p.mb-0 La contaminación biológica es causada por toxinas de patógenos como hongos y bacterias. Muchas de estas toxinas son resistentes al calor, como es el caso de la bacteria #[em Staphylococcus]. Esta contaminación puede provocar graves enfermedades alimentarias. Para prevenirla, es importante mantener una higiene adecuada en la manipulación de alimentos, cocinar los alimentos a temperaturas seguras y evitar la contaminación cruzada. 
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 319px;")
            .div.mt-5.pb-5.px-4.px-lg-5(titulo="Contaminación cruzada" :icono="require('@/assets/curso/temas/28.svg')")
              .row 
                .col-lg-8.mb-4.mb-lg-0
                  h4.mb-4 Contaminación cruzada
                  p.mb-0 La contaminación cruzada se da cuando hay transferencia de microorganismos o de sustancias dañinas de una superficie a otra. Esto puede ocurrir en distintas etapas de la fabricación de un alimento. Un ejemplo es cuando se manipula carne en una superficie y luego, sin ser lavada, se manipula otro alimento. Para prevenir la contaminación cruzada, se deben lavar y desinfectar todas las superficies y utensilios después de manipular alimentos crudos, y mantener separados los alimentos crudos de los cocidos durante la preparación y el almacenamiento.
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 319px;")
    
    Separador
    
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Selección de alimentos frescos y de calidad
    
    p.mb-0 La selección adecuada de alimentos es fundamental para garantizar una dieta saludable y segura. Este proceso no solo influye en la calidad nutricional de los productos que consumimos, sino también en nuestra salud a largo plazo. Para realizar una selección acertada, es esencial considerar diversas características específicas de cada tipo de alimento. #[span.fw-bold.c-color-sistema-j A continuación, se detallan los criterios esenciales que deben tenerse en cuenta al elegir alimentos envasados, frutas y hortalizas, productos lácteos, carnes rojas, pollo y pescado. Con esta información, se busca facilitar decisiones informadas que promuevan el bienestar y la seguridad alimentaria.]

    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Selección de alimentos

    p.mb-4 Las primeras características que se deben tomar en cuenta en su selección son:

    .fondo-personalizado-1.f5.top-2.bottom-1
      .fondo-personalizado-1__contenido
        .row 
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 401px;")
          .col-lg-8
            SlyderF.slider-personalizado-2(columnas="col-lg-6")
              .borde-14.py-5.px-4.fondo-color-primario.h-100
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 89px;")
                h4.fondo-color-sistema-m.text-center.p-1.mb-4(style="font-size: 17px;") Condiciones del empaque
                p.mb-0.text-center Por ejemplo, los productos enlatados deben rechazarse si presentan abolladuras, corrosión, abombamiento, entre otros.
              .borde-14.py-5.px-4.fondo-color-primario.h-100
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 84px;")
                h4.fondo-color-sistema-m.text-center.p-1.mb-4(style="font-size: 17px;") Fecha de producción
                p.mb-0.text-center Indica el día en que un producto alimenticio fue fabricado o envasado. Marca el inicio de su vida útil.
              .borde-14.py-5.px-4.fondo-color-primario.h-100
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 86px;")
                h4.fondo-color-sistema-m.text-center.p-1.mb-4(style="font-size: 17px;") Fecha de vencimiento
                p.mb-0.text-center Señala hasta cuándo el producto se mantendrá en condiciones óptimas y será seguro para el consumo. Después de esta fecha, puede no ser seguro comerlo.
              .borde-14.py-5.px-4.fondo-color-primario.h-100
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/33.svg",style="max-width: 95px;")
                h4.fondo-color-sistema-m.text-center.p-1.mb-4(style="font-size: 17px;") Características del alimento
                p.mb-0.text-center En el caso de las grasas y aceites, no deben tener olores rancios; las galletas deben estar crujientes; el pan no debe tener moho.

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Selección de frutas y hortalizas
        
        p.mb-4 Las características que se deben tomar en cuenta al comprar frutas y hortalizas son:
        
        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4
            .tarjeta-personalizada-1
              figure.pb-5.pb-sm-1
                img.mx-auto(src="@/assets/curso/temas/36.png")
              .cont-texto.fondo-color-sistema-m.p-3.p-sm-4
                h4.mb-4.text-center Textura
                p.text-center.mb-0 La corteza o cáscara debe estar libre de cortaduras o magulladuras y firme al tacto.
          .col-lg-4.col-md-6.mb-4
            .tarjeta-personalizada-1
              figure.pb-5.pb-sm-1
                img.mx-auto(src="@/assets/curso/temas/37.png")
              .cont-texto.fondo-color-sistema-m.p-3.p-sm-4
                h4.mb-4.text-center Empaque
                p.text-center.mb-0 Deben estar en canastas plásticas limpias o en bolsas plásticas con aberturas.
          .col-lg-4.col-md-6.mb-4
            .tarjeta-personalizada-1
              figure.pb-5.pb-sm-1
                img.mx-auto(src="@/assets/curso/temas/38.png")
              .cont-texto.fondo-color-sistema-m.p-3.p-sm-4
                h4.mb-4.text-center Transporte
                p.text-center.mb-0 El camión donde se transporte el producto debe estar en buenas condiciones higiénicas.

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Selección de leche y sus derivados
        
        p.mb-4 Las características que se deben tomar en cuenta al comprar productos lácteos son:

        .row
          .col-lg-9
            .row 
              .col-lg-4.mb-4
                .fondo-color-sistema-n.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 58px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0 La leche y sus derivados deben estar envasados.
              .col-lg-4.mb-4
                .fondo-color-sistema-n.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 43px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0 El envase debe estar en buenas condiciones y cerrado.
              .col-lg-4.mb-4
                .fondo-color-sistema-n.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 56px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0 Fecha de vencimiento vigente.
            .row
              .col-lg-4.mb-4
                .fondo-color-sistema-o.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 56px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0.text-white Mantener en refrigeración.
              .col-lg-4.mb-4
                .fondo-color-sistema-o.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/44.svg",style="max-width: 64px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0.text-white Conocimiento de su procedencia y de las condiciones en que fue procesado cada uno de los productos.
              .col-lg-4.mb-4
                .fondo-color-sistema-o.p-4.borde-15.h-100.align-content-center
                  .row.align-items-center
                    .col-lg-4.col-md-2.col-sm-3
                      figure.mb-4.mb-sm-0
                        img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 55px;")
                    .col-lg-8.col-md-10.col-sm-9
                      p.mb-0.text-white Sin sabores ni olores extraños.

          .col-lg-3.order-first.order-lg-last.mb-4.align-self-center
            figure
              img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 295px;")
    
        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Selección de carnes rojas
        
        p.mb-4 Las características que se deben tomar en cuenta al seleccionar carnes son:

        .row.align-items-center
          .col-lg-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 400px;")
          .col-lg-8
            .row 
              .col-lg-3.col-md-6.mb-4
                .fondo-color-sistema-p.p-4.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Color
                  p.mb-0.text-center Rosado o rojo brillante.
              .col-lg-3.col-md-6.mb-4
                .fondo-color-sistema-p.p-4.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Olor
                  p.mb-0.text-center Característico del producto fresco.
              .col-lg-3.col-md-6.mb-4
                .fondo-color-sistema-p.p-4.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Textura
                  p.mb-0.text-center Jugosa y firme.
              .col-lg-3.col-md-6.mb-4
                .fondo-color-sistema-p.p-4.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Temperatura
                  p.mb-0.text-center 4 °C.

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Selección de pollo
    
        p.mb-4 Las características que se deben tomar en cuenta al comprar pollo son:

        .row.align-items-center
          .col-lg-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 403px;")
          .col-lg-8
            .row 
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Color
                  p.mb-0.text-center Rosado brillante.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/53.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Olor
                  p.mb-0.text-center Característico del producto fresco.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Signos de descomposición
                  p.mb-0.text-center Partes pegajosas bajo las alas y alrededor de las articulaciones, y un color oscuro en las puntas de las alas.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Temperatura
                  p.mb-0.text-center Entre 4 °C y 5 °C.

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Selección de pescado
    
        p.mb-4 Las características que se deben tomar en cuenta al comprar pescado son:

        .row.align-items-center
          .col-lg-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 400px;")
          .col-lg-8
            .row 
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/56.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Color
                  p.mb-0.text-center Color natural de la especie.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/57.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Olor
                  p.mb-0.text-center Característico del producto fresco.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Textura
                  p.mb-0.text-center Firme, elástica y resistente a la presión de los dedos.
              .col-lg-3.col-md-6.mb-4.ps-lg-0
                .fondo-color-sistema-p.p-3.borde-14.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 65px;")
                  h4.fondo-color-sistema-q.text-white.text-center.mb-4.p-1(style="font-size: 17px;") Otras características
                  p.mb-0.text-center Ojos salientes y brillantes; agallas de color rojo brillante y húmedas; escamas bien adheridas a la piel; vientre no abultado; carne limpia y fresca.



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
