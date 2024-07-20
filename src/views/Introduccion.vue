<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5.pt-5
        .fondo-color-sistema-i.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto.mb-3.mb-md-0.text-center(data-aos="fade-right")
              .fondo-color-primario.rounded-circle.p-3.d-inline-block
                figure
                  img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 41px;")
            .col(data-aos="fade-left")
              p.mb-0 Los alimentos son esenciales para la salud y el bienestar, proporcionando las calorías y la energía necesarias para el funcionamiento adecuado del cuerpo. Además de nutrirnos, juegan un papel crucial en el desarrollo y el mantenimiento de los sistemas corporales. Este componente explora la clasificación de los alimentos según su origen y función, permitiendo una mejor comprensión de su aporte nutricional.
        
        .row.align-items-center.mb-3
          .col-lg-4
            figure.mb-4.mb-lg-0(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 400px;")
          .col-lg-8
            p.mb-4(data-aos="fade") La seguridad alimentaria #[span.c-color-sistema-j.fw-bold es un aspecto fundamental para prevenir enfermedades y garantizar el consumo de alimentos en buen estado]. En este contexto, se describen los diferentes tipos de contaminación que pueden afectar los alimentos, como la contaminación física, química, biológica y cruzada. Conocer estos tipos de contaminación y sus fuentes ayuda a implementar medidas de prevención eficaces.

            .fondo-color-sistema-k.p-4.py-lg-5.borde-14.position-relative
              p.mb-0.position-relative(style="z-index: 1;",data-aos="fade-up") Además, se proporcionan consejos prácticos para la correcta selección y almacenamiento de alimentos. Desde las condiciones del empaque hasta la fecha de vencimiento, pasando por las características propias de cada tipo de alimento, estas recomendaciones son cruciales para mantener la calidad y la seguridad de los productos alimenticios. Al seguir estas pautas, se puede asegurar que los alimentos consumidos sean seguros y nutritivos.
              img.position-absolute(src="@/assets/curso/temas/3.png",style="max-width: 79px;bottom: 0;z-index: 0;right: 0;")

        
    
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
