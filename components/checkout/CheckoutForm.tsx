"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-bold">
        Shipping Address
      </h2>

      <div className="grid gap-5">

        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="rounded-xl border p-4 outline-none focus:border-pink-500"
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="rounded-xl border p-4 outline-none focus:border-pink-500"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border p-4 outline-none focus:border-pink-500"
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          rows={4}
          className="rounded-xl border p-4 outline-none focus:border-pink-500"
        />

        <div className="grid gap-4 md:grid-cols-3">

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="rounded-xl border p-4 outline-none focus:border-pink-500"
          />

          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="rounded-xl border p-4 outline-none focus:border-pink-500"
          />

          <input
            name="pincode"
            placeholder="PIN Code"
            value={form.pincode}
            onChange={handleChange}
            className="rounded-xl border p-4 outline-none focus:border-pink-500"
          />

        </div>

        <textarea
          name="notes"
          placeholder="Order Notes (Optional)"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="rounded-xl border p-4 outline-none focus:border-pink-500"
        />

      </div>

    </div>
  );
}