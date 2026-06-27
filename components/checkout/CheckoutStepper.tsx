"use client";

type CheckoutStepperProps = {
  currentStep: number;
};

const steps = [
  "Cart",
  "Checkout",
  "Payment",
  "Complete",
];

export default function CheckoutStepper({
  currentStep,
}: CheckoutStepperProps) {
  return (
    <div className="mb-10 rounded-3xl bg-white p-6 shadow-lg">

      <div className="flex items-center justify-between">

        {steps.map((step, index) => {
          const active = index <= currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white transition-all
                  ${
                    active
                      ? "bg-pink-600"
                      : "bg-gray-300"
                  }`}
                >
                  {active && index < currentStep
                    ? "✓"
                    : index + 1}
                </div>

                <span
                  className={`mt-2 text-sm font-medium
                  ${
                    active
                      ? "text-pink-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-4 h-1 flex-1 rounded-full transition-all
                  ${
                    index < currentStep
                      ? "bg-pink-600"
                      : "bg-gray-300"
                  }`}
                />
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}