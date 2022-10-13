import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "https://shirafan-1.herokuapp.com";

export const usePaymentStore = defineStore({
  id: "payment",
  state: () => ({
    payments: [],
  }),
  getters: {},
  actions: {
    async paymentHandler() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/payments`,
          method: "POST",
          data: {},
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        window.snap.pay(data.token, {
          onSuccess(result) {
            this.updateStatusHandler(result.order_id);
            this.router.push("/");
            Swal.fire(
              "Payment Success",
              "Thank you for supporting us!",
              "success"
            );
          },
          onError(result) {
            Swal.fire("Payment Failed", "", "error");
          },
        });
      } catch (err) {
        console.log(err);
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    async updateStatusHandler(orderId) {
      try {
        await axios({
          url: `${baseUrl}/payments`,
          method: "PATCH",
          data: { orderId },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
  },
});
