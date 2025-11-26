// src/components/PaymentTerms.jsx
import React from "react";

export default function PaymentTerms() {
  return (
    <div>
      <div className="bg-blue-200 p-20">
        <h2 className="ml-5 md:text-5xl lg:text-4xl text-3xl font-headingFont sm:text-3xl font-bold text-black p-2">
          | Payment Terms And Conditions
        </h2>
      </div>

      <div className="leading-7 mx-auto p-3 container py-10">
        <h2 className="text-2xl font-headingFont font-bold py-3">Online Payments</h2>

        <ul>
          <li className="text-lg mb-3">
            Kairaa Blockchain Academy provides this online payment solution.
            Kairaa Blockchain Academy may revise these terms from time to time,
            and any modifications will take effect immediately upon being posted
            online. Please make sure you are aware of the current terms. Kairaa
            Blockchain Academy's domicile is in India.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">Terms &amp; Conditions</h2>

        <ul>
          <li className="text-lg mb-3">
            Please read these terms carefully before using the online payment
            system. Using the online payment function on our website shows that
            you agree to these conditions. If you do not agree to these terms,
            do not use this feature.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">
          All payments are subject to the following conditions:-
        </h2>

        <ul>
          <li className="text-lg mb-3">
            When you log in with your unique password, the descriptions of
            matchmaking services are personalized to your specific needs.
            Payment is typically demanded in advance. All fees are quoted in
            Indian rupees. The Kairaa Blockchain Academy reserves the right to
            alter fees at any time. Your payment will usually reach the
            kairaablockchain academy account to which you are making a payment
            within two working days.
            <br />
            1. We cannot assume responsibility for a payment not reaching the
            correct account of kairaablockchain academy because you provided a
            wrong account number or personal information. We cannot assume
            liability if payment is refused or declined by the credit/debit
            card supplier for any reason.
            <br />
            2. If the card supplier denies payment, Kairaa Blockchain Academy
            is under no duty to notify you. You should confirm with your
            bank/credit/debit card provider that the payment has been debited
            from your account.
            <br />
            3. Kairaa Blockchain Academy will not be liable for any damages
            arising from the use, inability to use, or results of use of this
            site, any websites linked to this site, or the materials or
            information contained at any or all such sites, whether based on
            warranty, contract, tort, or any other legal theory, and whether or
            not advised of the possibility of such damages.
          </li>
        </ul>

        <a
          href="mailto:support@kairaaacademy.com"
          className="inline-block mt-4 no-underline"
        >
          <span className="font-bold py-3 block">
            Contact Details: Email: support@kairaaacademy.com
          </span>
        </a>
      </div>
    </div>
  );
}
