import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const NewUsersCard = () => {
  return (
    <Card className="w-full h-full md:w-1/2 py-2">
      <CardHeader>
        <CardTitle>Usuarios Recientes</CardTitle>
        <CardDescription>
          Has recibido 5 nuevos usuarios en las últimas 24 horas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Usuario</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Fecha de Registro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Ana García</TableCell>
              <TableCell>ana@ejemplo.com</TableCell>
              <TableCell>Hace 2 horas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Carlos López</TableCell>
              <TableCell>carlos@ejemplo.com</TableCell>
              <TableCell>Hace 5 horas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">María Rodríguez</TableCell>
              <TableCell>maria@ejemplo.com</TableCell>
              <TableCell>Hace 8 horas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Juan Pérez</TableCell>
              <TableCell>juan@ejemplo.com</TableCell>
              <TableCell>Hace 12 horas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Laura Martínez</TableCell>
              <TableCell>laura@ejemplo.com</TableCell>
              <TableCell>Hace 18 horas</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
