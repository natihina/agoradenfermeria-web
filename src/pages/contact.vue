<template>
  <v-card
    class="mx-auto mt-10 pt-4 pl-2 p"
    max-width="550"
    min-height="500"
    title="Formulario de contacto"
  >
    <v-container>
      <v-sheet width="450" class="center mx-auto">
        <v-form @submit.prevent>
          <v-text-field
            required
            clearable
            v-model="name"
            :rules="rules"
            label="Nombre"
          ></v-text-field>
          <v-text-field
            required
            clearable
            v-model="mail"
            :rules="rulesMail"
            label="Correo"
          ></v-text-field>
          <v-text-field
            required
            clearable
            v-model="subject"
            :rules="rules"
            label="Asunto"
          ></v-text-field>
          <v-text-field
            required
            clearable
            v-model="message"
            :rules="rules"
            label="Mensaje"
          ></v-text-field>
          <p>Captcha here</p>

          <div class="d-flex justify-end">
            <v-btn
              type="submit"
              elevation="4"
              size="large"
              variant="tonal"
              rounded="sm"
            >
              Enviar
            </v-btn>
          </div>
        </v-form>
      </v-sheet>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      mail: '',
      subject: '',
      message: '',
      rules: [
        value => {
          if (value) return true

          return 'Es necesario introducir texto'
        },
      ],
      rulesMail: [
        value => {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Es necesario entra un mail valido. Ej.agoradenfermeria@agora.net'
        },
      ],
    }),
  }
</script>

