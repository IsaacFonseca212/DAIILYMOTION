<template>
  <div class="content">
    <v-col style="display: contents;">
      <v-banner
        width="700"
        style="margin-bottom: 30px; background-color: #160C30"
      >
        Standardㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ$179.00/m
      </v-banner>
      <span style="margin-bottom: 10px;">
        STEP 3 OF 3
      </span>
      <h1>
        Add a payment method
      </h1>
      <span>
        Choose a payment method, fill in the information and start your subscription
      </span>
      <br>
      <img src="@/assets/images/payment-methods.png" alt="" style="width: 20%;">
      <v-card
        class="card"
        :elevation="0"
        width="700"
      >
        <v-card-text>
          <v-form ref="frmLogin">
            <v-text-field
              v-model="name"
              label="Name on Card"
              placeholder="Name and Lastname"
              required
            />
            <v-text-field
              v-model="number"
              label="Card Number"
              placeholder="Enter your Card Number"
              :rules="validateNumber"
              required
            />
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="date"
                  label="Expiration Date"
                  placeholder="MM/YY"
                  required
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="code"
                  label="Security code"
                  placeholder=""
                  required
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-text class="announcement">
          The price includes applicable taxes. To cancel or prevent the automatic renewal of your subscription, go to your profile settings and choose Subscription. Choose START SUBSCRIPTION below to confirm that you agree.
        </v-card-text>
        <v-card-actions style="justify-content: center;">
          <v-btn
            rounded
            large
            width="300"
            style="background-color: #7B2ABF!important;"
            @click="$router.push('/home')"
          >
            START SUBSCRIPTION
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      number: '',
      date: '',
      code: '',
      validateNumber: [
        v => !v || v.length >= 16 || 'The card number must be 16 digits'
      ]
    }
  }
}
</script>

<style scoped>
  .content{
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-image: url('~@/assets/images/purple-gradient.jpg');
    background-attachment: fixed;
    margin-top: 20px;
  }
  .card{
    background-color: transparent;
  }
  .announcement{
    font-size: small;
    margin-bottom: 10px;
  }
</style>
