<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad         
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Clasificación y contaminación de alimentos',
      titulo: 'Alimentos y seguridad alimentaria',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de los alimentos constructores?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Proveer energía.', esCorrecta: false },
            { id: 'b', texto: 'Regular el metabolismo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Favorecer la formación y reparación de tejidos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Suministrar minerales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de alimentos son una fuente principal de carbohidratos?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frutas y verduras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carnes y huevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cereales y tubérculos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cereales y tubérculos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según la Resolución 2674 de 2013, un alimento es considerado adulterado cuando:',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Tiene una fecha de vencimiento pasada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se han reemplazado sus elementos propios por sustancias no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ha sufrido cambios en sus propiedades por agentes físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contiene microorganismos patógenos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'El proceso de descomposición de los alimentos se identifica por:',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Presencia de suciedad.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cambio en olor, sabor y textura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de aditivos no permitidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contacto con sustancias químicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es un ejemplo de contaminación cruzada?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Uso excesivo de pesticidas en cultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Manipular carne cruda y luego vegetales sin lavar las manos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presencia de fragmentos de metal en el alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alimentos con residuos de detergente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En la selección de frutas y hortalizas, una característica importante es:',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Fecha de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Olor agradable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Textura firme y sin magulladuras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Color brillante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Para prevenir la contaminación física, se recomienda:',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Usar aditivos aprobados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener alimentos refrigerados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar el contacto de alimentos con objetos no comestibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cocinar alimentos a altas temperaturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una característica importante al seleccionar productos lácteos es:',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Textura jugosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Color brillante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fecha de vencimiento vigente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Olor a leche fresca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué indica la fecha de vencimiento en un producto alimenticio?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'El día en que el producto fue fabricado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La última fecha en que el producto será seguro para consumir.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El inicio de la vida útil del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El periodo recomendado para el almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es un alimento adulterado?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            {
              id: 'a',
              texto:
                'Alimento que contiene sustancias dañinas en cantidades no permitidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alimento con microorganismos patógenos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Alimento al que se le han reemplazado parte de los elementos propios por otras sustancias no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Alimento que sufre cambios en sus propiedades por causas físicas o biológicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
