import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { DrawerSwipeHandle } from "./open-drawer";

const invoices = [
  {
    order: "#ORD-8821",
    customer: "Sarah Mitchell",
    product: "UI Design Masterclass",
    amount: "$89.00",
    status: "Completed",
    date: "Aug 14, 2024",
  },
  {
    order: "#ORD-8820",
    customer: "James Park",
    product: "React Pro Template",
    amount: "$49.00",
    status: "Processing",
    date: "Aug 14, 2024",
  },
  {
    order: "#ORD-8819",
    customer: "Emily Torres",
    product: "Python for Data Science",
    amount: "$29.99",
    status: "Completed",
    date: "Aug 13, 2024",
  },
  {
    order: "#ORD-8818",
    customer: "David Kumar",
    product: "Analytics Dashboard Kit",
    amount: "$79.00",
    status: "Refunded",
    date: "Aug 13, 2024",
  },
  {
    order: "#ORD-8817",
    customer: "Lisa Chang",
    product: "UI Design Masterclass",
    amount: "$89.00",
    status: "Completed",
    date: "Aug 12, 2024",
  },
];

export function TableDemo() {
  return (
    <Card className="rounded-2xl border shadow-none bg-Section dark:bg-foreground">
      <CardHeader className="pb-5">
        <CardTitle className="text-lg font-semibold dark:text-input">
          Recent Orders
        </CardTitle>

        <CardDescription className="text-base text-muted-foreground dark:text-popover">
          Latest customer transactions
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="text-xl dark:bg-foreground">
              <TableHead className="pl-6 text-sm  dark:text-chart-1 text-muted-foreground uppercase  hidden sm:table-cell">
                Order
              </TableHead>

              <TableHead className="text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Customer
              </TableHead>

              <TableHead className="text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Product
              </TableHead>

              <TableHead className="text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Amount
              </TableHead>

              <TableHead className="text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Status
              </TableHead>

              <TableHead className="text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Date
              </TableHead>

              <TableHead className="pr-6 text-right text-sm  dark:text-chart-1 uppercase text-muted-foreground">
                Detail
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {invoices.map((item) => (
              <TableRow
                key={item.order}
                className="hover:bg-muted/40 dark:hover-popover transition-colors"
              >
                <TableCell className="pl-6 font-medium px-3 py-4">
                  <div className="leading-5 text-xs font-mono dark:text-input">
                    <p>{item.order.split("-")[0]}-</p>
                    <p>{item.order.split("-")[1]}</p>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="leading-5 font-normal text-sm px-4 py-3 dark:text-input">
                    <p>{item.customer.split(" ")[0]}</p>
                    <p>{item.customer.split(" ")[1]}</p>
                  </div>
                </TableCell>

                <TableCell className="max-w-[170px] truncate text-muted-foreground p-5 dark:text-popover text-base">
                  {item.product}
                </TableCell>

                <TableCell className="font-semibold dark:text-white text-base">
                  {item.amount}
                </TableCell>

                <TableCell>
                  {item.status === "Completed" && (
                    <Badge className="rounded-full bg-emerald-100 px-3 text-emerald-700 h-7 hover:bg-emerald-100 dark:bg-accent text-sm dark:text-accent-foreground border-green-400">
                      Completed
                    </Badge>
                  )}

                  {item.status === "Processing" && (
                    <Badge className="rounded-full bg-blue-100 px-3 text-blue-700 hover:bg-blue-100 h-7 dark:bg-sidebar-primary dark:text-blue-400 text-sm border-blue-400">
                      Processing
                    </Badge>
                  )}

                  {item.status === "Refunded" && (
                    <Badge className="rounded-full bg-red-100 px-3 text-red-700 hover:bg-red-100 dark:bg-destructive text-sm border-red-300 dark:text-red-400 h-7">
                      Refunded
                    </Badge>
                  )}
                </TableCell>

                <TableCell>
                  <div className="flex flex-col text-sm leading-5 text-muted-foreground">
                    <span>{item.date.split(" ")[0]}</span>
                    <span>{item.date.split(" ")[1]}</span>
                    <span>{item.date.split(" ")[2]}</span>
                  </div>
                </TableCell>

                <TableCell className="pr-6 text-right">
                  <button className="text-xs  duration-200 hover:scale-110 dark:text-input dark:hover-bg-blue-500">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
