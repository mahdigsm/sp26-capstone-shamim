import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BadgeVariants } from "@/components/badagebutton";
export function TableDemo() {
  const invoices = [
    {
      order: "#ORD-8821",
      customer: "Sarah Mitchell",
      product: "UI Design Masterclass",
      amount: "$ 89.00",
      status: "Completed",
      date: "Aug 14, 2024",
      detail: "View",
    },
    {
      order: "#ORD-8820",
      customer: "James Park",
      product: "React Pro Template",
      amount: "$49.00",
      status: "Processing",
      date: "Aug 14, 2024",
      detail: "View",
    },
    {
      order: "#ORD-8819",
      customer: "Emily Torres",
      product: "Python for Data Science",
      amount: "$29.99",
      status: "Completed",
      date: "Aug 13, 2024",
      detail: "View",
    },
    {
      order: "#ORD-8818",
      customer: "David Kumar",
      product: "Analytics Dashboard Kit",
      amount: "$79.00",
      status: "Refunded",
      date: "Aug 13, 2024",
      detail: "View",
    },
    {
      order: "#ORD-8817",
      customer: "Lisa Chang",
      product: "UI Design Masterclass",
      amount: "$89.0",
      status: "Completed",
      date: "Aug 12, 2024",
      detail: "View",
    },
  ];
  return (
    <Card className="bg-Section rounded-xl">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
        <CardDescription className="text-lg font-sans font-normal">
          Latest customer transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-mono text-xs px-4 py-3!">
                Order
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="tex">Amount</TableHead>
              <TableHead className="px-4 py-3 font-medium">Status</TableHead>
              <TableHead className="">Date</TableHead>
              <TableHead className="text-right">Detail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((item) => (
              <TableRow key={item.order}>
                <TableCell>{item.order}</TableCell>
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.detail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
