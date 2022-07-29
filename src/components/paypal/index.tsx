// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "AYPsxon6GNdNZdHBNCTa1VWyvdVeDquri5y5xk2HUGfBwI5eR4eCJzoWxm6qrzQy-UiclBUN7glywx0F",
  currency: "EUR",
};

function PaypalOptions({ triggerSubmit }) {
  // const { handleSubmit } = useForm();

  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: {
      layout: "vertical",
      color: "blue",
      label: "pay",
    },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: import.meta.env.VITE_PAYMENT_PRICE,
            },
          },
        ],
      });
    },
    onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details) => {
        // alert(
        //   "Transaction completed by" +
        //     (details?.payer.name.given_name ?? "No details")
        // );
        // alert("Data details: " + JSON.stringify(data, null, 2));
        // handleSubmit((d) => console.log("OLA", d));
        // console.log("triggerSubmit();", triggerSubmit());
        triggerSubmit();
      });
    },
  };
  return (
    <>
      {isPending ? <h2>A carregar...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

export function PaypalPayment({ triggerSubmit }) {
  return (
    <PayPalScriptProvider options={paypalScriptOptions}>
      <PaypalOptions triggerSubmit={triggerSubmit} />
    </PayPalScriptProvider>
  );
}
