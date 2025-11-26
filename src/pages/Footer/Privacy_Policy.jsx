// src/components/PrivacyPolicy.jsx
import React from "react";

export default function Privacy_Policy() {
  return (
    <div>
      <div className="bg-[#bfdcfe] p-20">
      <h2 className="ml-5 md:text-5xl  lg:text-5xl text-5xl font-headingFont sm:text-3xl font-bold text-black">
        | Privacy Policy
      </h2>
      </div>
      <div className="leading-7 mx-auto p-3 container py-10">
        
        <h2 className="text-2xl font-headingFont font-bold py-3">Online Payments</h2>
        <ul>
          <li className="text-lg mb-3">
            Kairaa Blockchain Academy provides this online payment solution.
            Kairaa Blockchain Academy may revise these terms from time to time, 
            and any modifications will take effect immediately upon being posted online.
            Please make sure you are aware of the current terms.
            Kairaa Blockchain Academy's domicile is in India.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">Refund Policy</h2>
        <ul>
          <li className="text-lg mb-3">
            * If the Customer leaves the Kairaa blockchain academy before they complete
            their service period, there shall be no entitlement to a refund of paid service fees. 
            <br />
            * Refunds, if applicable, at the discretion of the Management, will only be made to the
            debit/credit card used for the original transaction. For the avoidance of doubt nothing in
            this Policy shall require the Kairaa blockchain academy to refund the Fees (or part thereof)
            unless such Fees (or part thereof) have previously been paid.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">Privacy Policy</h2>
        <ul>
          <li className="text-lg mb-3">
            This Privacy Policy applies to all products, services, and websites provided by
            Kairaa blockchain academy. We may occasionally upload product-specific privacy warnings
            or Help Centre materials to provide further information about our products.
            If you have any questions regarding this Privacy Policy, please contact us through our
            website or email us at support@kairaaacademy.com. We collect information and use it to
            support our Kairaa blockchain academy.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">Changes to Our Privacy Policy</h2>
        <ul>
          <li className="text-lg mb-3">
            Kairaa blockchain academy reserves the entire right to
            modify/amend/remove this privacy statement anytime and without any reason.
            Nothing contained herein creates or is intended to create a contract/agreement
            between Kairaa blockchain academy and any user visiting the
            Kairaa blockchain academy website or providing identifying information.
          </li>
        </ul>

        <h2 className="text-2xl font-headingFont font-bold py-3">DND Policy</h2>
        <ul>
          <li className="text-lg mb-3">
            To unsubscribe from our email notifications, SMS alerts, or contacts,
            simply send an email to support@kairaaacademy.com with your mobile number.
            Your email will be removed from the alert list.
          </li>
        </ul>

        <a href="mailto:support@kairaaacademy.com" className="inline-block">
          <span className="font-bold py-3 block">
            Contact Details: Email: support@kairaaacademy.com
          </span>
        </a>

      </div>
    </div>
  );
}
