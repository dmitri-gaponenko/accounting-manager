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
          <input type="number" v-model="paymentAmount">
        </div>

        <div class="row">
          <span class="label">Description:</span>
          <textarea v-model="paymentDescription" placeholder="desc"></textarea>
        </div>
      </div>

      <div class="buttons">
        <am-button @click="handleSaveButton">
          {{ currentId === '' ? 'Save' : 'Update' }}
        </am-button>
        <am-button v-if="currentId !== ''" @click="handleDeleteButton">
          Delete
        </am-button>
      </div>

      <div class="payments" v-if="payments.length">
        <table class="table">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          <tr
            v-for="payment in payments"
            :key="payment"
          >
            <td @click="handleEditButton(payment.paymentId)"
                style="font-size: 12px; text-decoration: underline;">
              {{ new Date(payment.paymentDate).toDateString().slice(4, 10) }}
            </td>
            <td>{{ payment.paymentAmount }}</td>
            <td style="font-size: 12px;">{{ payment.paymentCategory }}</td>
            <td>{{ payment.paymentDescription }}</td>
          </tr>
        </table>
        <div class="buttons">
          <am-button @click="handleExportButton" :small="true">Export</am-button>
          <am-button @click="handleClearButton" :small="true">Clear</am-button>
        </div>
      </div>

      <am-popup
          :is-open="isPopupOpen"
          :title="''"
          @close="closePopup"
      >
        <div class="row">
          <label for="res">
            <textarea
                v-model="stringifyExportResult"
                id="res"
                rows="8"
                cols="50"
            ></textarea>
          </label>
        </div>
      </am-popup>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive, defineComponent, ref, watch, computed,
} from 'vue';
import AmButton from '@/components/UI/Button.vue';
import AmPopup from '@/components/UI/Popup.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

interface PaymentsInfo {
  paymentId: string,
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
    AmPopup,
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

    const currentId = ref('');
    const isPopupOpen = ref(false);

    const paymentsInLocalStorage = localStorage.getItem('am_payments');
    if (paymentsInLocalStorage) {
      // eslint-disable-next-line no-underscore-dangle
      payments.value = JSON.parse(paymentsInLocalStorage)._value.map((el: PaymentsInfo) => ({
        paymentId: el.paymentId,
        paymentDate: el.paymentDate,
        paymentAmount: el.paymentAmount,
        paymentCategory: el.paymentCategory,
        paymentType: el.paymentType,
        paymentDescription: el.paymentDescription,
      }));
    }

    const clearInputs = () => {
      currentId.value = '';
      paymentDate.value = new Date().toISOString().slice(0, 10);
      paymentAmount.value = '';
      paymentCategory.value = 'Питание/магазин';
      paymentDescription.value = '';
      paymentType.value = 'Card';
    };

    const handleSaveButton = () => {
      if (currentId.value === '') {
        const id = uuidv4();
        payments.value.push({
          paymentId: id,
          paymentDate: paymentDate.value,
          paymentAmount: paymentAmount.value.toString().replaceAll('.', ','),
          paymentCategory: paymentCategory.value,
          paymentType: paymentType.value,
          paymentDescription: paymentDescription.value,
        });
      } else {
        const editPayment = payments.value.find((el) => el.paymentId === currentId.value);
        if (editPayment) {
          editPayment.paymentDate = paymentDate.value;
          editPayment.paymentAmount = paymentAmount.value.toString().replaceAll('.', ',');
          editPayment.paymentCategory = paymentCategory.value;
          editPayment.paymentDescription = paymentDescription.value;
          editPayment.paymentType = paymentType.value;
        }
      }

      clearInputs();
    };

    const handleDeleteButton = () => {
      const index = payments.value.findIndex((el) => el.paymentId === currentId.value);
      if (index > -1) {
        payments.value.splice(index, 1);
      }

      clearInputs();
    };

    const handleEditButton = (id: string) => {
      const currentPayment = payments.value.find((el) => el.paymentId === id);
      if (currentPayment) {
        currentId.value = id;
        paymentDate.value = currentPayment?.paymentDate;
        paymentAmount.value = currentPayment?.paymentAmount;
        paymentCategory.value = currentPayment?.paymentCategory;
        paymentDescription.value = currentPayment?.paymentDescription;
        paymentType.value = currentPayment?.paymentType;
      }
    };

    const handleClearButton = () => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Are you sure you want to clear all data?')) {
        payments.value = [];
      }
    };

    const openPopup = () => {
      isPopupOpen.value = true;
    };

    const closePopup = () => {
      isPopupOpen.value = false;
    };

    const handleExportButton = () => {
      openPopup();
    };

    const stringifyExportResult = computed(() => payments.value.map((el: PaymentsInfo) => {
      const desc = `${el.paymentType === 'Cash' ? '(cash) ' : ''}${el.paymentDescription}`;
      return `${el.paymentDate}\t${el.paymentAmount}\t${desc}\t${el.paymentCategory}`;
    }).join('\n'));

    watch(
      () => payments,
      (state) => {
        localStorage.setItem('am_payments', JSON.stringify(state));
      },
      { deep: true },
    );

    return {
      currentId,
      paymentDate,
      paymentAmount,
      paymentType,
      paymentCategory,
      paymentDescription,
      categories,
      payments,
      handleSaveButton,
      handleEditButton,
      handleDeleteButton,
      handleClearButton,
      handleExportButton,
      isPopupOpen,
      closePopup,
      stringifyExportResult,
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
  align-items: center;
}
</style>
