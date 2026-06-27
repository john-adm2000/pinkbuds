"use client";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import Navbar from "@/components/layout/Navbar";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CartSummary from "@/components/cart/CartSummary";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <h1 className="mb-10 text-4xl font-bold">
            Checkout
          </h1>
          <CheckoutStepper currentStep={1} />

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2">

              <CheckoutForm />

            </div>

            <CartSummary />

          </div>

        </div>

      </main>

    </>
  );
}