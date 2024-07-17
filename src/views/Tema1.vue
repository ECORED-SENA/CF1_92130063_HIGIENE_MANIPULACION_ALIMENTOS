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
