import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
<Accordion type="single" collapsible defaultValue="item-1" className="max-w-lg space-y-3 p-6">
<h1>Help & FAQ
</h1>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-black">How do I add a new digital product?</AccordionTrigger>
    <AccordionContent>
     Click the 'Add Product' button in the top-right corner of the dashboard. Fill in the product name, category, price, and upload your digital file. Set the status to 'Active' when ready to publish.

    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className="text-black">How are refunds handled?</AccordionTrigger>
    <AccordionContent>
Refund requests appear in the Orders table with a 'Refunded' status. Navigate to the order, click View, and select 'Process Refund'. Refunds are applied to the customer's original payment method within 5–10 business days.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className="text-black">Can I offer coupon codes?</AccordionTrigger>
    <AccordionContent>
Yes. Go to Store Settings → Promotions. Create coupon codes with fixed-amount or percentage discounts, set expiry dates, and limit usage per customer.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger className="text-black">How does file delivery work?</AccordionTrigger>
    <AccordionContent>
After a successful purchase, customers receive a download link via email valid for 7 days and 3 download attempts. You can customize these limits in Settings → Delivery Rules.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger className="text-black">What payment methods are supported?</AccordionTrigger>
    <AccordionContent>
DigitalShelf supports Stripe (cards), PayPal, Apple Pay, and Google Pay out of the box. Additional gateways can be connected via the Integrations panel.
    </AccordionContent>
  </AccordionItem>

</Accordion>
  )
}