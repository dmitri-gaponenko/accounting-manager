<template>
  <div class="board">
    <div class="wrapper">
      <h3>Record Payment</h3>
      <div class="inputs">
        <label for="paymentDate" class="row">
          <span>
            Date:
          </span>
          <input
            type="date"
            id="paymentDate"
            v-model="paymentDate"
          />
        </label>

        <div class="row">
          <label for="one">
            <input type="radio" id="one" value="Card" v-model="paymentType" />
            Card
          </label>

          <label for="two">
            <input type="radio" id="two" value="Cash" v-model="paymentType" />
            Cash
          </label>
        </div>

        <label for="paymentCategory" class="row">
          <span>
            Payment category:
          </span>
          <select v-model="paymentCategory" id="paymentCategory">
            <option v-for="category in categories" :key="category">{{ category }}</option>
          </select>
        </label>

        <div class="row">
          <span class="label">Amount:</span>
          <input v-model="paymentAmount" v-focus>
        </div>

        <div class="row">
          <span class="label">Description:</span>
          <textarea v-model="paymentDescription" placeholder="desc"></textarea>
        </div>
      </div>

      <div class="buttons">
        <am-button @click="handleSaveButton">Save</am-button>
      </div>

      <div class="payments" v-if="payments.length">
        <table class="table">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr
            v-for="payment in payments"
            :key="payment"
          >
            <td>{{ payment.paymentDate }}</td>
            <td>{{ payment.paymentAmount }}</td>
            <td>{{ payment.paymentCategory }}</td>
            <td>{{ payment.paymentType }}</td>
            <td>{{ payment.paymentDescription }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive, defineComponent, ref, watch,
} from 'vue';
import AmButton from '@/components/UI/Button.vue';

interface PaymentsInfo {
  paymentDate: string,
  paymentAmount: string,
  paymentCategory: string,
  paymentType: string,
  paymentDescription: string,
}

export default defineComponent({
  name: 'am-board',
  components: {
    AmButton,
  },
  setup() {
    const paymentDate = ref(new Date().toISOString().slice(0, 10));
    const paymentAmount = ref('');
    const paymentCategory = ref('Питание/магазин');
    const paymentDescription = ref('');
    const paymentType = ref('Card');
    const categories = reactive(['Питание/магазин',
      'Подарки',
      'Здоровье/медицина',
      'Интернет',
      'Транспорт/такси',
      'Мобильная связь',
      'Шерлок',
      'Коммунальные услуги',
      'Путешествия',
      'Автомобиль/бензин',
      'Другое',
      'Бытовые товары',
      'Питание вне дома',
      'Одежда',
      'Развлечения/кино',
      'Благотворительность',
      'Ремонт',
      'Перевод Насте',
      'Подписки',
      'Парковка',
      'Страховка',
      'Визы',
      'Прокат']);
    const payments = ref([] as PaymentsInfo[]);

    const paymentsInLocalStorage = localStorage.getItem('am_payments');
    if (paymentsInLocalStorage) {
      // eslint-disable-next-line no-underscore-dangle
      payments.value = JSON.parse(paymentsInLocalStorage)._value.map((el: PaymentsInfo) => ({
        paymentDate: el.paymentDate,
        paymentAmount: el.paymentAmount,
        paymentCategory: el.paymentCategory,
        paymentType: el.paymentType,
        paymentDescription: el.paymentDescription,
      }));
    }

    const handleSaveButton = () => {
      // console.log('paymentDate:', paymentDate.value);
      // console.log('paymentAmount:', paymentAmount.value);
      // console.log('paymentCategory:', paymentCategory.value);
      // console.log('paymentType:', paymentType.value);
      // console.log('paymentDescription:', paymentDescription.value);

      payments.value.push({
        paymentDate: paymentDate.value,
        paymentAmount: paymentAmount.value,
        paymentCategory: paymentCategory.value,
        paymentType: paymentType.value,
        paymentDescription: paymentDescription.value,
      });
    };

    watch(
      () => payments,
      (state) => {
        localStorage.setItem('am_payments', JSON.stringify(state));
      },
      { deep: true },
    );

    return {
      paymentDate,
      paymentAmount,
      paymentType,
      paymentCategory,
      paymentDescription,
      categories,
      payments,
      handleSaveButton,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  width: 300px;
  height: 300px;
  margin: 10px 0;
  border: 1px solid #78909c;
  /*background-color: #00838f;*/
  background-color: #00838f1f;
  display: grid;
  gap: 3px;
  padding: 3px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
h3 {
  margin: 0;
}
.inputs {
  margin: 10px 0;
}
.row {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
}
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payments {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>